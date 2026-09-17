"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type ApiApplication = {
  applicationId: string;
  fullName: string;
  registrationNumber: string;
  universityEmail: string;
  personalEmail: string;
  preferredRole: string;
  program: string;
  branch: string;
  status: string;
};

type Application = {
  id: string;
  fullName: string;
  registrationNumber: string;
  email: string;
  preferredRole: string;
  program: string;
  branch: string;
  status: string;
};

const statuses = [
  "Pending",
  "Shortlisted",
  "Interview Scheduled",
  "Selected",
  "Rejected",
];

type SortField =
  | "id"
  | "fullName"
  | "preferredRole"
  | "program"
  | "branch"
  | "status";

const validSortFields: SortField[] = [
  "id",
  "fullName",
  "preferredRole",
  "program",
  "branch",
  "status",
];

export default function Dashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);

  const [sortField, setSortField] = useState<SortField>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [showFilters, setShowFilters] = useState(false);
  const [urlInitialized, setUrlInitialized] = useState(false);

  /* ============================================================
     LOAD APPLICATIONS FROM API
  ============================================================ */

  useEffect(() => {
    let cancelled = false;

    const loadApplications = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/applications", {
          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.error || "Failed to fetch applications"
          );
        }

        const apiApplications: ApiApplication[] = result.data || [];

        const mappedApplications: Application[] = apiApplications
          .filter((application) => application.applicationId)
          .map((application) => ({
            id: application.applicationId,
            fullName: application.fullName || "N/A",
            registrationNumber:
              application.registrationNumber || "N/A",
            email:
              application.universityEmail ||
              application.personalEmail ||
              "N/A",
            preferredRole: application.preferredRole || "N/A",
            program: application.program || "N/A",
            branch: application.branch || "N/A",
            status: application.status || "Pending",
          }));

        if (!cancelled) {
          setApplications(mappedApplications);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load applications"
          );
          setApplications([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadApplications();

    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  /* ============================================================
     RESTORE DASHBOARD STATE FROM URL
  ============================================================ */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const query = params.get("q") || "";
    const statusesFromUrl = params.get("status");
    const rolesFromUrl = params.get("role");
    const programsFromUrl = params.get("program");
    const branchesFromUrl = params.get("branch");
    const sortFromUrl = params.get("sort");
    const directionFromUrl = params.get("direction");

    setSearch(query);
    setDebouncedSearch(query);

    setSelectedStatuses(
      statusesFromUrl
        ? statusesFromUrl.split(",").filter(Boolean)
        : []
    );

    setSelectedRoles(
      rolesFromUrl
        ? rolesFromUrl.split(",").filter(Boolean)
        : []
    );

    setSelectedPrograms(
      programsFromUrl
        ? programsFromUrl.split(",").filter(Boolean)
        : []
    );

    setSelectedBranches(
      branchesFromUrl
        ? branchesFromUrl.split(",").filter(Boolean)
        : []
    );

    if (
      sortFromUrl &&
      validSortFields.includes(sortFromUrl as SortField)
    ) {
      setSortField(sortFromUrl as SortField);
    }

    if (
      directionFromUrl === "asc" ||
      directionFromUrl === "desc"
    ) {
      setSortDirection(directionFromUrl);
    }

    setUrlInitialized(true);
  }, []);

  /* ============================================================
     KEEP URL IN SYNC
  ============================================================ */

  useEffect(() => {
    if (!urlInitialized) return;

    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("q", search.trim());
    }

    if (selectedStatuses.length > 0) {
      params.set("status", selectedStatuses.join(","));
    }

    if (selectedRoles.length > 0) {
      params.set("role", selectedRoles.join(","));
    }

    if (selectedPrograms.length > 0) {
      params.set("program", selectedPrograms.join(","));
    }

    if (selectedBranches.length > 0) {
      params.set("branch", selectedBranches.join(","));
    }

    params.set("sort", sortField);
    params.set("direction", sortDirection);

    const queryString = params.toString();

    const newUrl = queryString
      ? `/dashboard?${queryString}`
      : "/dashboard";

    window.history.replaceState(null, "", newUrl);
  }, [
    urlInitialized,
    search,
    selectedStatuses,
    selectedRoles,
    selectedPrograms,
    selectedBranches,
    sortField,
    sortDirection,
  ]);

  /* ============================================================
     FILTER OPTIONS
  ============================================================ */

  const roles = useMemo(
    () =>
      Array.from(
        new Set(
          applications
            .map((application) => application.preferredRole)
            .filter(Boolean)
        )
      ).sort(),
    [applications]
  );

  const programs = useMemo(
    () =>
      Array.from(
        new Set(
          applications
            .map((application) => application.program)
            .filter(Boolean)
        )
      ).sort(),
    [applications]
  );

  const branches = useMemo(
    () =>
      Array.from(
        new Set(
          applications
            .map((application) => application.branch)
            .filter(Boolean)
        )
      ).sort(),
    [applications]
  );

  /* ============================================================
     DEBOUNCED SEARCH
  ============================================================ */

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  /* ============================================================
     TOGGLE FILTER
  ============================================================ */

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: Dispatch<SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  /* ============================================================
     CLEAR ALL FILTERS
  ============================================================ */

  const clearAllFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setSelectedStatuses([]);
    setSelectedRoles([]);
    setSelectedPrograms([]);
    setSelectedBranches([]);
  };

  /* ============================================================
     SORTING
  ============================================================ */

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((current) =>
        current === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  /* ============================================================
     FILTER + SEARCH + SORT
  ============================================================ */

  const filteredApplications = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    const filtered = applications.filter((application) => {
      const matchesSearch =
        query === "" ||
        application.id.toLowerCase().includes(query) ||
        application.fullName.toLowerCase().includes(query) ||
        application.registrationNumber
          .toLowerCase()
          .includes(query) ||
        application.email.toLowerCase().includes(query) ||
        application.preferredRole.toLowerCase().includes(query) ||
        application.program.toLowerCase().includes(query) ||
        application.branch.toLowerCase().includes(query) ||
        application.status.toLowerCase().includes(query);

      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(application.status);

      const matchesRole =
        selectedRoles.length === 0 ||
        selectedRoles.includes(application.preferredRole);

      const matchesProgram =
        selectedPrograms.length === 0 ||
        selectedPrograms.includes(application.program);

      const matchesBranch =
        selectedBranches.length === 0 ||
        selectedBranches.includes(application.branch);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesRole &&
        matchesProgram &&
        matchesBranch
      );
    });

    filtered.sort((a, b) => {
      const valueA = a[sortField].toLowerCase();
      const valueB = b[sortField].toLowerCase();

      const comparison = valueA.localeCompare(
        valueB,
        undefined,
        {
          numeric: true,
        }
      );

      return sortDirection === "asc"
        ? comparison
        : -comparison;
    });

    return filtered;
  }, [
    applications,
    debouncedSearch,
    selectedStatuses,
    selectedRoles,
    selectedPrograms,
    selectedBranches,
    sortField,
    sortDirection,
  ]);

  /* ============================================================
     ACTIVE FILTER COUNT
  ============================================================ */

  const activeFilterCount =
    selectedStatuses.length +
    selectedRoles.length +
    selectedPrograms.length +
    selectedBranches.length;

  /* ============================================================
     APPLICANT URL
  ============================================================ */

  const createApplicantLink = (id: string) => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("q", search.trim());
    }

    if (selectedStatuses.length > 0) {
      params.set("status", selectedStatuses.join(","));
    }

    if (selectedRoles.length > 0) {
      params.set("role", selectedRoles.join(","));
    }

    if (selectedPrograms.length > 0) {
      params.set("program", selectedPrograms.join(","));
    }

    if (selectedBranches.length > 0) {
      params.set("branch", selectedBranches.join(","));
    }

    params.set("sort", sortField);
    params.set("direction", sortDirection);

    const queryString = params.toString();

    return queryString
      ? `/applications/${encodeURIComponent(
          id
        )}?${queryString}`
      : `/applications/${encodeURIComponent(id)}`;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#020617] p-6 text-slate-900 dark:text-white md:p-8">

      {/* ========================================================
          BACKGROUND GLOW
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/50 dark:bg-blue-600/10 blur-3xl" />

        <div className="absolute right-[-100px] top-1/3 h-96 w-96 rounded-full bg-cyan-200/50 dark:bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-150px] left-1/3 h-96 w-96 rounded-full bg-indigo-200/50 dark:bg-indigo-600/10 blur-3xl" />
      </div>

      {/* ========================================================
          MAIN CONTENT
      ======================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />

              <span className="text-sm font-medium tracking-wider text-emerald-700 dark:text-emerald-300">
                RECRUITMENT PORTAL • LIVE
              </span>
            </div>

            <h1 className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-100 dark:to-blue-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              Recruitment Dashboard
            </h1>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Search, filter and manage recruitment applications
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
            <ThemeToggle />
            <div className="w-fit rounded-full border border-slate-200 dark:border-white/10 bg-white shadow-sm dark:bg-white/5 dark:shadow-none px-4 py-2 text-sm text-slate-700 dark:text-slate-300 backdrop-blur-xl">
              <span className="text-blue-600 dark:text-blue-400">●</span>{" "}
              System Active
            </div>
          </div>
        </div>

        {/* ======================================================
            STATISTICS
        ====================================================== */}

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Applications"
            value={applications.length}
            subtitle="All candidates"
            icon="👥"
          />

          <StatCard
            title="Shortlisted"
            value={
              applications.filter(
                (application) =>
                  application.status === "Shortlisted"
              ).length
            }
            subtitle="Candidates shortlisted"
            icon="✓"
          />

          <StatCard
            title="Selected"
            value={
              applications.filter(
                (application) =>
                  application.status === "Selected"
              ).length
            }
            subtitle="Successfully selected"
            icon="★"
          />

          <StatCard
            title="Pending"
            value={
              applications.filter(
                (application) =>
                  application.status === "Pending"
              ).length
            }
            subtitle="Awaiting review"
            icon="◷"
          />

        </div>

        {/* ======================================================
            SEARCH + FILTERS
        ====================================================== */}

        <div className="group relative mb-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white shadow-sm dark:bg-white/[0.045] dark:shadow-none p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl">

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="flex flex-col gap-4 lg:flex-row">

            {/* Search */}

            <div className="flex-1">
              <label className="mb-2 block text-sm text-slate-500 dark:text-slate-400">
                Search Applications
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search by name, application ID, registration number or email..."
                  className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-black/20 px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none backdrop-blur-xl transition-all duration-300 focus:border-blue-400 dark:focus:border-blue-400/50 focus:bg-slate-50 dark:focus:bg-black/30 focus:ring-4 focus:ring-blue-500/10"
                />

                {search !== debouncedSearch && (
                  <span className="absolute right-4 top-4 text-xs text-slate-500">
                    Searching...
                  </span>
                )}
              </div>
            </div>

            {/* Filters */}

            <div className="flex items-end">
              <button
                type="button"
                onClick={() =>
                  setShowFilters(!showFilters)
                }
                className="rounded-xl border border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-500/10 px-5 py-3.5 text-blue-700 dark:text-blue-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-400/40 hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)]"
              >
                Filters

                {activeFilterCount > 0 && (
                  <span className="ml-2 rounded-full bg-blue-600 px-2 py-1 text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Clear */}

            <div className="flex items-end">
              <button
                type="button"
                onClick={clearAllFilters}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-white shadow-sm dark:bg-white/5 dark:shadow-none px-5 py-3.5 text-slate-700 dark:text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-red-400/20 hover:bg-red-500/10 hover:text-red-300"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* ====================================================
              FILTER OPTIONS
          ==================================================== */}

          {showFilters && (
            <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 dark:border-white/10 pt-6 md:grid-cols-2 lg:grid-cols-4">

              <FilterGroup
                title="Status"
                options={statuses}
                selected={selectedStatuses}
                onToggle={(value) =>
                  toggleFilter(
                    value,
                    selectedStatuses,
                    setSelectedStatuses
                  )
                }
              />

              <FilterGroup
                title="Preferred Role"
                options={roles}
                selected={selectedRoles}
                onToggle={(value) =>
                  toggleFilter(
                    value,
                    selectedRoles,
                    setSelectedRoles
                  )
                }
              />

              <FilterGroup
                title="Program"
                options={programs}
                selected={selectedPrograms}
                onToggle={(value) =>
                  toggleFilter(
                    value,
                    selectedPrograms,
                    setSelectedPrograms
                  )
                }
              />

              <FilterGroup
                title="Branch"
                options={branches}
                selected={selectedBranches}
                onToggle={(value) =>
                  toggleFilter(
                    value,
                    selectedBranches,
                    setSelectedBranches
                  )
                }
              />

            </div>
          )}

          {/* ====================================================
              ACTIVE FILTER CHIPS
          ==================================================== */}

          {activeFilterCount > 0 && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/10 pt-5">

              {selectedStatuses.map((status) => (
                <FilterChip
                  key={status}
                  label={`Status: ${status}`}
                  onRemove={() =>
                    toggleFilter(
                      status,
                      selectedStatuses,
                      setSelectedStatuses
                    )
                  }
                />
              ))}

              {selectedRoles.map((role) => (
                <FilterChip
                  key={role}
                  label={`Role: ${role}`}
                  onRemove={() =>
                    toggleFilter(
                      role,
                      selectedRoles,
                      setSelectedRoles
                    )
                  }
                />
              ))}

              {selectedPrograms.map((program) => (
                <FilterChip
                  key={program}
                  label={`Program: ${program}`}
                  onRemove={() =>
                    toggleFilter(
                      program,
                      selectedPrograms,
                      setSelectedPrograms
                    )
                  }
                />
              ))}

              {selectedBranches.map((branch) => (
                <FilterChip
                  key={branch}
                  label={`Branch: ${branch}`}
                  onRemove={() =>
                    toggleFilter(
                      branch,
                      selectedBranches,
                      setSelectedBranches
                    )
                  }
                />
              ))}

            </div>
          )}
        </div>

        {/* ======================================================
            ERROR
        ====================================================== */}

        {error && (
          <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 text-sm text-red-300 backdrop-blur-xl">

            <div>
              <p className="font-semibold">
                Failed to load applications
              </p>

              <p className="mt-1 text-red-300/70">
                {error}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setReloadKey((value) => value + 1)
              }
              className="shrink-0 rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-2 font-medium text-red-200 transition hover:bg-red-500/20"
            >
              Retry
            </button>

          </div>
        )}

        {/* ======================================================
            RESULTS
        ====================================================== */}

        <div className="mb-4 flex items-center justify-between">

          <p
            className="text-sm text-slate-500 dark:text-slate-400"
            aria-live="polite"
          >
            Showing{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {filteredApplications.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {applications.length}
            </span>{" "}
            applications
          </p>

          {debouncedSearch && (
            <span className="hidden text-xs text-slate-500 sm:block">
              Search: &quot;{debouncedSearch}&quot;
            </span>
          )}

        </div>

        {/* ======================================================
            TABLE
        ====================================================== */}

        <div className="relative overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 bg-white/[0.035] shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl">

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <table className="w-full min-w-[1150px] text-left">

            <thead className="border-b border-slate-200 dark:border-white/10 bg-white/[0.035]">

              <tr>

                <SortableHeader
                  label="Application ID"
                  field="id"
                  currentField={sortField}
                  direction={sortDirection}
                  onSort={handleSort}
                />

                <SortableHeader
                  label="Candidate"
                  field="fullName"
                  currentField={sortField}
                  direction={sortDirection}
                  onSort={handleSort}
                />

                <th className="px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Registration No.
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email
                </th>

                <SortableHeader
                  label="Preferred Role"
                  field="preferredRole"
                  currentField={sortField}
                  direction={sortDirection}
                  onSort={handleSort}
                />

                <SortableHeader
                  label="Program"
                  field="program"
                  currentField={sortField}
                  direction={sortDirection}
                  onSort={handleSort}
                />

                <SortableHeader
                  label="Branch"
                  field="branch"
                  currentField={sortField}
                  direction={sortDirection}
                  onSort={handleSort}
                />

                <SortableHeader
                  label="Status"
                  field="status"
                  currentField={sortField}
                  direction={sortDirection}
                  onSort={handleSort}
                />

              </tr>

            </thead>

            <tbody className="divide-y divide-white/[0.06]">

              {/* Loading */}

              {loading ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-16 text-center"
                  >
                    <div className="flex flex-col items-center">

                      <div className="mb-4 h-10 w-10 animate-spin rounded-full border-2 border-slate-200 dark:border-white/10 border-t-blue-400" />

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Loading applications...
                      </p>

                    </div>
                  </td>
                </tr>

              ) : filteredApplications.length === 0 ? (

                /* No Results */

                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-16 text-center"
                  >

                    <div className="mx-auto flex max-w-sm flex-col items-center">

                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-white shadow-sm dark:bg-white/5 dark:shadow-none text-2xl">
                        🔍
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        No applications found
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Try changing your search or filters.
                      </p>

                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="mt-5 rounded-lg border border-slate-200 dark:border-white/10 bg-white shadow-sm dark:bg-white/5 dark:shadow-none px-4 py-2 text-sm text-slate-700 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-white/10"
                      >
                        Clear search & filters
                      </button>

                    </div>

                  </td>
                </tr>

              ) : (

                /* Applications */

                filteredApplications.map((application) => (

                  <tr
                    key={application.id}
                    className="group transition-all duration-200 hover:bg-slate-50 dark:hover:bg-white/[0.045]"
                  >

                    {/* Application ID */}

                    <td className="px-4 py-4 font-medium">

                      <Link
                        href={createApplicantLink(
                          application.id
                        )}
                        className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 transition-all duration-200 group-hover:text-blue-700 dark:text-blue-300 hover:translate-x-0.5 hover:underline"
                      >
                        {application.id}

                        <span className="text-xs opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>
                      </Link>

                    </td>

                    {/* Candidate */}

                    <td className="px-4 py-4 font-medium">

                      <Link
                        href={createApplicantLink(
                          application.id
                        )}
                        className="text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-blue-700 dark:text-blue-300 hover:underline"
                      >
                        {application.fullName}
                      </Link>

                    </td>

                    {/* Registration Number */}

                    <td className="px-4 py-4">

                      <Link
                        href={createApplicantLink(
                          application.id
                        )}
                        className="font-medium text-blue-600 dark:text-blue-400 transition-all duration-200 hover:text-blue-700 dark:text-blue-300 hover:underline"
                      >
                        {application.registrationNumber}
                      </Link>

                    </td>

                    {/* Email */}

                    <td className="px-4 py-4 text-slate-500 dark:text-slate-400">
                      {application.email}
                    </td>

                    {/* Role */}

                    <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                      {application.preferredRole}
                    </td>

                    {/* Program */}

                    <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                      {application.program}
                    </td>

                    {/* Branch */}

                    <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                      {application.branch}
                    </td>

                    {/* Status */}

                    <td className="px-4 py-4">
                      <StatusBadge
                        status={application.status}
                      />
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        {/* ======================================================
            FOOTER
        ====================================================== */}

        <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            Click an Application ID, candidate name, or
            registration number to view details.
          </p>

          <p>
            Sorted by{" "}
            <span className="text-slate-500 dark:text-slate-400">
              {sortField}
            </span>{" "}
            ·{" "}
            <span className="text-slate-500 dark:text-slate-400">
              {sortDirection === "asc"
                ? "Ascending"
                : "Descending"}
            </span>
          </p>

        </div>

      </div>

    </main>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function StatCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: number;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white shadow-sm dark:bg-white/[0.045] dark:shadow-none p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-400/30 hover:bg-slate-50 dark:hover:bg-white/[0.07] hover:shadow-md dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]">

      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/10" />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {subtitle}
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-white shadow-sm dark:bg-white/5 dark:shadow-none text-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    </div>
  );
}

/* ============================================================
   FILTER GROUP
============================================================ */

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div>

      <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
        {title}
      </h3>

      <div className="space-y-2">

        {options.map((option) => (

          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-slate-500 dark:text-slate-400 transition hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
          >

            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="h-4 w-4 cursor-pointer rounded border-slate-600 bg-slate-800 accent-blue-500"
            />

            <span>
              {option}
            </span>

          </label>

        ))}

      </div>

    </div>
  );
}

