"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

type Applicant = {
  id: string;
  fullName: string;
  registrationNumber: string;
  email: string;
  personalEmail: string;
  phone: string;
  program: string;
  branch: string;
  semester: string;
  cgpa: string;
  preferredRole: string;
  status: string;
  linkedin: string;
  github: string;
  portfolio: string;
  resume: string;
  communities: string;
  achievements: string;
  whyJoin: string;
};

const applicants: Applicant[] = [
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "AWS Club, Coding Club",
    achievements:
      "Participated in hackathons and technical events. Built multiple software projects.",
    whyJoin:
      "I want to gain practical industry experience and contribute to real-world projects while improving my technical skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Data Science Club",
    achievements:
      "Completed data analytics projects and participated in technical competitions.",
    whyJoin:
      "I am interested in solving real-world problems using data and gaining industry exposure.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Web Development Club",
    achievements:
      "Developed responsive websites and participated in coding competitions.",
    whyJoin:
      "I want to work on real-world applications and improve my development skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Design Club",
    achievements:
      "Created multiple UI/UX case studies and design prototypes.",
    whyJoin:
      "I want to collaborate with developers and create meaningful user experiences.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "AWS Club",
    achievements:
      "Worked on cloud-based projects and completed cloud computing certifications.",
    whyJoin:
      "I want to gain practical cloud engineering experience and work with modern infrastructure.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "DevOps Community",
    achievements:
      "Worked with CI/CD tools and deployed applications using cloud platforms.",
    whyJoin:
      "I want to improve my DevOps skills by working on production-level systems.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Coding Club",
    achievements:
      "Built academic and personal software projects.",
    whyJoin:
      "I want to transition my programming knowledge into practical software development.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Analytics Club",
    achievements:
      "Created dashboards and performed data analysis projects.",
    whyJoin:
      "I want to develop stronger analytical skills through practical projects.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Web Club",
    achievements:
      "Developed several frontend projects.",
    whyJoin:
      "I want to improve my web development skills through practical experience.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Design Club",
    achievements:
      "Created UI/UX prototypes and participated in design competitions.",
    whyJoin:
      "I want to create user-focused products while collaborating with technical teams.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "AWS Club",
    achievements:
      "Built cloud-based academic projects.",
    whyJoin:
      "I want to strengthen my cloud computing and infrastructure skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Cloud Club",
    achievements:
      "Worked with deployment automation and cloud services.",
    whyJoin:
      "I want to gain hands-on experience with DevOps practices.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Coding Club",
    achievements:
      "Participated in coding competitions and software projects.",
    whyJoin:
      "I want to become a better software engineer by working on real applications.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Data Science Club",
    achievements:
      "Worked on data visualization and analytics projects.",
    whyJoin:
      "I want to use data to solve practical business problems.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Web Development Club",
    achievements:
      "Built responsive web applications.",
    whyJoin:
      "I want to improve my frontend and backend development skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Design Club",
    achievements:
      "Created several interface designs and prototypes.",
    whyJoin:
      "I want to work on products where design and technology come together.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "AWS Club",
    achievements:
      "Worked on cloud deployment projects.",
    whyJoin:
      "I want to build scalable cloud solutions.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "DevOps Club",
    achievements:
      "Worked on automation and deployment projects.",
    whyJoin:
      "I want to learn how modern applications are deployed and maintained.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Coding Club",
    achievements:
      "Built multiple programming projects.",
    whyJoin:
      "I want to gain professional software development experience.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Analytics Club",
    achievements:
      "Created analytical dashboards and reports.",
    whyJoin:
      "I want to apply analytical thinking to real-world problems.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Web Club",
    achievements:
      "Built frontend applications.",
    whyJoin:
      "I want to improve my full-stack development skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Design Club",
    achievements:
      "Created UI design systems and prototypes.",
    whyJoin:
      "I want to create intuitive and accessible user experiences.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "AWS Club",
    achievements:
      "Worked on cloud computing projects.",
    whyJoin:
      "I want to learn more about cloud technologies.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "DevOps Club",
    achievements:
      "Worked with deployment and automation tools.",
    whyJoin:
      "I want to learn production-grade DevOps practices.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Coding Club",
    achievements:
      "Built software projects using modern technologies.",
    whyJoin:
      "I want to strengthen my software engineering skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Data Club",
    achievements:
      "Created data visualization projects.",
    whyJoin:
      "I want to gain practical experience in analytics.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Web Club",
    achievements:
      "Built responsive web applications.",
    whyJoin:
      "I want to work on scalable web applications.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Design Club",
    achievements:
      "Created product design case studies.",
    whyJoin:
      "I want to improve my product design skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "AWS Club",
    achievements:
      "Worked on cloud deployment projects.",
    whyJoin:
      "I want to develop strong cloud engineering skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Cloud Club",
    achievements:
      "Worked on CI/CD projects.",
    whyJoin:
      "I want to improve my deployment and automation skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Coding Club",
    achievements:
      "Built multiple software projects.",
    whyJoin:
      "I want to develop professional software engineering experience.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Analytics Club",
    achievements:
      "Worked on analytics and visualization projects.",
    whyJoin:
      "I want to solve real-world problems using data.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Web Club",
    achievements:
      "Developed frontend projects.",
    whyJoin:
      "I want to improve my web development experience.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Design Club",
    achievements:
      "Created multiple product design projects.",
    whyJoin:
      "I want to contribute to meaningful digital products.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "AWS Club",
    achievements:
      "Worked on cloud computing projects.",
    whyJoin:
      "I want to learn cloud technologies through practical experience.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "DevOps Club",
    achievements:
      "Worked with deployment automation tools.",
    whyJoin:
      "I want to gain practical experience with modern DevOps workflows.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Coding Club",
    achievements:
      "Built academic software projects.",
    whyJoin:
      "I want to improve my programming and software engineering skills.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Data Science Club",
    achievements:
      "Worked on data analysis and visualization projects.",
    whyJoin:
      "I want to use data-driven approaches to solve business problems.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Web Club",
    achievements:
      "Developed web applications using modern technologies.",
    whyJoin:
      "I want to gain professional web development experience.",
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
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
    resume: "#",
    communities: "Design Club",
    achievements:
      "Created UI/UX projects and participated in design events.",
    whyJoin:
      "I want to contribute to user-focused digital products.",
  },
];

