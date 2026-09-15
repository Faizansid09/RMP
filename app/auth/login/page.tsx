import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex flex-1 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#e8e8e8 1px, transparent 1px), linear-gradient(90deg, #e8e8e8 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-[70%] top-[15%] h-125 w-125 rounded-full bg-[#f48120]/4.5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-350 flex-1 items-center gap-20 px-8 py-20 lg:grid-cols-[1fr_480px] lg:px-16">
        <div className="hidden lg:block">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#f48120]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#888]">
              AWS LPU Recruitment
            </span>
          </div>

          <h1 className="max-w-180 text-[58px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#111] xl:text-[72px]">
            Welcome back.
            <br />
            <span className="text-[#777]">Let's build.</span>
          </h1>

          <p className="mt-8 max-w-142.5 text-[16px] leading-7 text-[#666]">
            Sign in to continue your recruitment journey, manage your
            applications, explore opportunities, and stay connected with
            AWS LPU.
          </p>

          <div className="mt-12 grid max-w-155 grid-cols-3 border-l border-t border-[#d9d9d9]">
            <div className="min-h-31.25 border-b border-r border-[#d9d9d9] bg-white/70 p-5">
              <div className="text-[10px] text-[#aaa]">01</div>

              <div className="mt-10 text-[13px] font-medium text-[#333]">
                Applications
              </div>
            </div>

            <div className="min-h-31.25 border-b border-r border-[#d9d9d9] bg-white/70 p-5">
              <div className="text-[10px] text-[#aaa]">02</div>

              <div className="mt-10 text-[13px] font-medium text-[#333]">
                Recruitment
              </div>
            </div>

            <div className="min-h-31.25 border-b border-r border-[#d9d9d9] bg-white/70 p-5">
              <div className="text-[10px] text-[#aaa]">03</div>

              <div className="mt-10 text-[13px] font-medium text-[#333]">
                Opportunities
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6 text-[10px] uppercase tracking-[0.12em] text-[#aaa]">
            <span>Secure Identity</span>
            <span className="h-1 w-1 rounded-full bg-[#bbb]" />
            <span>Role Based Access</span>
            <span className="h-1 w-1 rounded-full bg-[#bbb]" />
            <span>AWS LPU</span>
          </div>
        </div>

        <div className="w-full">
          <div className="border border-[#d8d8d8] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.055)]">
            <div className="border-b border-[#e5e5e5] px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#999]">
                    Recruitment Portal
                  </div>

                  <h2 className="mt-2 text-[21px] font-medium tracking-[-0.03em] text-[#222]">
                    Sign in
                  </h2>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-white"
                  >
                    <path
                      d="M5 12h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="m13 6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="px-8 py-9">
              <p className="text-[13px] leading-6 text-[#777]">
                Continue with your AWS LPU account to access your
                recruitment workspace.
              </p>

              <a
                href="/api/auth/login"
                className="group mt-8 flex h-12 w-full items-center justify-center gap-3 border border-[#cfcfcf] bg-white text-[13px] font-medium text-[#333] transition hover:border-[#999] hover:bg-[#fafafa]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8 9.5 4 2.5 4-2.5M12 12v5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Continue with AWS LPU

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-1 h-4 w-4 text-[#999] transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h13"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="m13 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div className="mt-7 border-t border-[#e8e8e8] pt-6">
                <div className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#777]"
                  >
                    <rect
                      x="5"
                      y="10"
                      width="14"
                      height="10"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 10V7a4 4 0 0 1 8 0v3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>

                  <p className="text-[11px] leading-5 text-[#888]">
                    Your credentials are handled by AWS LPU Identity
                    Services. This portal never stores your AWS LPU
                    password.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#e5e5e5] bg-[#fafafa] px-8 py-4">
              <span className="text-[10px] text-[#aaa]">
                AWS LPU Identity
              </span>

              <span className="text-[10px] text-[#aaa]">
                Secure authentication
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between px-1">
            <Link
              href="/"
              className="text-[10px] text-[#999] transition hover:text-[#555]"
            >
              ← Back to recruitment
            </Link>

            <span className="text-[10px] text-[#aaa]">
              recruitment.awslpu.in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}