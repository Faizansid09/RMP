"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const applicants = [
  {
    id: "APP001",
    fullName: "Rahul Sharma",
    registrationNumber: "12345678",
    email: "rahul.sharma@example.com",
    personalEmail: "rahul.personal@example.com",
    phone: "9876543210",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.7",
    preferredRole: "Software Engineer",
    status: "Shortlisted",
  },
  {
    id: "APP002",
    fullName: "Priya Verma",
    registrationNumber: "12345679",
    email: "priya.verma@example.com",
    personalEmail: "priya.personal@example.com",
    phone: "9876543211",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "9.1",
    preferredRole: "Data Analyst",
    status: "Selected",
  },
  {
    id: "APP003",
    fullName: "Aman Kumar",
    registrationNumber: "12345680",
    email: "aman.kumar@example.com",
    personalEmail: "aman.personal@example.com",
    phone: "9876543212",
    program: "BCA",
    branch: "CSE",
    semester: "4th",
    cgpa: "8.2",
    preferredRole: "Web Developer",
    status: "Pending",
  },
  {
    id: "APP004",
    fullName: "Sneha Gupta",
    registrationNumber: "12345681",
    email: "sneha.gupta@example.com",
    personalEmail: "sneha.personal@example.com",
    phone: "9876543213",
    program: "B.Des",
    branch: "Design",
    semester: "6th",
    cgpa: "8.5",
    preferredRole: "UI/UX Designer",
    status: "Rejected",
  },
  {
    id: "APP005",
    fullName: "Arjun Singh",
    registrationNumber: "12345682",
    email: "arjun.singh@example.com",
    personalEmail: "arjun.personal@example.com",
    phone: "9876543214",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.8",
    preferredRole: "Cloud Engineer",
    status: "Shortlisted",
  },
  {
    id: "APP006",
    fullName: "Ananya Mehta",
    registrationNumber: "12345683",
    email: "ananya.mehta@example.com",
    personalEmail: "ananya.personal@example.com",
    phone: "9876543215",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "9.0",
    preferredRole: "DevOps Engineer",
    status: "Selected",
  },
  {
    id: "APP007",
    fullName: "Rohan Patel",
    registrationNumber: "12345684",
    email: "rohan.patel@example.com",
    personalEmail: "rohan.personal@example.com",
    phone: "9876543216",
    program: "B.Tech",
    branch: "ECE",
    semester: "6th",
    cgpa: "8.3",
    preferredRole: "Software Engineer",
    status: "Pending",
  },
  {
    id: "APP008",
    fullName: "Neha Joshi",
    registrationNumber: "12345685",
    email: "neha.joshi@example.com",
    personalEmail: "neha.personal@example.com",
    phone: "9876543217",
    program: "BCA",
    branch: "IT",
    semester: "4th",
    cgpa: "8.6",
    preferredRole: "Data Analyst",
    status: "Shortlisted",
  },
  {
    id: "APP009",
    fullName: "Vivek Agarwal",
    registrationNumber: "12345686",
    email: "vivek.agarwal@example.com",
    personalEmail: "vivek.personal@example.com",
    phone: "9876543218",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "7.9",
    preferredRole: "Web Developer",
    status: "Rejected",
  },
  {
    id: "APP010",
    fullName: "Kavya Sharma",
    registrationNumber: "12345687",
    email: "kavya.sharma@example.com",
    personalEmail: "kavya.personal@example.com",
    phone: "9876543219",
    program: "B.Des",
    branch: "Design",
    semester: "6th",
    cgpa: "8.9",
    preferredRole: "UI/UX Designer",
    status: "Selected",
  },
  {
    id: "APP011",
    fullName: "Aditya Verma",
    registrationNumber: "12345688",
    email: "aditya.verma@example.com",
    personalEmail: "aditya.personal@example.com",
    phone: "9876543220",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.4",
    preferredRole: "Cloud Engineer",
    status: "Pending",
  },
  {
    id: "APP012",
    fullName: "Simran Kaur",
    registrationNumber: "12345689",
    email: "simran.kaur@example.com",
    personalEmail: "simran.personal@example.com",
    phone: "9876543221",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "8.8",
    preferredRole: "DevOps Engineer",
    status: "Shortlisted",
  },
  {
    id: "APP013",
    fullName: "Karan Malhotra",
    registrationNumber: "12345690",
    email: "karan.malhotra@example.com",
    personalEmail: "karan.personal@example.com",
    phone: "9876543222",
    program: "BCA",
    branch: "CSE",
    semester: "4th",
    cgpa: "8.1",
    preferredRole: "Software Engineer",
    status: "Selected",
  },
  {
    id: "APP014",
    fullName: "Isha Kapoor",
    registrationNumber: "12345691",
    email: "isha.kapoor@example.com",
    personalEmail: "isha.personal@example.com",
    phone: "9876543223",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "9.2",
    preferredRole: "Data Analyst",
    status: "Pending",
  },
  {
    id: "APP015",
    fullName: "Yash Thakur",
    registrationNumber: "12345692",
    email: "yash.thakur@example.com",
    personalEmail: "yash.personal@example.com",
    phone: "9876543224",
    program: "B.Tech",
    branch: "ECE",
    semester: "6th",
    cgpa: "8.0",
    preferredRole: "Web Developer",
    status: "Shortlisted",
  },
  {
    id: "APP016",
    fullName: "Muskan Jain",
    registrationNumber: "12345693",
    email: "muskan.jain@example.com",
    personalEmail: "muskan.personal@example.com",
    phone: "9876543225",
    program: "B.Des",
    branch: "Design",
    semester: "6th",
    cgpa: "8.7",
    preferredRole: "UI/UX Designer",
    status: "Rejected",
  },
  {
    id: "APP017",
    fullName: "Harsh Gupta",
    registrationNumber: "12345694",
    email: "harsh.gupta@example.com",
    personalEmail: "harsh.personal@example.com",
    phone: "9876543226",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "9.0",
    preferredRole: "Cloud Engineer",
    status: "Selected",
  },
  {
    id: "APP018",
    fullName: "Pooja Sharma",
    registrationNumber: "12345695",
    email: "pooja.sharma@example.com",
    personalEmail: "pooja.personal@example.com",
    phone: "9876543227",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "8.5",
    preferredRole: "DevOps Engineer",
    status: "Pending",
  },
  {
    id: "APP019",
    fullName: "Nikhil Kumar",
    registrationNumber: "12345696",
    email: "nikhil.kumar@example.com",
    personalEmail: "nikhil.personal@example.com",
    phone: "9876543228",
    program: "BCA",
    branch: "CSE",
    semester: "4th",
    cgpa: "8.3",
    preferredRole: "Software Engineer",
    status: "Shortlisted",
  },
  {
    id: "APP020",
    fullName: "Riya Singh",
    registrationNumber: "12345697",
    email: "riya.singh@example.com",
    personalEmail: "riya.personal@example.com",
    phone: "9876543229",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "9.1",
    preferredRole: "Data Analyst",
    status: "Selected",
  },
  {
    id: "APP021",
    fullName: "Mohit Bansal",
    registrationNumber: "12345698",
    email: "mohit.bansal@example.com",
    personalEmail: "mohit.personal@example.com",
    phone: "9876543230",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.2",
    preferredRole: "Web Developer",
    status: "Pending",
  },
  {
    id: "APP022",
    fullName: "Aditi Sharma",
    registrationNumber: "12345699",
    email: "aditi.sharma@example.com",
    personalEmail: "aditi.personal@example.com",
    phone: "9876543231",
    program: "B.Des",
    branch: "Design",
    semester: "6th",
    cgpa: "8.9",
    preferredRole: "UI/UX Designer",
    status: "Shortlisted",
  },
  {
    id: "APP023",
    fullName: "Saurabh Mishra",
    registrationNumber: "12345700",
    email: "saurabh.mishra@example.com",
    personalEmail: "saurabh.personal@example.com",
    phone: "9876543232",
    program: "B.Tech",
    branch: "ECE",
    semester: "6th",
    cgpa: "7.8",
    preferredRole: "Cloud Engineer",
    status: "Rejected",
  },
  {
    id: "APP024",
    fullName: "Tanya Arora",
    registrationNumber: "12345701",
    email: "tanya.arora@example.com",
    personalEmail: "tanya.personal@example.com",
    phone: "9876543233",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "9.0",
    preferredRole: "DevOps Engineer",
    status: "Selected",
  },
  {
    id: "APP025",
    fullName: "Deepak Rawat",
    registrationNumber: "12345702",
    email: "deepak.rawat@example.com",
    personalEmail: "deepak.personal@example.com",
    phone: "9876543234",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.6",
    preferredRole: "Software Engineer",
    status: "Pending",
  },
  {
    id: "APP026",
    fullName: "Shreya Gupta",
    registrationNumber: "12345703",
    email: "shreya.gupta@example.com",
    personalEmail: "shreya.personal@example.com",
    phone: "9876543235",
    program: "BCA",
    branch: "IT",
    semester: "4th",
    cgpa: "8.8",
    preferredRole: "Data Analyst",
    status: "Shortlisted",
  },
  {
    id: "APP027",
    fullName: "Manish Yadav",
    registrationNumber: "12345704",
    email: "manish.yadav@example.com",
    personalEmail: "manish.personal@example.com",
    phone: "9876543236",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.1",
    preferredRole: "Web Developer",
    status: "Selected",
  },
  {
    id: "APP028",
    fullName: "Nandini Rao",
    registrationNumber: "12345705",
    email: "nandini.rao@example.com",
    personalEmail: "nandini.personal@example.com",
    phone: "9876543237",
    program: "B.Des",
    branch: "Design",
    semester: "6th",
    cgpa: "9.0",
    preferredRole: "UI/UX Designer",
    status: "Pending",
  },
  {
    id: "APP029",
    fullName: "Akash Tiwari",
    registrationNumber: "12345706",
    email: "akash.tiwari@example.com",
    personalEmail: "akash.personal@example.com",
    phone: "9876543238",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.4",
    preferredRole: "Cloud Engineer",
    status: "Shortlisted",
  },
  {
    id: "APP030",
    fullName: "Megha Saini",
    registrationNumber: "12345707",
    email: "megha.saini@example.com",
    personalEmail: "megha.personal@example.com",
    phone: "9876543239",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "8.3",
    preferredRole: "DevOps Engineer",
    status: "Rejected",
  },
  {
    id: "APP031",
    fullName: "Varun Kapoor",
    registrationNumber: "12345708",
    email: "varun.kapoor@example.com",
    personalEmail: "varun.personal@example.com",
    phone: "9876543240",
    program: "BCA",
    branch: "CSE",
    semester: "4th",
    cgpa: "8.6",
    preferredRole: "Software Engineer",
    status: "Selected",
  },
  {
    id: "APP032",
    fullName: "Shivani Gupta",
    registrationNumber: "12345709",
    email: "shivani.gupta@example.com",
    personalEmail: "shivani.personal@example.com",
    phone: "9876543241",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "9.3",
    preferredRole: "Data Analyst",
    status: "Pending",
  },
  {
    id: "APP033",
    fullName: "Raj Mehta",
    registrationNumber: "12345710",
    email: "raj.mehta@example.com",
    personalEmail: "raj.personal@example.com",
    phone: "9876543242",
    program: "B.Tech",
    branch: "ECE",
    semester: "6th",
    cgpa: "8.0",
    preferredRole: "Web Developer",
    status: "Shortlisted",
  },
  {
    id: "APP034",
    fullName: "Sakshi Verma",
    registrationNumber: "12345711",
    email: "sakshi.verma@example.com",
    personalEmail: "sakshi.personal@example.com",
    phone: "9876543243",
    program: "B.Des",
    branch: "Design",
    semester: "6th",
    cgpa: "9.1",
    preferredRole: "UI/UX Designer",
    status: "Selected",
  },
  {
    id: "APP035",
    fullName: "Abhishek Singh",
    registrationNumber: "12345712",
    email: "abhishek.singh@example.com",
    personalEmail: "abhishek.personal@example.com",
    phone: "9876543244",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.5",
    preferredRole: "Cloud Engineer",
    status: "Pending",
  },
  {
    id: "APP036",
    fullName: "Komal Sharma",
    registrationNumber: "12345713",
    email: "komal.sharma@example.com",
    personalEmail: "komal.personal@example.com",
    phone: "9876543245",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "8.9",
    preferredRole: "DevOps Engineer",
    status: "Shortlisted",
  },
  {
    id: "APP037",
    fullName: "Rishabh Jain",
    registrationNumber: "12345714",
    email: "rishabh.jain@example.com",
    personalEmail: "rishabh.personal@example.com",
    phone: "9876543246",
    program: "BCA",
    branch: "CSE",
    semester: "4th",
    cgpa: "7.9",
    preferredRole: "Software Engineer",
    status: "Rejected",
  },
  {
    id: "APP038",
    fullName: "Pallavi Joshi",
    registrationNumber: "12345715",
    email: "pallavi.joshi@example.com",
    personalEmail: "pallavi.personal@example.com",
    phone: "9876543247",
    program: "B.Tech",
    branch: "IT",
    semester: "6th",
    cgpa: "9.2",
    preferredRole: "Data Analyst",
    status: "Selected",
  },
  {
    id: "APP039",
    fullName: "Abhinav Kumar",
    registrationNumber: "12345716",
    email: "abhinav.kumar@example.com",
    personalEmail: "abhinav.personal@example.com",
    phone: "9876543248",
    program: "B.Tech",
    branch: "CSE",
    semester: "6th",
    cgpa: "8.4",
    preferredRole: "Web Developer",
    status: "Pending",
  },
  {
    id: "APP040",
    fullName: "Divya Agarwal",
    registrationNumber: "12345717",
    email: "divya.agarwal@example.com",
    personalEmail: "divya.personal@example.com",
    phone: "9876543249",
    program: "B.Des",
    branch: "Design",
    semester: "6th",
    cgpa: "8.8",
    preferredRole: "UI/UX Designer",
    status: "Shortlisted",
  },
];