export default function ApplicantDetails() {
  const params = useParams();
  const searchParams = useSearchParams();

  const applicantId = decodeURIComponent(String(params.id));

  const applicantIndex = applicants.findIndex(
    (applicant) => applicant.id === applicantId
  );

  const applicant = applicants[applicantIndex];

  /* Preserve dashboard search/filter/sort context */
  const dashboardQuery = searchParams.toString();

  const dashboardUrl = dashboardQuery
    ? `/dashboard?${dashboardQuery}`
    : "/dashboard";

  const previousApplicant =
    applicantIndex > 0
      ? applicants[applicantIndex - 1]
      : null;

  const nextApplicant =
    applicantIndex < applicants.length - 1
      ? applicants[applicantIndex + 1]
      : null;

  const applicantUrl = (id: string) => {
    return dashboardQuery
      ? `/applications/${id}?${dashboardQuery}`
      : `/applications/${id}`;
  };

  if (!applicant) {
    return (
      <main className="min-h-screen bg-[#030712] px-6 py-10 text-white">

        <div className="mx-auto max-w-4xl">

          <Link
            href={dashboardUrl}
            className="inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300"
          >
            ← Back to Dashboard
          </Link>

          <div className="mt-8 rounded-2xl border border-red-400/20 bg-red-400/[0.05] p-8 backdrop-blur-xl">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-xl">
              !
            </div>

            <h1 className="text-2xl font-bold">
              Applicant Not Found
            </h1>

            <p className="mt-2 text-slate-400">
              No applicant was found with application ID{" "}
              <span className="font-medium text-white">
                {applicantId}
              </span>
              .
            </p>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[130px]" />

        <div className="absolute right-[-150px] top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div className="absolute bottom-[-150px] left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-600/[0.05] blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">

        {/* =========================================
            TOP NAVIGATION
        ========================================== */}

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <Link
            href={dashboardUrl}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 backdrop-blur-xl transition-all duration-200 hover:border-blue-400/20 hover:bg-blue-500/[0.05] hover:text-blue-300"
          >
            ← Back to Dashboard
          </Link>

          <div className="text-sm text-slate-500">
            Applicant{" "}
            <span className="font-medium text-slate-300">
              {applicantIndex + 1}
            </span>{" "}
            of{" "}
            <span className="font-medium text-slate-300">
              {applicants.length}
            </span>
          </div>

        </div>

        {/* =========================================
            PROFILE HEADER
        ========================================== */}

        <section className="group relative mb-6 overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/75 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-8">

          {/* glossy top line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

          {/* glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/[0.08] blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-5">

              {/* Avatar */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] text-2xl font-bold text-blue-300 shadow-lg shadow-blue-500/[0.05]">

                {getInitials(applicant.fullName)}

              </div>

              <div>

                <div className="mb-2 flex flex-wrap items-center gap-3">

                  <span className="text-xs font-medium tracking-wider text-blue-400">
                    APPLICATION {applicant.id}
                  </span>

                  <StatusBadge status={applicant.status} />

                </div>

                <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
                  {applicant.fullName}
                </h1>

                <p className="mt-2 text-sm text-slate-400">
                  {applicant.preferredRole}
                  <span className="mx-2 text-slate-700">
                    •
                  </span>
                  {applicant.program}
                  <span className="mx-2 text-slate-700">
                    •
                  </span>
                  {applicant.branch}
                </p>

              </div>

            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-4">

              <p className="text-xs text-slate-500">
                Registration Number
              </p>

              <p className="mt-1 font-mono text-sm font-medium text-blue-300">
                {applicant.registrationNumber}
              </p>

            </div>

          </div>

        </section>

        {/* =========================================
            QUICK STATS
        ========================================== */}

        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">

          <QuickStat
            label="CGPA"
            value={applicant.cgpa}
          />

          <QuickStat
            label="Semester"
            value={applicant.semester}
          />

          <QuickStat
            label="Program"
            value={applicant.program}
          />

          <QuickStat
            label="Branch"
            value={applicant.branch}
          />

        </div>

        {/* =========================================
            PERSONAL + CONTACT
        ========================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          <InfoCard
            title="Personal Information"
            description="Basic applicant information"
          >

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <Detail
                label="Full Name"
                value={applicant.fullName}
              />

              <Detail
                label="Registration Number"
                value={applicant.registrationNumber}
              />

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

          </InfoCard>

          <InfoCard
            title="Contact Information"
            description="Applicant contact details"
          >

            <div className="space-y-5">

              <Detail
                label="University Email"
                value={applicant.email}
                href={`mailto:${applicant.email}`}
              />

              <Detail
                label="Personal Email"
                value={applicant.personalEmail}
                href={`mailto:${applicant.personalEmail}`}
              />

              <Detail
                label="Phone"
                value={applicant.phone}
                href={`tel:${applicant.phone}`}
              />

            </div>

          </InfoCard>

        </div>

        {/* =========================================
            RECRUITMENT INFORMATION
        ========================================== */}

        <div className="mt-6">

          <InfoCard
            title="Recruitment Information"
            description="Application and role preferences"
          >

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

              <Detail
                label="Application ID"
                value={applicant.id}
              />

              <Detail
                label="Preferred Role"
                value={applicant.preferredRole}
              />

              <div>

                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Current Status
                </p>

                <StatusBadge status={applicant.status} />

              </div>

            </div>

          </InfoCard>

        </div>

        {/* =========================================
            LINKS
        ========================================== */}

        <div className="mt-6">

          <InfoCard
            title="Links & Documents"
            description="Applicant profiles and resume"
          >

            <div className="flex flex-wrap gap-3">

              <ProfileLink
                label="LinkedIn"
                href={applicant.linkedin}
                icon="in"
              />

              <ProfileLink
                label="GitHub"
                href={applicant.github}
                icon="⌘"
              />

              <ProfileLink
                label="Portfolio"
                href={applicant.portfolio}
                icon="↗"
              />

              <ProfileLink
                label="Resume"
                href={applicant.resume}
                icon="↓"
              />

            </div>

          </InfoCard>

        </div>

        {/* =========================================
            COMMUNITIES + ACHIEVEMENTS
        ========================================== */}

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

          <InfoCard
            title="Communities"
            description="Clubs and communities"
          >

            <div className="flex flex-wrap gap-2">

              {applicant.communities
                .split(",")
                .map((community) => (
                  <span
                    key={community}
                    className="rounded-full border border-blue-400/15 bg-blue-500/[0.07] px-3 py-1.5 text-sm text-blue-300"
                  >
                    {community.trim()}
                  </span>
                ))}

            </div>

          </InfoCard>

          <InfoCard
            title="Achievements"
            description="Highlights and accomplishments"
          >

            <p className="text-sm leading-7 text-slate-300">
              {applicant.achievements}
            </p>

          </InfoCard>

        </div>

        {/* =========================================
            WHY JOIN
        ========================================== */}

        <div className="mt-6">

          <InfoCard
            title="Why do you want to join?"
            description="Applicant response"
          >

            <div className="rounded-xl border border-white/[0.06] bg-black/[0.12] p-5">

              <p className="text-base leading-8 text-slate-300">
                &quot;{applicant.whyJoin}&quot;
              </p>

            </div>

          </InfoCard>

        </div>

        {/* =========================================
            PREVIOUS / NEXT
        ========================================== */}

        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:justify-between">

          {previousApplicant ? (
            <Link
              href={applicantUrl(previousApplicant.id)}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition-all duration-200 hover:border-blue-400/20 hover:bg-blue-500/[0.04]"
            >

              <p className="text-xs text-slate-500">
                ← Previous Applicant
              </p>

              <p className="mt-1 font-medium text-slate-200 group-hover:text-blue-300">
                {previousApplicant.id}
                <span className="mx-2 text-slate-600">
                  •
                </span>
                {previousApplicant.fullName}
              </p>

            </Link>
          ) : (
            <div />
          )}

          {nextApplicant ? (
            <Link
              href={applicantUrl(nextApplicant.id)}
              className="group text-left rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition-all duration-200 hover:border-blue-400/20 hover:bg-blue-500/[0.04] sm:text-right"
            >

              <p className="text-xs text-slate-500">
                Next Applicant →
              </p>

              <p className="mt-1 font-medium text-slate-200 group-hover:text-blue-300">
                {nextApplicant.fullName}
                <span className="mx-2 text-slate-600">
                  •
                </span>
                {nextApplicant.id}
              </p>

            </Link>
          ) : (
            <div />
          )}

        </div>

      </div>

    </main>
  );
}

/* ============================================================
   QUICK STAT
============================================================ */

function QuickStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-slate-900/70 p-4 backdrop-blur-xl transition-all duration-200 hover:border-blue-400/15 hover:bg-slate-900/90">

      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-2 truncate text-lg font-semibold text-white">
        {value}
      </p>

    </div>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-200 hover:border-white/[0.12] md:p-7">

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>

      </div>

      {children}

    </section>
  );
}

