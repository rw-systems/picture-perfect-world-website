/**
 * Optional background loop: add public/hero-loop.webm and use a muted,
 * looping <video> behind the gradient layers for a cinematic hero.
 */
export default function Home() {
  return (
    <div className="relative isolate min-h-dvh overflow-x-hidden bg-[#fff8f3] text-[#2d2640]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.85 0.06 280 / 0.45) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ffe8f4] via-[#fff5eb] to-[#d4f4ea]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="landing-blob landing-blob-1 absolute -left-[30%] -top-[20%] h-[70vmin] w-[70vmin] rounded-full bg-gradient-to-br from-[#ff9ecd]/90 to-[#c4b5fd]/75 blur-3xl sm:-left-[20%] sm:-top-[25%] sm:h-[85vmin] sm:w-[85vmin]" />
        <div className="landing-blob landing-blob-2 absolute -right-[25%] top-[5%] h-[55vmin] w-[55vmin] rounded-full bg-gradient-to-bl from-[#7ee8c8]/85 to-[#a8d8ff]/80 blur-3xl sm:-right-[15%] sm:top-[10%] sm:h-[70vmin] sm:w-[70vmin]" />
        <div className="landing-blob landing-blob-3 absolute bottom-[-25%] left-[5%] h-[65vmin] w-[65vmin] rounded-full bg-gradient-to-tr from-[#ffe066]/80 to-[#ffb4a8]/70 blur-3xl sm:bottom-[-20%] sm:left-[15%] sm:h-[75vmin] sm:w-[75vmin]" />
        <div className="absolute right-[8%] top-[42%] h-24 w-24 rounded-full bg-[#ffb86c]/35 blur-2xl sm:right-[12%] sm:top-[48%] sm:h-40 sm:w-40" />
      </div>

      <div
        className="pointer-events-none absolute bottom-[10%] left-[2%] hidden h-14 w-14 rounded-2xl border-[3px] border-white/60 bg-gradient-to-br from-[#a8d8ff]/40 to-[#c4b5fd]/35 shadow-md sm:bottom-[12%] sm:left-[4%] sm:block sm:h-16 sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[18%] right-[3%] hidden h-10 w-10 rounded-full border-[3px] border-white/70 bg-[#7ee8c8]/45 shadow-md sm:bottom-[20%] sm:right-[6%] sm:block sm:h-12 sm:w-12"
        aria-hidden
      />

      <div
        className="landing-float pointer-events-none absolute left-[4%] top-[14%] hidden md:left-[6%] md:top-[18%] md:block"
        aria-hidden
      >
        <div className="rotate-[-8deg] rounded-3xl border-4 border-white bg-white/90 px-4 py-2 text-lg shadow-lg shadow-fuchsia-200/50">
          📷 ✨
        </div>
      </div>
      <div
        className="landing-float-delayed pointer-events-none absolute right-[4%] top-[22%] hidden md:right-[8%] md:top-[28%] md:block"
        aria-hidden
      >
        <div className="rotate-[10deg] rounded-3xl border-4 border-white bg-white/90 px-4 py-2 text-lg shadow-lg shadow-cyan-200/50">
          🏠 🎈
        </div>
      </div>
      <div
        className="landing-float-delayed pointer-events-none absolute bottom-[22%] right-[6%] hidden lg:bottom-[26%] lg:right-[10%] lg:block"
        aria-hidden
      >
        <div className="rotate-[6deg] rounded-3xl border-4 border-white bg-white/90 px-3 py-1.5 text-base shadow-lg shadow-amber-200/40">
          🌈
        </div>
      </div>

      <svg
        className="pointer-events-none absolute left-[8%] top-[36%] hidden h-8 w-8 text-[#f5a623] opacity-90 md:left-[10%] md:top-[40%] md:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l1.2 6.2L19 10l-5.8 1.8L12 18l-1.2-6.2L5 10l5.8-1.8L12 2z" />
      </svg>
      <svg
        className="pointer-events-none absolute right-[10%] top-[34%] hidden h-5 w-5 text-[#9b7ef5] opacity-80 md:right-[14%] md:top-[38%] md:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l1.2 6.2L19 10l-5.8 1.8L12 18l-1.2-6.2L5 10l5.8-1.8L12 2z" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-[28%] left-[12%] hidden h-6 w-6 text-[#3ec9a8] opacity-75 md:bottom-[32%] md:left-[18%] md:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l1.2 6.2L19 10l-5.8 1.8L12 18l-1.2-6.2L5 10l5.8-1.8L12 2z" />
      </svg>

      <main className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 py-10 pt-[max(2.5rem,env(safe-area-inset-top))] pb-12 sm:px-6 sm:py-20">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
          <p className="mb-3 max-w-[min(100%,20rem)] rounded-full border-2 border-[#2d2640]/10 bg-white/70 px-3 py-2 text-center text-xs font-semibold leading-snug tracking-wide text-[#5c4d7a] shadow-sm backdrop-blur-sm sm:mb-4 sm:max-w-none sm:px-5 sm:text-sm">
            Playful worlds from real rooms
          </p>

          <h1 className="text-balance text-[clamp(1.85rem,9.5vw,3.75rem)] font-bold leading-[1.12] tracking-tight drop-shadow-sm sm:leading-[1.08]">
            <span className="text-[#4f8ad8]">Picture</span>{" "}
            <span className="bg-gradient-to-r from-[#e879a9] via-[#c084fc] to-[#ffb347] bg-clip-text text-transparent">
              Perfect
            </span>{" "}
            <span className="text-[#2eb87a]">World</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty px-1 text-base leading-relaxed text-[#5c4d7a]/95 sm:mt-6 sm:text-lg md:text-xl">
            A cozy, creative game where your space becomes a character-filled
            playground — made for curious kids and peaceful parents.
          </p>

          <div className="relative mt-8 w-full max-w-[min(100%,22rem)] sm:mt-10 sm:max-w-none">
            <div
              className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-r from-[#ff5fa8] via-[#a855f7] to-[#14b8a6] opacity-85 blur-md"
              aria-hidden
            />
            <p className="relative rounded-2xl border-[3px] border-[#2d2640] bg-gradient-to-br from-[#fffdf9] via-[#fff5fc] to-[#f0fffa] px-4 py-5 text-center shadow-[4px_4px_0_0_#2d2640] sm:px-12 sm:py-7 sm:shadow-[6px_6px_0_0_#2d2640]">
              <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xl font-extrabold leading-tight tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:gap-x-2 sm:text-4xl sm:leading-tight">
                <span className="text-[#b91c8c]">Launching</span>
                <span className="text-[#0f766e]">Summer</span>
                <span className="text-[#c2410c]">2026</span>
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
