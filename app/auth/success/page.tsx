"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  "Authorization received",
  "Security state verified",
  "SSO connection established",
  "Identity confirmed",
  "Recruitment workspace ready",
];

export default function AuthSuccessPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timers = steps.map((_, index) =>
      window.setTimeout(() => {
        setActiveStep(index);
      }, index * 800)
    );

    const readyTimer = window.setTimeout(() => {
      setReady(true);
    }, 3800);

    const redirectTimer = window.setTimeout(() => {
      router.replace("/dashboard");
    }, 5600);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(readyTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background px-5 py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "clamp(42px, 5vw, 64px) clamp(42px, 5vw, 64px)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-[65%] top-[15%] h-64 w-64 rounded-full bg-accent/5 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative w-full max-w-120">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">
            AWS LPU Identity
          </span>
        </div>

        <div className="border border-border bg-surface">
          <div className="border-b border-border px-6 py-6 sm:px-8 sm:py-7">
            <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-faint">
              Secure authentication
            </div>

            <h1 className="mt-3 text-[25px] font-semibold tracking-[-0.04em]">
              {ready ? "You're all set." : "Welcome back."}
            </h1>

            <p className="mt-3 max-w-95 text-[12px] leading-6 text-text-muted">
              {ready
                ? "Your AWS LPU identity has been verified and your recruitment workspace is ready."
                : "Establishing your secure AWS LPU recruitment session. This will only take a moment."}
            </p>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-9">
            <div className="space-y-6">
              {steps.map((step, index) => {
                const completed = index < activeStep;
                const active = index === activeStep;

                return (
                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        completed
                          ? "border-foreground bg-foreground text-background"
                          : active
                            ? "border-foreground"
                            : "border-border-strong"
                      }`}
                    >
                      {completed ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-3 w-3"
                        >
                          <path
                            d="m6 12 4 4 8-8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : active ? (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      ) : null}
                    </div>

                    <span
                      className={`text-[12px] transition-all duration-500 ${
                        completed || active
                          ? "translate-x-0 text-foreground"
                          : "translate-x-1 text-text-faint"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-border bg-surface-muted px-6 py-4 sm:px-8">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-faint">
                AWS LPU Recruitment
              </span>

              <span className="text-[10px] text-text-faint">
                {ready ? "Opening workspace..." : "Authenticating..."}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between px-1">
          <span className="text-[10px] text-text-faint">
            Secure authentication
          </span>

          <span className="text-[10px] text-text-faint">
            recruitment.awslpu.in
          </span>
        </div>
      </div>
    </div>
  );
}