export default function ApplicantDetails() {
  const params = useParams();

  const applicantId = String(params.id);

  const applicant = applicants.find(
    (item) => item.id === applicantId
  );

  if (!applicant) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-6xl mx-auto">

          <Link
            href="/dashboard"
            className="text-blue-400 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-8">
            <h1 className="text-2xl font-bold">
              Applicant Not Found
            </h1>

            <p className="mt-2 text-slate-400">
              No applicant found with ID: {applicantId}
            </p>
          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-8">

      <div className="max-w-6xl mx-auto">

        <Link
          href="/dashboard"
          className="inline-block mb-6 text-blue-400 hover:text-blue-300 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        {/* Header */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 mb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <p className="text-sm text-slate-400">
                Application ID
              </p>

              <h1 className="text-3xl font-bold mt-1">
                {applicant.id}
              </h1>

              <p className="text-xl text-slate-300 mt-2">
                {applicant.fullName}
              </p>
            </div>

            <span className="w-fit rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300">
              {applicant.status}
            </span>

          </div>

        </div>

        {/* Personal Information */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 mb-6">

          <h2 className="text-xl font-semibold mb-5">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Detail
              label="Full Name"
              value={applicant.fullName}
            />

            <Detail
              label="Registration Number"
              value={applicant.registrationNumber}
            />

            <Detail
              label="University Email"
              value={applicant.email}
            />

            <Detail
              label="Personal Email"
              value={applicant.personalEmail}
            />

            <Detail
              label="Phone"
              value={applicant.phone}
            />

          </div>

        </section>

        {/* Academic Information */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 mb-6">

          <h2 className="text-xl font-semibold mb-5">
            Academic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Detail
              label="Program"
              value={applicant.program}
            />

            <Detail
              label="Branch"
              value={applicant.branch}
            />

            <Detail
              label="Semester"
              value={applicant.semester}
            />

            <Detail
              label="CGPA"
              value={applicant.cgpa}
            />

          </div>

        </section>

        {/* Recruitment Information */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 mb-6">

          <h2 className="text-xl font-semibold mb-5">
            Recruitment Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Detail
              label="Preferred Role"
              value={applicant.preferredRole}
            />

            <Detail
              label="Application Status"
              value={applicant.status}
            />

          </div>

        </section>

        {/* Links */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 mb-6">

          <h2 className="text-xl font-semibold mb-5">
            Links & Documents
          </h2>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-800 px-4 py-2 text-blue-400 hover:bg-slate-700"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-800 px-4 py-2 text-blue-400 hover:bg-slate-700"
            >
              GitHub
            </a>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-800 px-4 py-2 text-blue-400 hover:bg-slate-700"
            >
              Portfolio
            </a>

          </div>

        </section>

        {/* Additional Information */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold mb-5">
            Additional Information
          </h2>

          <div className="space-y-6">

            <Detail
              label="Communities"
              value="AWS Club, Coding Club"
            />

            <Detail
              label="Achievements"
              value="Participated in multiple hackathons and technical events."
            />

            <Detail
              label="Why do you want to join?"
              value="I want to gain practical industry experience and contribute to real-world projects."
            />

          </div>

        </section>

      </div>

    </main>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-slate-400 mb-1">
        {label}
      </p>

      <p className="text-base text-white">
        {value}
      </p>
    </div>
  );
}