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

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

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

  const clearAllFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setSelectedStatuses([]);
    setSelectedRoles([]);
    setSelectedPrograms([]);
    setSelectedBranches([]);
  };

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

  const activeFilterCount =
    selectedStatuses.length +
    selectedRoles.length +
    selectedPrograms.length +
    selectedBranches.length;

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
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Recruitment Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Search, filter and manage recruitment applications
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mb-6">

          <div className="flex flex-col lg:flex-row gap-4">

            {/* Search */}
            <div className="flex-1">
              <label className="block text-sm text-slate-400 mb-2">
                Search Applications
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, application ID, registration number or email..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500"
                />

                {search !== debouncedSearch && (
                  <span className="absolute right-3 top-3 text-xs text-slate-500">
                    Searching...
                  </span>
                )}
              </div>
            </div>

            {/* Filter Button */}
            <div className="flex items-end">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 hover:bg-slate-700"
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
                onClick={clearAllFilters}
                className="rounded-lg border border-slate-700 px-5 py-3 text-slate-300 hover:bg-slate-800"
              >
                Clear All
              </button>
            </div>

          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-800 pt-6">

              {/* Status */}
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

              {/* Role */}
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

              {/* Program */}
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

              {/* Branch */}
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

          {/* Active Filter Indicators */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-slate-800">

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

        {/* Results Count */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-slate-400">
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
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">

          <table className="w-full min-w-[1100px] text-left">

            <thead className="border-b border-slate-800 bg-slate-950">

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

            <tbody className="divide-y divide-slate-800">

              {filteredApplications.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-12 text-center text-slate-400"
                  >
                    No applications found.
                  </td>
                </tr>
              ) : (
                filteredApplications.map((application) => (
                  <tr
                    key={application.id}
                    className="hover:bg-slate-800/50"
                  >

                    {/* APPLICATION ID */}
                    <td className="px-4 py-4 font-medium">
                      <Link
                        href={createApplicantLink(application.id)}
                        className="text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        {application.id}
                      </Link>
                    </td>

                    {/* NAME */}
                    <td className="px-4 py-4 font-medium">
                      <Link
                        href={createApplicantLink(application.id)}
                        className="text-white hover:text-blue-400 hover:underline"
                      >
                        {application.fullName}
                      </Link>
                    </td>

                    {/* REGISTRATION NUMBER */}
                    <td className="px-4 py-4">
                      <Link
                        href={createApplicantLink(application.id)}
                        className="text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        {application.registrationNumber}
                      </Link>
                    </td>

                    {/* EMAIL */}
                    <td className="px-4 py-4 text-slate-400">
                      {application.email}
                    </td>

                    {/* ROLE */}
                    <td className="px-4 py-4 text-slate-300">
                      {application.preferredRole}
                    </td>

                    {/* PROGRAM */}
                    <td className="px-4 py-4 text-slate-300">
                      {application.program}
                    </td>

                    {/* BRANCH */}
                    <td className="px-4 py-4 text-slate-300">
                      {application.branch}
                    </td>

                    {/* STATUS */}
                    <td className="px-4 py-4">
                      <StatusBadge status={application.status} />
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

        {/* Bottom Note */}
        <p className="mt-4 text-xs text-slate-500">
          Click an Application ID, candidate name, or registration number
          to view the applicant&apos;s complete details.
        </p>

      </div>
    </main>
  );
}

/* ================================
   FILTER GROUP
================================ */

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
      <h3 className="text-sm font-semibold text-slate-300 mb-3">
        {title}
      </h3>

      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer text-sm text-slate-400 hover:text-white"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="h-4 w-4 rounded border-slate-600 bg-slate-800"
            />

            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

/* ================================
   FILTER CHIP
================================ */

function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <button
      onClick={onRemove}
      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 hover:bg-blue-500/20"
    >
      {label} ×
    </button>
  );
}

/* ================================
   SORTABLE HEADER
================================ */

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
        onClick={() => onSort(field)}
        className="flex items-center gap-2 hover:text-white"
      >
        {label}

        <span className="text-xs text-slate-500">
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

/* ================================
   STATUS BADGE
================================ */

function StatusBadge({ status }: { status: string }) {
  let className =
    "bg-slate-500/10 text-slate-300";

  if (status === "Pending") {
    className = "bg-yellow-500/10 text-yellow-300";
  }

  if (status === "Shortlisted") {
    className = "bg-blue-500/10 text-blue-300";
  }

  if (status === "Interview Scheduled") {
    className = "bg-purple-500/10 text-purple-300";
  }

  if (status === "Selected") {
    className = "bg-green-500/10 text-green-300";
  }

  if (status === "Rejected") {
    className = "bg-red-500/10 text-red-300";
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {status}
    </span>
  );
}