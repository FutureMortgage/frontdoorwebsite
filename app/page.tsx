export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black isolate">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg.jpg')",
            filter: "brightness(1.18) contrast(1.02)",
          }}
        />
        {/* Legibility washes — light enough to keep the rock texture visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
        {/* Soft dark scrim behind the centered lockup */}
        <div className="absolute inset-0 [background:radial-gradient(60%_45%_at_50%_46%,rgba(0,0,0,0.55)_0%,transparent_70%)]" />
      </div>

      {/* Centered lockup */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="reveal flex flex-col items-center gap-2 [text-shadow:0_2px_30px_rgba(0,0,0,0.55)] sm:flex-row sm:items-center sm:gap-2">
          <h1 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-2xl md:text-3xl">
            Frontd<span className="mono">oo</span>r
          </h1>
          <span className="mono inline-flex items-center rounded-full border border-white/45 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm sm:text-xs">
            Direct
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-6 pb-8">
        <p className="mono text-center text-[0.65rem] uppercase tracking-[0.28em] text-white/60 [text-shadow:0_1px_16px_rgba(0,0,0,0.7)]">
          Frontdoor, a mortgage company built for consumers
        </p>
      </footer>
    </main>
  );
}
