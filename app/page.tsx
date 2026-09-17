import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#020617] p-6 text-slate-900 dark:text-white md:p-8 flex items-center justify-center">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/50 dark:bg-blue-600/10 blur-3xl" />
        <div className="absolute right-[-100px] top-1/3 h-96 w-96 rounded-full bg-cyan-200/50 dark:bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-150px] left-1/3 h-96 w-96 rounded-full bg-indigo-200/50 dark:bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
          <span className="text-sm font-medium tracking-wider text-emerald-700 dark:text-emerald-300">
            SYSTEM ACTIVE
          </span>
        </div>

        <h1 className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-100 dark:to-blue-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          Recruitment Portal
        </h1>
        
        <p className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Manage applications, filter candidates, and streamline your entire recruitment workflow seamlessly.
        </p>
        
        <Link 
          href="/dashboard"
          className="mt-10 inline-flex items-center justify-center rounded-xl border border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-500/10 px-8 py-4 text-lg font-medium text-blue-700 dark:text-blue-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-400/40 hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)]"
        >
          Enter Dashboard
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
