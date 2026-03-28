export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 overflow-hidden border-b border-divider">
      <div className="relative z-10 max-w-4xl text-center flex flex-col gap-8">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold leading-[0.9] sm:leading-[0.85] tracking-tight">
          <span className="block">Payments</span>
          <span className="block">Without</span>
          <span className="block text-accent">Internet.</span>
        </h1>

        <p className="font-mono text-text-secondary max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
          AirPay enables digital payments in low-connectivity conditions with a cleaner mobile-first experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="https://airpaywebsite.vercel.app/about"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-white font-mono text-sm hover:bg-accent/90 transition-colors active:scale-95 touch-manipulation min-h-[48px] inline-flex items-center justify-center"
          >
            OPEN WEBSITE
          </a>

          <a
            href="#features"
            className="px-8 py-4 border border-divider text-text-primary font-mono text-sm hover:bg-surface transition-colors active:scale-95 touch-manipulation min-h-[48px] inline-flex items-center justify-center"
          >
            VIEW FEATURES
          </a>
        </div>
      </div>
    </section>
  );
}
