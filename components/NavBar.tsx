import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex h-16 items-center justify-between border-b border-[#dedede]">
      <Link
        href="/"
        className="flex items-center gap-3"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
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

        <div className="leading-none">
          <div className="text-[11px] font-medium text-[#777]">
            AWS LPU
          </div>

          <div className="text-[15px] font-semibold tracking-[-0.03em] text-[#111]">
            Recruitment
          </div>
        </div>
      </Link>

      <div className="hidden items-center gap-6 text-[11px] text-[#999] sm:flex">
        <span>RECRUITMENT MANAGEMENT</span>
        <span className="h-1 w-1 rounded-full bg-[#bbb]" />
        <span>SECURE ACCESS</span>
      </div>

      <Link
        href="/auth/login"
        className="border border-[#cfcfcf] bg-white px-4 py-2 text-[13px] font-medium text-[#333] transition hover:border-[#999] hover:bg-[#fafafa]"
      >
        Sign in
      </Link>
    </nav>
  );
}
