import Image from "next/image";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <nav className="relative z-10 flex h-16 items-center justify-between border-b border-border px-6 transition-colors duration-300 lg:px-8">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground transition-colors duration-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 text-background"
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
          <div className="text-[11px] font-medium text-text-muted">
            AWS LPU
          </div>

          <div className="text-[15px] font-semibold tracking-[-0.03em] text-foreground">
            Recruitment
          </div>
        </div>
      </Link>

      {/* Center information */}
      <div className="hidden items-center gap-6 text-[10px] uppercase tracking-widest text-text-faint sm:flex">
        <span>Recruitment Management</span>

        <span className="h-1 w-1 rounded-full bg-text-faint" />

        <span>Secure Access</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {user ? (
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="border border-border bg-surface px-4 py-2 text-[12px] font-medium text-text-secondary transition-colors duration-200 hover:border-border-strong hover:bg-surface-muted"
            >
              Dashboard
            </Link>

            <a
              href="/api/auth/logout"
              className="border border-border bg-surface px-4 py-2 text-[12px] font-medium text-text-secondary transition-colors duration-200 hover:border-border-strong hover:bg-surface-muted"
            >
              Logout
            </a>

            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border bg-surface-muted">
              {user.picture ? (
                <Image
                  src={user.picture}
                  alt={user.name ?? "User"}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[11px] font-medium text-text-secondary">
                  {user.name?.charAt(0).toUpperCase() ?? "U"}
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="border border-border bg-surface px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors duration-200 hover:border-border-strong hover:bg-surface-muted"
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}