"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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

const applications: Application[] = [
  {
    id: "APP001",
    fullName: "Rahul Sharma",
    registrationNumber: "12345678",
    email: "rahul.sharma@example.com",
    preferredRole: "Software Engineer",
    program: "B.Tech",
    branch: "CSE",
    status: "Shortlisted",
  },
  {
    id: "APP002",
    fullName: "Priya Verma",
    registrationNumber: "12345679",
    email: "priya.verma@example.com",
    preferredRole: "Data Analyst",
    program: "B.Tech",
    branch: "IT",
    status: "Selected",
  },
  {
    id: "APP003",
    fullName: "Aman Kumar",
    registrationNumber: "12345680",
    email: "aman.kumar@example.com",
    preferredRole: "Web Developer",
    program: "BCA",
    branch: "CSE",
    status: "Pending",
  },
  {
    id: "APP004",
    fullName: "Sneha Gupta",
    registrationNumber: "12345681",
    email: "sneha.gupta@example.com",
    preferredRole: "UI/UX Designer",
    program: "B.Des",
    branch: "Design",
    status: "Rejected",
  },
  {
    id: "APP005",
    fullName: "Arjun Singh",
    registrationNumber: "12345682",
    email: "arjun.singh@example.com",
    preferredRole: "Cloud Engineer",
    program: "B.Tech",
    branch: "CSE",
    status: "Shortlisted",
  },
  {
    id: "APP006",
    fullName: "Ananya Mehta",
    registrationNumber: "12345683",
    email: "ananya.mehta@example.com",
    preferredRole: "DevOps Engineer",
    program: "B.Tech",
    branch: "IT",
    status: "Selected",
  },
  {
    id: "APP007",
    fullName: "Rohan Patel",
    registrationNumber: "12345684",
    email: "rohan.patel@example.com",
    preferredRole: "Software Engineer",
    program: "B.Tech",
    branch: "ECE",
    status: "Pending",
  },
  {
    id: "APP008",
    fullName: "Neha Joshi",
    registrationNumber: "12345685",
    email: "neha.joshi@example.com",
    preferredRole: "Data Analyst",
    program: "BCA",
    branch: "IT",
    status: "Shortlisted",
  },
  {
    id: "APP009",
    fullName: "Vivek Agarwal",
    registrationNumber: "12345686",
    email: "vivek.agarwal@example.com",
    preferredRole: "Web Developer",
    program: "B.Tech",
    branch: "CSE",
    status: "Rejected",
  },
  {
    id: "APP010",
    fullName: "Kavya Sharma",
    registrationNumber: "12345687",
    email: "kavya.sharma@example.com",
    preferredRole: "UI/UX Designer",
    program: "B.Des",
    branch: "Design",
    status: "Selected",
  },
  {
    id: "APP011",
    fullName: "Aditya Verma",
    registrationNumber: "12345688",
    email: "aditya.verma@example.com",
    preferredRole: "Cloud Engineer",
    program: "B.Tech",
    branch: "CSE",
    status: "Pending",
  },
  {
    id: "APP012",
    fullName: "Simran Kaur",
    registrationNumber: "12345689",
    email: "simran.kaur@example.com",
    preferredRole: "DevOps Engineer",
    program: "B.Tech",
    branch: "IT",
    status: "Shortlisted",
  },
  {
    id: "APP013",
    fullName: "Karan Malhotra",
    registrationNumber: "12345690",
    email: "karan.malhotra@example.com",
    preferredRole: "Software Engineer",
    program: "BCA",
    branch: "CSE",
    status: "Selected",
  },
  {
    id: "APP014",
    fullName: "Isha Kapoor",
    registrationNumber: "12345691",
    email: "isha.kapoor@example.com",
    preferredRole: "Data Analyst",
    program: "B.Tech",
    branch: "IT",
    status: "Pending",
  },
  {
    id: "APP015",
    fullName: "Yash Thakur",
    registrationNumber: "12345692",
    email: "yash.thakur@example.com",
    preferredRole: "Web Developer",
    program: "B.Tech",
    branch: "ECE",
    status: "Shortlisted",
  },
  {
    id: "APP016",
    fullName: "Muskan Jain",
    registrationNumber: "12345693",
    email: "muskan.jain@example.com",
    preferredRole: "UI/UX Designer",
    program: "B.Des",
    branch: "Design",
    status: "Rejected",
  },
  {
    id: "APP017",
    fullName: "Harsh Gupta",
    registrationNumber: "12345694",
    email: "harsh.gupta@example.com",
    preferredRole: "Cloud Engineer",
    program: "B.Tech",
    branch: "CSE",
    status: "Selected",
  },
  {
    id: "APP018",
    fullName: "Pooja Sharma",
    registrationNumber: "12345695",
    email: "pooja.sharma@example.com",
    preferredRole: "DevOps Engineer",
    program: "B.Tech",
    branch: "IT",
    status: "Pending",
  },
  {
    id: "APP019",
    fullName: "Nikhil Kumar",
    registrationNumber: "12345696",
    email: "nikhil.kumar@example.com",
    preferredRole: "Software Engineer",
    program: "BCA",
    branch: "CSE",
    status: "Shortlisted",
  },
  {
    id: "APP020",
    fullName: "Riya Singh",
    registrationNumber: "12345697",
    email: "riya.singh@example.com",
    preferredRole: "Data Analyst",
    program: "B.Tech",
    branch: "IT",
    status: "Selected",
  },
  {
    id: "APP021",
    fullName: "Mohit Bansal",
    registrationNumber: "12345698",
    email: "mohit.bansal@example.com",
    preferredRole: "Web Developer",
    program: "B.Tech",
    branch: "CSE",
    status: "Pending",
  },
  {
    id: "APP022",
    fullName: "Aditi Sharma",
    registrationNumber: "12345699",
    email: "aditi.sharma@example.com",
    preferredRole: "UI/UX Designer",
    program: "B.Des",
    branch: "Design",
    status: "Shortlisted",
  },
  {
    id: "APP023",
    fullName: "Saurabh Mishra",
    registrationNumber: "12345700",
    email: "saurabh.mishra@example.com",
    preferredRole: "Cloud Engineer",
    program: "B.Tech",
    branch: "ECE",
    status: "Rejected",
  },
  {
    id: "APP024",
    fullName: "Tanya Arora",
    registrationNumber: "12345701",
    email: "tanya.arora@example.com",
    preferredRole: "DevOps Engineer",
    program: "B.Tech",
    branch: "IT",
    status: "Selected",
  },
  {
    id: "APP025",
    fullName: "Deepak Rawat",
    registrationNumber: "12345702",
    email: "deepak.rawat@example.com",
    preferredRole: "Software Engineer",
    program: "B.Tech",
    branch: "CSE",
    status: "Pending",
  },
  {
    id: "APP026",
    fullName: "Shreya Gupta",
    registrationNumber: "12345703",
    email: "shreya.gupta@example.com",
    preferredRole: "Data Analyst",
    program: "BCA",
    branch: "IT",
    status: "Shortlisted",
  },
  {
    id: "APP027",
    fullName: "Manish Yadav",
    registrationNumber: "12345704",
    email: "manish.yadav@example.com",
    preferredRole: "Web Developer",
    program: "B.Tech",
    branch: "CSE",
    status: "Selected",
  },
  {
    id: "APP028",
    fullName: "Nandini Rao",
    registrationNumber: "12345705",
    email: "nandini.rao@example.com",
    preferredRole: "UI/UX Designer",
    program: "B.Des",
    branch: "Design",
    status: "Pending",
  },
  {
    id: "APP029",
    fullName: "Akash Tiwari",
    registrationNumber: "12345706",
    email: "akash.tiwari@example.com",
    preferredRole: "Cloud Engineer",
    program: "B.Tech",
    branch: "CSE",
    status: "Shortlisted",
  },
  {
    id: "APP030",
    fullName: "Megha Saini",
    registrationNumber: "12345707",
    email: "megha.saini@example.com",
    preferredRole: "DevOps Engineer",
    program: "B.Tech",
    branch: "IT",
    status: "Rejected",
  },
  {
    id: "APP031",
    fullName: "Varun Kapoor",
    registrationNumber: "12345708",
    email: "varun.kapoor@example.com",
    preferredRole: "Software Engineer",
    program: "BCA",
    branch: "CSE",
    status: "Selected",
  },
  {
    id: "APP032",
    fullName: "Shivani Gupta",
    registrationNumber: "12345709",
    email: "shivani.gupta@example.com",
    preferredRole: "Data Analyst",
    program: "B.Tech",
    branch: "IT",
    status: "Pending",
  },
  {
    id: "APP033",
    fullName: "Raj Mehta",
    registrationNumber: "12345710",
    email: "raj.mehta@example.com",
    preferredRole: "Web Developer",
    program: "B.Tech",
    branch: "ECE",
    status: "Shortlisted",
  },
  {
    id: "APP034",
    fullName: "Sakshi Verma",
    registrationNumber: "12345711",
    email: "sakshi.verma@example.com",
    preferredRole: "UI/UX Designer",
    program: "B.Des",
    branch: "Design",
    status: "Selected",
  },
  {
    id: "APP035",
    fullName: "Abhishek Singh",
    registrationNumber: "12345712",
    email: "abhishek.singh@example.com",
    preferredRole: "Cloud Engineer",
    program: "B.Tech",
    branch: "CSE",
    status: "Pending",
  },
  {
    id: "APP036",
    fullName: "Komal Sharma",
    registrationNumber: "12345713",
    email: "komal.sharma@example.com",
    preferredRole: "DevOps Engineer",
    program: "B.Tech",
    branch: "IT",
    status: "Shortlisted",
  },
  {
    id: "APP037",
    fullName: "Rishabh Jain",
    registrationNumber: "12345714",
    email: "rishabh.jain@example.com",
    preferredRole: "Software Engineer",
    program: "BCA",
    branch: "CSE",
    status: "Rejected",
  },
  {
    id: "APP038",
    fullName: "Pallavi Joshi",
    registrationNumber: "12345715",
    email: "pallavi.joshi@example.com",
    preferredRole: "Data Analyst",
    program: "B.Tech",
    branch: "IT",
    status: "Selected",
  },
  {
    id: "APP039",
    fullName: "Abhinav Kumar",
    registrationNumber: "12345716",
    email: "abhinav.kumar@example.com",
    preferredRole: "Web Developer",
    program: "B.Tech",
    branch: "CSE",
    status: "Pending",
  },
  {
    id: "APP040",
    fullName: "Divya Agarwal",
    registrationNumber: "12345717",
    email: "divya.agarwal@example.com",
    preferredRole: "UI/UX Designer",
    program: "B.Des",
    branch: "Design",
    status: "Shortlisted",
  },
];

