'use client'
import { useState } from 'react';
import Link from "next/link";
import Carousel from '@/components/utility/Carousel';

export default function Home() {

    const slides = [
    {
      id: 1,
      title: "Secure Your Future",
      desc: "Explore our comprehensive insurance plans tailored for you.",
      bg: "bg-slate-900",
      image: "/insurance.png"
    },
    {
      id: 2,
      title: "Grow Your Wealth",
      desc: "Smart investment strategies to maximize your long-term returns.",
      bg: "bg-[var(--secondary)]",
      image: "/risk-management.png"
    },
    {
      id: 3,
      title: "Retire with Confidence",
      desc: "Reliable pension schemes designed for a comfortable tomorrow.",
      bg: "bg-[var(--foreground)]",
      image: "/healthcare.png"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => { setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))};
  const nextSlide = () => { setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))};

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-none">
      <section 
        className='h-screen snap-start relative overflow-hidden'
        style = {{
          backgroundImage: `url(/HeroImage.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </section>
      <section className="h-screen snap-start">
        <div className="relative w-full h-full overflow-hidden bg-black text-white">
              {/* 2. Slider Track Container */}
              <div 
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div 
                    key={slide.id} 
                    className={`w-full h-full flex-shrink-0 flex flex-row gap-6 justify-between items-center text-center px-12 ${slide.bg}`}
                  >
                    <div className='relative h-3/5 p-6 text-left backdrop-blur-sm pb-18 after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-3/4 after:bg-white'>
                      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                        {slide.title}
                      </h2>
                      <p className="text-md md:text-md text-gray-300 max-w-xl font-light font-sans">
                        {slide.desc}
                      </p>
                    </div>
                    <img src={slide.image} alt={slide.title} className="w-80 h-auto object-cover mt-4  rounded-lg invert-[48%] sepia-[79%] saturate-[2476%] hue-rotate-[328deg]" />
                  </div>
                ))}
              </div>
              <div className="inset-0 flex gap-2 items-center px-16">
                <button 
                  onClick={prevSlide}
                  className="left-4 top-1/2 -translate-y-14 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors z-20 group"
                >
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button 
                  onClick={nextSlide}
                  className="right-4 top-1/2 -translate-y-14 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors z-20 group"
                >
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>


              {/* 4. Bottom Dot Indicators */}
              <div className="absolute bottom-6 right-0 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index ? "w-8 bg-white" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
        </div>
      </section>
      <section className="h-screen snap-start flex flex-col items-center justify-center gap-4 bg-[var(--background)]">
        <h1 className="text-5xl text-[var(--primary)] font-serif font-bold mb-6">Who We Are</h1>
        <div className="flex flex-col text-white gap-4">
          <p className="text-lg text-[var(--accent)]">  We are who you want us to be or a more descriptive statement</p>
          <span className="flex flex-row gap-6 items-center justify-center mt-16">
            <Link href={'/about'} className="bg-[var(--secondary)] px-4 py-2 rounded-md text-sm">About Us</Link>
            <Link href={'/contact'} className="bg-[var(--primary)] px-4 py-2 rounded-md text-sm">Contact Us</Link>
          </span>
        </div>
      </section>
      {/* <section className="min-h-50">
        <Carousel />
      </section> */}
    </main>
  );
}

