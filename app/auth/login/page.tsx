
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-6 rounded-xl border p-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-gray-500">
            Sign in using your AWS LPU account.
          </p>
        </div>

        <a
          href="/api/auth/login"
          className="flex w-full items-center justify-center rounded-lg bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Continue with AWS LPU
        </a>
      </div>
    </main>
  );
}