const statuses = [
  "Pending",
  "Shortlisted",
  "Interview Scheduled",
  "Selected",
  "Rejected",
];

const roles = [
  "Cloud Engineer",
  "Web Developer",
  "Data Analyst",
  "Software Engineer",
  "UI/UX Designer",
  "DevOps Engineer",
];

const programs = ["B.Tech", "BCA", "B.Des"];

const branches = ["CSE", "IT", "ECE", "Design"];

type SortField =
  | "id"
  | "fullName"
  | "preferredRole"
  | "program"
  | "branch"
  | "status";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);

  const [sortField, setSortField] = useState<SortField>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [showFilters, setShowFilters] = useState(false);

  /* Debounced Search */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  /* Toggle Filter */
  const toggleFilter = (
    value: string,
    selected: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  /* Clear All */
  const clearAllFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setSelectedStatuses([]);
    setSelectedRoles([]);
    setSelectedPrograms([]);
    setSelectedBranches([]);
  };

  /* Sorting */
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

  /* Filter + Search + Sort */
  const filteredApplications = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    const filtered = applications.filter((application) => {
      const matchesSearch =
        query === "" ||
        application.id.toLowerCase().includes(query) ||
        application.fullName.toLowerCase().includes(query) ||
        application.registrationNumber.toLowerCase().includes(query) ||
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

      const comparison = valueA.localeCompare(valueB, undefined, {
        numeric: true,
      });

      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [
    debouncedSearch,
    selectedStatuses,
    selectedRoles,
    selectedPrograms,
    selectedBranches,
    sortField,
    sortDirection,
  ]);

  /* Active filter count */
  const activeFilterCount =
    selectedStatuses.length +
    selectedRoles.length +
    selectedPrograms.length +
    selectedBranches.length;

  /* Applicant URL */
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

    return `/applications/${id}?${params.toString()}`;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white p-6 md:p-8">

      {/* ================================
          BACKGROUND GLOW
      ================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-[-100px] top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-150px] left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      </div>

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================================
            HEADER
        ================================= */}

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-3">

              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />

              <span className="text-sm font-medium tracking-wider text-emerald-300">
                RECRUITMENT PORTAL • LIVE
              </span>

            </div>

            <h1 className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              Recruitment Dashboard
            </h1>

            <p className="mt-3 text-slate-400">
              Search, filter and manage recruitment applications
            </p>

          </div>

          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">

            <span className="text-blue-400">●</span>{" "}
            System Active

          </div>

        </div>

        {/* ================================
            STATISTICS
        ================================= */}

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

        {/* ================================
            SEARCH + FILTERS
        ================================= */}

        <div className="group relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl">

          {/* Glossy top edge */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="flex flex-col gap-4 lg:flex-row">

            {/* Search */}
            <div className="flex-1">

              <label className="mb-2 block text-sm text-slate-400">
                Search Applications
              </label>

              <div className="relative">

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, application ID, registration number or email..."
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder-slate-500 outline-none backdrop-blur-xl transition-all duration-300 focus:border-blue-400/50 focus:bg-black/30 focus:ring-4 focus:ring-blue-500/10"
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
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-3.5 text-blue-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/20 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)]"
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
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-red-400/20 hover:bg-red-500/10 hover:text-red-300"
              >
                Clear All
              </button>

            </div>

          </div>

          {/* ================================
              FILTER OPTIONS
          ================================= */}

          {showFilters && (
            <div className="mt-6 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 md:grid-cols-2 lg:grid-cols-4">

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

          {/* ================================
              ACTIVE FILTER CHIPS
          ================================= */}

          {activeFilterCount > 0 && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">

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

        {/* ================================
            RESULTS
        ================================= */}

        <div className="mb-4 flex items-center justify-between">

          <p
            className="text-sm text-slate-400"
            aria-live="polite"
          >
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredApplications.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-white">
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

        {/* ================================
            TABLE
        ================================= */}

        <div className="relative overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl">

          {/* Glossy table top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <table className="w-full min-w-[1150px] text-left">

            <thead className="border-b border-white/10 bg-white/[0.035]">

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

                <th className="px-4 py-4 text-sm font-semibold text-slate-300">
                  Registration No.
                </th>

                <th className="px-4 py-4 text-sm font-semibold text-slate-300">
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

              {filteredApplications.length === 0 ? (

                <tr>

                  <td
                    colSpan={8}
                    className="px-6 py-16 text-center"
                  >

                    <div className="mx-auto flex max-w-sm flex-col items-center">

                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
                        🔍
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        No applications found
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Try changing your search or filters.
                      </p>

                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="mt-5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
                      >
                        Clear search & filters
                      </button>

                    </div>

                  </td>

                </tr>

              ) : (

                filteredApplications.map((application) => (

                  <tr
                    key={application.id}
                    className="group transition-all duration-200 hover:bg-white/[0.045]"
                  >

                    {/* Application ID */}
                    <td className="px-4 py-4 font-medium">

                      <Link
                        href={createApplicantLink(application.id)}
                        className="inline-flex items-center gap-1 font-medium text-blue-400 transition-all duration-200 group-hover:text-blue-300 hover:translate-x-0.5 hover:underline"
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
                        href={createApplicantLink(application.id)}
                        className="text-white transition-colors duration-200 group-hover:text-blue-300 hover:underline"
                      >
                        {application.fullName}
                      </Link>

                    </td>

                    {/* Registration Number */}
                    <td className="px-4 py-4">

                      <Link
                        href={createApplicantLink(application.id)}
                        className="font-medium text-blue-400 transition-all duration-200 hover:text-blue-300 hover:underline"
                      >
                        {application.registrationNumber}
                      </Link>

                    </td>

                    {/* Email */}
                    <td className="px-4 py-4 text-slate-400">
                      {application.email}
                    </td>

                    {/* Role */}
                    <td className="px-4 py-4 text-slate-300">
                      {application.preferredRole}
                    </td>

                    {/* Program */}
                    <td className="px-4 py-4 text-slate-300">
                      {application.program}
                    </td>

                    {/* Branch */}
                    <td className="px-4 py-4 text-slate-300">
                      {application.branch}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <StatusBadge status={application.status} />
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        {/* Footer note */}
        <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            Click an Application ID, candidate name, or registration number to view details.
          </p>

          <p>
            Sorted by{" "}
            <span className="text-slate-400">
              {sortField}
            </span>{" "}
            ·{" "}
            <span className="text-slate-400">
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07] hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]">

      {/* Glossy light */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/10" />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-white">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {subtitle}
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

      </div>

      {/* Bottom shine */}
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

      <h3 className="mb-3 text-sm font-semibold text-slate-300">
        {title}
      </h3>

      <div className="space-y-2">

        {options.map((option) => (

          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
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
      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300 backdrop-blur-md transition-all duration-200 hover:border-blue-400/40 hover:bg-blue-500/20"
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
    <th className="px-4 py-4 text-sm font-semibold text-slate-300">

      <button
        type="button"
        onClick={() => onSort(field)}
        className="flex items-center gap-2 rounded-md transition-colors hover:text-white"
      >

        {label}

        <span
          className={`text-xs transition-colors ${
            isActive
              ? "text-blue-400"
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
  let className =
    "border-slate-400/20 bg-slate-400/10 text-slate-300";

  let dotClass = "bg-slate-400";

  if (status === "Pending") {
    className =
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";

    dotClass = "bg-yellow-400";
  }

  if (status === "Shortlisted") {
    className =
      "border-blue-400/20 bg-blue-400/10 text-blue-300";

    dotClass = "bg-blue-400";
  }

  if (status === "Interview Scheduled") {
    className =
      "border-purple-400/20 bg-purple-400/10 text-purple-300";

    dotClass = "bg-purple-400";
  }

  if (status === "Selected") {
    className =
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";

    dotClass = "bg-emerald-400";
  }

  if (status === "Rejected") {
    className =
      "border-red-400/20 bg-red-400/10 text-red-300";

    dotClass = "bg-red-400";
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