/* ============================================================
   DETAIL
============================================================ */

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>

      <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>

      {href ? (
        <a
          href={href}
          className="break-all text-sm font-medium text-slate-200 transition-colors hover:text-blue-300 hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="break-words text-sm font-medium text-slate-200">
          {value}
        </p>
      )}

    </div>
  );
}

/* ============================================================
   PROFILE LINK
============================================================ */

function ProfileLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/20 hover:bg-blue-500/[0.06] hover:text-blue-300"
    >

      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] text-xs font-bold text-blue-300">
        {icon}
      </span>

      {label}

      <span className="text-slate-600">
        ↗
      </span>

    </a>
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
  const styles: Record<
    string,
    {
      badge: string;
      dot: string;
    }
  > = {
    Pending: {
      badge:
        "border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-300",
      dot: "bg-yellow-400",
    },

    Shortlisted: {
      badge:
        "border-blue-400/20 bg-blue-400/[0.08] text-blue-300",
      dot: "bg-blue-400",
    },

    "Interview Scheduled": {
      badge:
        "border-purple-400/20 bg-purple-400/[0.08] text-purple-300",
      dot: "bg-purple-400",
    },

    Selected: {
      badge:
        "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300",
      dot: "bg-emerald-400",
    },

    Rejected: {
      badge:
        "border-red-400/20 bg-red-400/[0.08] text-red-300",
      dot: "bg-red-400",
    },
  };

  const current = styles[status] ?? {
    badge:
      "border-slate-400/20 bg-slate-400/[0.08] text-slate-300",
    dot: "bg-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${current.badge}`}
    >

      <span
        className={`h-1.5 w-1.5 rounded-full ${current.dot}`}
      />

      {status}

    </span>
  );
}

/* ============================================================
   INITIALS
============================================================ */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}