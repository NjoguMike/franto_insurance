"use client";

import { useState } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  desc: string;
  image: string;
  eyebrow: string;
}

export default function Home() {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Secure Your Future",
      desc: "Explore our comprehensive insurance plans tailored for you.",
      image: "/insurance.png",
      eyebrow: "Insurance",
    },
    {
      id: 2,
      title: "Grow Your Wealth",
      desc: "Smart investment strategies to maximize your long-term returns.",
      image: "/investment.png",
      eyebrow: "Investments",
    },
    {
      id: 3,
      title: "Retire with Confidence",
      desc: "Reliable pension schemes designed for a comfortable tomorrow.",
      image: "/retirement.png",
      eyebrow: "Pension",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => { setCurrent((prev) => prev === 0 ? slides.length - 1 : prev - 1 );  };
  const nextSlide = () => { setCurrent((prev) => prev === slides.length - 1 ? 0 : prev + 1 );  };

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-none">

      {/* ================      HERO      ================ */}
      <section
        className="relative min-h-screen snap-start overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/HeroImage.jpg')" }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Decorative circle */}
        <div className="absolute -right-40 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[var(--secondary)]/20 lg:block" />

        <div className="relative z-10 flex min-h-screen items-center px-6 py-28 sm:px-10 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">

            <div className="max-w-5xl">

              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white sm:text-sm">
                Franto Insurance Agency
              </p>

              <div className="mb-7 h-px w-20 bg-[var(--accent)]" />

              <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Protect what matters.
                <span className="mt-2 block text-[var(--accent)]">
                  Build what matters.
                </span>
              </h1>

              <p className="mt-8 max-w-4xl text-sm leading-7 tracking-wide text-white/90 sm:text-base sm:leading-8 lg:text-lg">
                From protecting your health and assets to building wealth and planning for retirement, we're here to help you discover endless financial possibilities.
              </p>

              <div className="mt-10 sm:mt-12">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--primary)]"
                >
                  Explore Services

                  <span className="transition-transform duration-300 group-hover:translate-x-1"> → </span>
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 sm:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <span className="h-10 w-px bg-white/40" />
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">

        {/* ================== DESKTOP — THREE SERVICES ===================*/}
        <div className="hidden h-full lg:grid lg:grid-cols-3">

          {slides.map((slide, index) => (
            <article
              key={slide.id}
              className={`group relative flex h-full flex-col overflow-hidden ${index === 1 ? 'bg-[var(--accent)]' : 'bg-[var(--primary)]'} border-r border-white/10 px-8 py-14' : 'border-r border-white/10 px-8 py-14 last:border-r-0 xl:px-12'}`}
            >

              {/* Decorative circle */}
              <div className={`absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full border ${index === 1 ? 'border-[var(--secondary)]/30' : 'border-[var(--accent)]/10'} transition-transform duration-700 group-hover:scale-110`} />

              {/* Top information */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl font-semibold text-white/30">
                    0{index + 1}
                  </span>
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${index === 1 ? 'text-[var(--secondary)]' : 'text-[var(--accent)]'}`}>
                    {slide.eyebrow}
                  </span>
                </div>
                <div className="mt-7 h-px w-12 bg-[var(--secondary)]" />
                <h2 className="mt-7 font-serif text-3xl font-semibold leading-tight text-white xl:text-4xl">
                  {slide.title}
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/70 xl:text-base">
                  {slide.desc}
                </p>
              </div>

              {/* Image */}
              <div className="relative z-10 flex flex-1 items-center justify-center">
                <div
                  className={`md:absolute sm:translate-x-1 md:translate-x-1/9 xl:translate-x-3/4 w-50 h-auto md:w-40 lg:w-60 aspect-square rounded-lg ${index === 1 ? 'bg-[var(--primary)]' : 'bg-[var(--accent)]'}`}
                  style={{
                    maskImage: `url(${slide.image})`,
                    WebkitMaskImage: `url(${slide.image})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </div>

              {/* Bottom detail */}
              <div className="relative z-10">
                <div className={`mb-5 h-px w-full ${index === 1 ? 'bg-[var(--secondary)]/30' : 'bg-white/10'}`} />
                <p className={`text-[10px] uppercase tracking-[0.3em] ${index === 1 ? 'text-[var(--secondary)]' : 'text-white/40'}`}>
                  Endless Financial Possibilities
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ===================== MOBILE / TABLET — CAROUSEL ====================== */}
        <div className="relative h-full lg:hidden">

          {/* Track */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >

            {slides.map((slide, index) => (
              <article
                key={slide.id}
                className={`relative h-full w-full flex-shrink-0 overflow-hidden ${index === 1 ? 'bg-[var(--accent)]' : 'bg-[var(--primary)]'}`}
              >

                {/* Decorative circle */}
                <div className={`absolute -bottom-24 -right-18 h-[450px] w-[450px] rounded-full ${index === 1 ? 'border border-[var(--secondary)]/70' : 'border border-white/10'}`} />

                {/* Main slide content */}
                <div className="relative z-10 flex h-full items-start sm:items-center px-5 py-20 sm:px-8">
                  <div className="grid w-full grid-cols-[1.1fr] items-center gap-3 sm:grid-cols-[1fr_1fr] sm:gap-6">
                    {/* ----------------------- TEXT ------------------------ */}
                    <div className="min-w-0 flex flex-col">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-4xl font-semibold text-white/40 sm:text-5xl">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="my-6 h-px w-10 bg-[var(--secondary)] sm:w-12" />
                      <p className={`mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] ${index === 1 ? 'text-[var(--primary)]' : 'text-[var(--accent)]'} sm:text-[10px]`}>
                        {slide.eyebrow}
                      </p>
                      <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-white sm:text-4xl">
                        {slide.title}
                      </h2>
                      <p className="mt-4 max-w-xs text-xs leading-6 text-white/70 sm:text-sm sm:leading-7">
                        {slide.desc}
                      </p>
                    </div>

                    {/* ------------------------ IMAGE ------------------------- */}
                    <div className="relative flex min-h-[220px] items-center justify-center sm:min-h-[300px]">
                      <div
                        className={`aspect-square rounded-lg ${index === 1 ? 'bg-[var(--primary)]' : 'bg-[var(--accent)]'} relative z-10 max-h-[210px] w-full object-contain sm:max-h-[300px]`}
                        style={{
                          maskImage: `url(${slide.image})`,
                          WebkitMaskImage: `url(${slide.image})`,
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* --------------------------- MOBILE NAVIGATION ---------------------------- */}
                <div className="absolute bottom-24 sm:bottom-12 left-5 right-5 z-20 flex items-center justify-between sm:left-8 sm:right-8">

                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous service"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 ${index === 1 ? 'hover:bg-[var(--secondary)] hover:text-[var(--background)]' : 'hover:bg-[var(--accent)] hover:text-[var(--primary)]'} sm:h-11 sm:w-11`}
                  >
                    <span className="text-lg"> ← </span>
                  </button>

                  {/* Indicators */}
                  <div className="flex items-center gap-2">

                    {slides.map((item, itemIndex) => (
                       <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrent(itemIndex)}
                        aria-label={`Go to ${item.eyebrow}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          current === itemIndex
                            ? `w-9 ${itemIndex === 1 ? 'bg-[var(--secondary)]' : 'bg-[var(--accent)]'}`
                            : "w-2 bg-white/35"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next service"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 ${index === 1 ? 'hover:bg-[var(--secondary)] hover:text-[var(--background)]' : 'hover:bg-[var(--accent)] hover:text-[var(--primary)]'} sm:h-11 sm:w-11`}
                  >
                    <span className="text-lg"> → </span>
                  </button>
                </div>
              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section className="relative min-h-screen snap-start overflow-hidden bg-[var(--background)]">

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-20">

          <div className="grid w-full gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

            {/* Left */}
            <div>

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
                Who We Are
              </p>

              <div className="mb-7 h-px w-16 bg-[var(--accent)]" />

              <h2 className="font-serif text-4xl font-semibold leading-tight text-[var(--primary)] sm:text-5xl lg:text-6xl">
                Financial confidence,

                <span className="block text-[var(--accent)]">
                  built around you.
                </span>
              </h2>

            </div>


            {/* Right */}
            <div>

              <p className="text-sm leading-8 text-[var(--primary)] sm:text-base lg:text-lg">
                We are a team of passionate professionals dedicated to
                providing exceptional services.
              </p>

              <p className="mt-6 text-sm leading-8 text-[var(--secondary)] sm:text-base">
                From protecting your health and assets to building wealth
                and planning for retirement, we're here to help you navigate
                your financial journey with confidence.
              </p>

              <div className="mt-10 flex justify-end gap-5 sm:mt-12 mr-12">

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--secondary)]"
                >
                  About Us

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* Decorative circles */}
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full border border-[var(--primary)]/10" />

        <div className="absolute -bottom-20 -right-20 h-[250px] w-[250px] rounded-full border border-[var(--secondary)]/20" />

      </section>

    </main>
  );
}