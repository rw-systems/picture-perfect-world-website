/**
 * Optional background loop: add public/hero-loop.webm and use a muted,
 * looping <video> behind the gradient layers for a cinematic hero.
 */
export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#fff8f3] text-[#2d2640]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.85 0.06 280 / 0.45) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ffe8f4] via-[#fff5eb] to-[#d4f4ea]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="landing-blob landing-blob-1 absolute -left-[20%] -top-[25%] h-[85vmin] w-[85vmin] rounded-full bg-gradient-to-br from-[#ff9ecd]/90 to-[#c4b5fd]/75 blur-3xl" />
        <div className="landing-blob landing-blob-2 absolute -right-[15%] top-[10%] h-[70vmin] w-[70vmin] rounded-full bg-gradient-to-bl from-[#7ee8c8]/85 to-[#a8d8ff]/80 blur-3xl" />
        <div className="landing-blob landing-blob-3 absolute bottom-[-20%] left-[15%] h-[75vmin] w-[75vmin] rounded-full bg-gradient-to-tr from-[#ffe066]/80 to-[#ffb4a8]/70 blur-3xl" />
        {/* Small accent orb — extra warmth without competing with hero */}
        <div className="absolute right-[12%] top-[48%] h-32 w-32 rounded-full bg-[#ffb86c]/35 blur-2xl md:h-40 md:w-40" />
      </div>

      {/* Soft geometric accents */}
      <div
        className="pointer-events-none absolute bottom-[12%] left-[4%] hidden h-16 w-16 rounded-2xl border-[3px] border-white/60 bg-gradient-to-br from-[#a8d8ff]/40 to-[#c4b5fd]/35 shadow-md sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[20%] right-[6%] hidden h-12 w-12 rounded-full border-[3px] border-white/70 bg-[#7ee8c8]/45 shadow-md sm:block"
        aria-hidden
      />

      <div
        className="landing-float pointer-events-none absolute left-[6%] top-[18%] hidden md:block"
        aria-hidden
      >
        <div className="rotate-[-8deg] rounded-3xl border-4 border-white bg-white/90 px-4 py-2 text-lg shadow-lg shadow-fuchsia-200/50">
          📷 ✨
        </div>
      </div>
      <div
        className="landing-float-delayed pointer-events-none absolute right-[8%] top-[28%] hidden md:block"
        aria-hidden
      >
        <div className="rotate-[10deg] rounded-3xl border-4 border-white bg-white/90 px-4 py-2 text-lg shadow-lg shadow-cyan-200/50">
          🏠 🎈
        </div>
      </div>
      <div
        className="landing-float-delayed pointer-events-none absolute bottom-[26%] right-[10%] hidden lg:block"
        aria-hidden
      >
        <div className="rotate-[6deg] rounded-3xl border-4 border-white bg-white/90 px-3 py-1.5 text-base shadow-lg shadow-amber-200/40">
          🌈
        </div>
      </div>

      {/* Tiny sparkles — inline SVG for crisp scaling */}
      <svg
        className="pointer-events-none absolute left-[10%] top-[40%] hidden h-8 w-8 text-[#f5a623] opacity-90 md:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l1.2 6.2L19 10l-5.8 1.8L12 18l-1.2-6.2L5 10l5.8-1.8L12 2z" />
      </svg>
      <svg
        className="pointer-events-none absolute right-[14%] top-[38%] hidden h-5 w-5 text-[#9b7ef5] opacity-80 md:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l1.2 6.2L19 10l-5.8 1.8L12 18l-1.2-6.2L5 10l5.8-1.8L12 2z" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-[32%] left-[18%] hidden h-6 w-6 text-[#3ec9a8] opacity-75 md:block"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l1.2 6.2L19 10l-5.8 1.8L12 18l-1.2-6.2L5 10l5.8-1.8L12 2z" />
      </svg>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <p className="mb-4 rounded-full border-2 border-[#2d2640]/10 bg-white/70 px-5 py-2 text-sm font-semibold tracking-wide text-[#5c4d7a] shadow-sm backdrop-blur-sm">
            Playful worlds from real rooms
          </p>

          <h1 className="text-balance text-5xl font-bold tracking-tight drop-shadow-sm sm:text-6xl sm:leading-[1.08]">
            <span className="text-[#4f8ad8]">Picture</span>
            <span className="bg-gradient-to-r from-[#e879a9] via-[#c084fc] to-[#ffb347] bg-clip-text text-transparent">
              Perfect
            </span>
            <span className="text-[#2eb87a]">World</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-[#5c4d7a]/95 sm:text-xl">
            A cozy, creative game where your space becomes a character-filled
            playground — made for curious kids and peaceful parents.
          </p>

          <div className="relative mt-10">
            <div
              className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-r from-[#ff5fa8] via-[#a855f7] to-[#14b8a6] opacity-85 blur-md"
              aria-hidden
            />
            <p className="relative rounded-2xl border-[3px] border-[#2d2640] bg-gradient-to-br from-[#fffdf9] via-[#fff5fc] to-[#f0fffa] px-8 py-6 text-center shadow-[6px_6px_0_0_#2d2640] sm:px-12 sm:py-7">
              <span className="block text-2xl font-extrabold leading-tight tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:text-4xl sm:leading-tight">
                <span className="text-[#b91c8c]">Launching</span>{" "}
                <span className="text-[#0f766e]">Summer</span>{" "}
                <span className="text-[#c2410c]">2026</span>
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
