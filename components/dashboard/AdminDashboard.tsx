"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Application } from "@/lib/types";

type AdminDashboardProps = {
  user: {
    sub: string;
    name: string;
    email: string;
    picture?: string;
    role: string;
  };
};

const PAGE_SIZE = 8;

const statusStyles: Record<string, string> = {
  Pending:
    "border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400",
  Shortlisted:
    "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400",
  "Interview Scheduled":
    "border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400",
  Selected:
    "border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400",
  Rejected:
    "border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400",
};

function StatusBadge({ status }: { status: Application["status"] }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.08em] ${
        statusStyles[status] ??
        "border-border bg-surface-muted text-text-muted"
      }`}
    >
      {status}
    </span>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="border-r border-border px-5 py-5 last:border-r-0 sm:px-6">
      <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-faint">
        {label}
      </div>

      <div className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
        {value}
      </div>
    </div>
  );
}

export default function AdminDashboard({
  user,
}: AdminDashboardProps) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"All" | Application["status"]>(
    "All"
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    let active = true;

    async function loadApplications() {
      try {
        const response = await fetch("/api/applications", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load applications");
        }

        const data = await response.json();

        if (active) {
          setApplications(
            Array.isArray(data)
              ? data
              : Array.isArray(data.applications)
                ? data.applications
                : []
          );
        }
      } catch {
        if (active) {
          setApplications([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadApplications();

    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => {
    return {
      total: applications.length,
      pending: applications.filter(
        (application) => application.status === "Pending"
      ).length,
      shortlisted: applications.filter(
        (application) => application.status === "Shortlisted"
      ).length,
      selected: applications.filter(
        (application) => application.status === "Selected"
      ).length,
    };
  }, [applications]);

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications
      .filter((application) => {
        if (
          status !== "All" &&
          application.status !== status
        ) {
          return false;
        }

        if (!query) {
          return true;
        }

        return [
          application.fullName,
          application.universityEmail,
          application.personalEmail,
          application.registrationNumber,
          application.program,
          application.branch,
          application.preferredRole,
        ].some((value) =>
          value.toLowerCase().includes(query)
        );
      })
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() -
          new Date(a.timestamp).getTime()
      );
  }, [applications, search, status]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredApplications.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleApplications = filteredApplications.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const needsAttention = useMemo(() => {
    return applications
      .filter(
        (application) => application.status === "Pending"
      )
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() -
          new Date(a.timestamp).getTime()
      )
      .slice(0, 5);
  }, [applications]);

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-350 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <header className="border-b border-border pb-7">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-text-faint">
              AWS LPU Recruitment
            </span>
          </div>

          <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-none tracking-[-0.055em]">
            Applications
          </h1>

          <p className="mt-3 max-w-130 text-[12px] leading-5 text-text-muted">
            Review recruitment activity and handle applications that need
            your attention.
          </p>
        </header>

        <section className="mt-7 grid grid-cols-2 border border-border bg-surface sm:grid-cols-4">
          <Stat label="Total" value={stats.total} />
          <Stat label="Pending" value={stats.pending} />
          <Stat label="Shortlisted" value={stats.shortlisted} />
          <Stat label="Selected" value={stats.selected} />
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-faint">
                Needs attention
              </div>

              <h2 className="mt-2 text-xl font-semibold tracking-[-0.035em]">
                Pending applications
              </h2>
            </div>

            <Link
              href="/applications"
              className="text-[9px] font-medium uppercase tracking-widest text-text-muted transition hover:text-foreground"
            >
              View all →
            </Link>
          </div>

          <div className="border border-border bg-surface">
            {loading ? (
              <div className="px-5 py-12 text-center text-[11px] text-text-faint">
                Loading applications...
              </div>
            ) : needsAttention.length === 0 ? (
              <div className="px-5 py-12 text-center text-[11px] text-text-faint">
                No pending applications.
              </div>
            ) : (
              <div>
                {needsAttention.map((application) => (
                  <Link
                    key={application.applicationId}
                    href={`/applications/${application.applicationId}`}
                    className="flex items-center gap-4 border-b border-border px-5 py-4 last:border-b-0 transition-colors hover:bg-surface-muted sm:px-6"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[10px] font-medium">
                      {application.fullName
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[12px] font-medium">
                        {application.fullName}
                      </div>

                      <div className="mt-1 truncate text-[9px] text-text-faint">
                        {application.universityEmail}
                      </div>
                    </div>

                    <div className="hidden min-w-30 text-[10px] text-text-muted sm:block">
                      {application.preferredRole}
                    </div>

                    <StatusBadge status={application.status} />

                    <span className="text-text-faint">→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <div className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-faint">
              Application directory
            </div>

            <h2 className="mt-2 text-xl font-semibold tracking-[-0.035em]">
              Find an applicant
            </h2>

            <p className="mt-1 text-[10px] text-text-muted">
              Search when you need a specific application.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, email, registration number..."
              className="h-10 flex-1 border border-border bg-surface px-4 text-[11px] outline-none transition placeholder:text-text-faint focus:border-border-strong"
            />

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as
                    | "All"
                    | Application["status"]
                )
              }
              className="h-10 border border-border bg-surface px-4 text-[11px] text-foreground outline-none focus:border-border-strong"
            >
              <option value="All">All statuses</option>
              <option value="Pending">Pending</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Interview Scheduled">
                Interview Scheduled
              </option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="mt-4 overflow-hidden border border-border bg-surface">
            {loading ? (
              <div className="px-5 py-12 text-center text-[11px] text-text-faint">
                Loading...
              </div>
            ) : visibleApplications.length === 0 ? (
              <div className="px-5 py-12 text-center text-[11px] text-text-faint">
                No applications found.
              </div>
            ) : (
              <>
                <div className="divide-y divide-border">
                  {visibleApplications.map((application) => (
                    <Link
                      key={application.applicationId}
                      href={`/applications/${application.applicationId}`}
                      className="flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-surface-muted sm:flex-row sm:items-center sm:px-6"
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[9px] font-medium">
                          {application.fullName
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div className="min-w-0">
                          <div className="truncate text-[11px] font-medium">
                            {application.fullName}
                          </div>

                          <div className="mt-0.5 truncate text-[9px] text-text-faint">
                            {application.universityEmail}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-5 sm:min-w-80 sm:justify-end">
                        <div className="hidden text-right sm:block">
                          <div className="text-[10px] text-text-muted">
                            {application.preferredRole}
                          </div>

                          <div className="mt-0.5 text-[9px] text-text-faint">
                            {application.program} · {application.branch}
                          </div>
                        </div>

                        <StatusBadge status={application.status} />

                        <span className="text-text-faint">→</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-border px-5 py-4">
                  <span className="text-[9px] text-text-faint">
                    {filteredApplications.length === 0
                      ? 0
                      : (currentPage - 1) * PAGE_SIZE + 1}
                    –
                    {Math.min(
                      currentPage * PAGE_SIZE,
                      filteredApplications.length
                    )}{" "}
                    of {filteredApplications.length}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() =>
                        setPage((value) =>
                          Math.max(1, value - 1)
                        )
                      }
                      className="border border-border px-3 py-1.5 text-[9px] text-text-muted transition hover:border-border-strong hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                    >
                      Previous
                    </button>

                    <span className="px-2 text-[9px] text-text-faint">
                      {currentPage} / {totalPages}
                    </span>

                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setPage((value) =>
                          Math.min(totalPages, value + 1)
                        )
                      }
                      className="border border-border px-3 py-1.5 text-[9px] text-text-muted transition hover:border-border-strong hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <footer className="mt-8 border-t border-border pt-5 text-[9px] text-text-faint">
          AWS LPU Recruitment Management Portal
        </footer>
      </div>
    </main>
  );
}