/* ============================================================
   FILTER CHIP
============================================================ */

function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="rounded-full border border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 text-xs text-blue-700 dark:text-blue-300 backdrop-blur-md transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-400/40 hover:bg-blue-100 dark:hover:bg-blue-500/20"
    >
      {label} ×
    </button>
  );
}

/* ============================================================
   SORTABLE HEADER
============================================================ */

function SortableHeader({
  label,
  field,
  currentField,
  direction,
  onSort,
}: {
  label: string;
  field: SortField;
  currentField: SortField;
  direction: "asc" | "desc";
  onSort: (field: SortField) => void;
}) {
  const isActive = currentField === field;

  return (
    <th className="px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">

      <button
        type="button"
        onClick={() => onSort(field)}
        className="flex items-center gap-2 rounded-md transition-colors hover:text-slate-900 dark:text-white"
      >

        {label}

        <span
          className={`text-xs transition-colors ${
            isActive
              ? "text-blue-600 dark:text-blue-400"
              : "text-slate-600"
          }`}
        >
          {isActive
            ? direction === "asc"
              ? "▲"
              : "▼"
            : "↕"}
        </span>

      </button>

    </th>
  );
}

/* ============================================================
   STATUS BADGE
============================================================ */

function StatusBadge({
  status,
}: {
  status: string;
}) {
  let className = "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-300 dark:border-slate-500/20";
  let dotClass = "bg-slate-500 dark:bg-slate-400";

  if (status === "Pending") {
    className = "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20";
    dotClass = "bg-amber-500 dark:bg-amber-400";
  } else if (status === "Shortlisted") {
    className = "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20";
    dotClass = "bg-blue-500 dark:bg-blue-400";
  } else if (status === "Interview Scheduled") {
    className = "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20";
    dotClass = "bg-indigo-500 dark:bg-indigo-400";
  } else if (status === "Selected") {
    className = "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20";
    dotClass = "bg-emerald-500 dark:bg-emerald-400";
  } else if (status === "Rejected") {
    className = "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/20";
    dotClass = "bg-rose-500 dark:bg-rose-400";
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dotClass}`}
      />

      {status}
    </span>
  );
}