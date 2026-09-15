import Link from "next/link";

const recruitmentSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore opportunities, roles, and programs available through AWS LPU.",
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Submit your application using your AWS LPU identity and keep everything in one place.",
  },
  {
    number: "03",
    title: "Assess",
    description:
      "Complete the assessments and technical evaluations relevant to your opportunity.",
  },
  {
    number: "04",
    title: "Interview",
    description:
      "Move through the interview process with clear stages and timely updates.",
  },
  {
    number: "05",
    title: "Offer",
    description:
      "Receive your offer, review the details, and respond directly through the portal.",
  },
  {
    number: "06",
    title: "Begin",
    description:
      "Take the next step and start building with the AWS LPU community.",
  },
];

const benefits = [
  {
    title: "Build with AWS",
    description:
      "Work with cloud technologies and modern infrastructure while turning ideas into real products.",
  },
  {
    title: "Learn by doing",
    description:
      "Go beyond theory through workshops, technical sessions, projects, and hands-on experiences.",
  },
  {
    title: "Find your people",
    description:
      "Connect with students, builders, community leaders, and people who are equally curious about technology.",
  },
  {
    title: "Create opportunities",
    description:
      "Build projects, participate in challenges, showcase your work, and open doors to what comes next.",
  },
];

const builderTracks = [
  "Cloud & Infrastructure",
  "Artificial Intelligence",
  "Serverless",
  "DevOps",
  "Data & Analytics",
  "Application Development",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#f5f5f5] text-[#111]">
      <section className="relative flex min-h-[calc(100vh-120px)] overflow-hidden border-b border-[#dedede]">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(#e8e8e8 1px, transparent 1px), linear-gradient(90deg, #e8e8e8 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />

        <div className="pointer-events-none absolute left-[65%] top-[25%] h-125 w-125 rounded-full bg-[#f48120]/5.5 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-375 flex-col justify-center px-8 py-20 lg:px-16">
          <div className="max-w-262.5">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f48120]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#777]">
                AWS LPU Recruitment
              </span>
            </div>

            <h1 className="max-w-250 text-[54px] font-semibold leading-[0.96] tracking-[-0.06em] sm:text-[76px] lg:text-[96px]">
              Build your
              <br />
              <span className="text-[#777]">next chapter.</span>
            </h1>

            <p className="mt-9 max-w-170 text-[17px] leading-8 text-[#666]">
              Discover opportunities, build real things, connect with
              ambitious people, and take your next step with AWS LPU.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/auth/login"
                className="group inline-flex h-12 items-center bg-[#111] px-7 text-[13px] font-medium text-white transition hover:bg-[#2b2b2b]"
              >
                Explore opportunities

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="m13 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <span className="text-[11px] text-[#999]">
                Sign in with your AWS LPU account
              </span>
            </div>
          </div>

          <div className="mt-24 grid border-t border-[#d9d9d9] pt-6 sm:grid-cols-3">
            <div className="border-b border-[#dedede] pb-5 sm:border-b-0 sm:border-r sm:pr-8">
              <div className="text-[10px] uppercase tracking-[0.14em] text-[#999]">
                Opportunities
              </div>
              <div className="mt-2 text-[13px] text-[#555]">
                Discover roles and programs built for ambitious students.
              </div>
            </div>

            <div className="border-b border-[#dedede] py-5 sm:border-b-0 sm:border-r sm:px-8 sm:py-0">
              <div className="text-[10px] uppercase tracking-[0.14em] text-[#999]">
                Community
              </div>
              <div className="mt-2 text-[13px] text-[#555]">
                Learn and build alongside a growing community of builders.
              </div>
            </div>

            <div className="pt-5 sm:pl-8 sm:pt-0">
              <div className="text-[10px] uppercase tracking-[0.14em] text-[#999]">
                Growth
              </div>
              <div className="mt-2 text-[13px] text-[#555]">
                Turn curiosity into skills, projects, and opportunities.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-[1500px] px-8 py-24 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#999]">
                More than recruitment
              </div>

              <h2 className="mt-5 max-w-[500px] text-[38px] font-semibold leading-[1.05] tracking-[-0.045em]">
                A place to start building.
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p className="text-[17px] leading-8 text-[#666]">
                Recruitment is only one part of the journey. AWS LPU brings
                together opportunities to learn, build, collaborate, and
                contribute to a community shaped by technology.
              </p>

              <p className="mt-6 text-[17px] leading-8 text-[#666]">
                Whether you are taking your first steps into cloud computing
                or already building production-grade systems, there is room
                to grow, experiment, and make something meaningful.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-t border-[#dedede] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="border-b border-[#dedede] px-0 py-8 sm:px-7 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="text-[10px] text-[#aaa]">
                  0{index + 1}
                </div>

                <h3 className="mt-8 text-[15px] font-medium">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-[12px] leading-5 text-[#888]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1500px] px-8 py-24 lg:px-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#999]">
                The recruitment journey
              </div>

              <h2 className="mt-5 max-w-[650px] text-[38px] font-semibold leading-[1.05] tracking-[-0.045em]">
                Clear steps.
                <br />
                No guessing.
              </h2>
            </div>

            <p className="max-w-[420px] text-[14px] leading-6 text-[#777]">
              From your first application to the moment you begin, the
              recruitment journey is designed to keep you informed at every
              stage.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-[#d9d9d9] sm:grid-cols-2 lg:grid-cols-3">
            {recruitmentSteps.map((step) => (
              <div
                key={step.number}
                className="min-h-[220px] border-b border-r border-[#d9d9d9] bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-[#aaa]">
                    {step.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#d2d2d2]" />
                </div>

                <h3 className="mt-16 text-[17px] font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[300px] text-[12px] leading-5 text-[#888]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#dedede] bg-[#111] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#555 1px, transparent 1px), linear-gradient(90deg, #555 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-[1500px] px-8 py-24 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#f48120]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#999]">
                  AWS Student Builder Groups
                </span>
              </div>

              <h2 className="mt-6 max-w-[520px] text-[40px] font-semibold leading-[1.02] tracking-[-0.045em]">
                Don't just learn technology.
                <br />
                <span className="text-[#777]">Build with it.</span>
              </h2>

              <p className="mt-7 max-w-[520px] text-[14px] leading-7 text-[#aaa]">
                AWS Student Builder Groups bring students and builders
                together to learn, collaborate, experiment, and create.
              </p>

              <Link
                href="/auth/login"
                className="mt-9 inline-flex h-11 items-center border border-[#555] px-6 text-[12px] font-medium text-white transition hover:border-[#888] hover:bg-white/[0.05]"
              >
                Join the journey
              </Link>
            </div>

            <div>
              <div className="grid border-l border-t border-[#333] sm:grid-cols-2">
                {builderTracks.map((track, index) => (
                  <div
                    key={track}
                    className="flex min-h-[125px] flex-col justify-between border-b border-r border-[#333] p-6"
                  >
                    <span className="text-[10px] text-[#666]">
                      0{index + 1}
                    </span>

                    <span className="text-[13px] text-[#ccc]">
                      {track}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#333] pt-6">
                <p className="text-[11px] leading-5 text-[#666]">
                  AWS announced in 2026 that AWS Cloud Clubs are evolving
                  into AWS Student Builder Groups, with the community
                  spanning 600+ colleges and universities across 63
                  countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-[1500px] px-8 py-24 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#999]">
                Why AWS LPU
              </div>

              <h2 className="mt-5 max-w-[560px] text-[38px] font-semibold leading-[1.05] tracking-[-0.045em]">
                Build skills that move with you.
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <div className="text-[22px] font-semibold tracking-[-0.03em]">
                  01
                </div>
                <h3 className="mt-5 text-[15px] font-medium">
                  Industry exposure
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#888]">
                  Learn through technical sessions, community events,
                  projects, and experiences connected to real-world
                  technology.
                </p>
              </div>

              <div>
                <div className="text-[22px] font-semibold tracking-[-0.03em]">
                  02
                </div>
                <h3 className="mt-5 text-[15px] font-medium">
                  Builder mindset
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#888]">
                  Turn ideas into working systems instead of stopping at
                  theory.
                </p>
              </div>

              <div>
                <div className="text-[22px] font-semibold tracking-[-0.03em]">
                  03
                </div>
                <h3 className="mt-5 text-[15px] font-medium">
                  Community
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#888]">
                  Meet people who are learning, experimenting, leading, and
                  building alongside you.
                </p>
              </div>

              <div>
                <div className="text-[22px] font-semibold tracking-[-0.03em]">
                  04
                </div>
                <h3 className="mt-5 text-[15px] font-medium">
                  Opportunities
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#888]">
                  Use your skills and experiences to discover what comes
                  next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1500px] px-8 py-28 text-center lg:px-16">
          <div className="mx-auto max-w-[850px]">
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#999]">
              Your next step
            </div>

            <h2 className="mt-6 text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[64px]">
              Ready to build
              <br />
              <span className="text-[#777]">what's next?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-[540px] text-[14px] leading-6 text-[#777]">
              Sign in with your AWS LPU account to explore opportunities,
              manage your applications, and continue your journey.
            </p>

            <Link
              href="/auth/login"
              className="mt-9 inline-flex h-12 items-center bg-[#111] px-8 text-[13px] font-medium text-white transition hover:bg-[#2a2a2a]"
            >
              Get started
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="ml-4 h-4 w-4"
              >
                <path
                  d="M5 12h13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="m13 6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}