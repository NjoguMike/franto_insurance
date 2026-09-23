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
      image: "/investment.png"
    },
    {
      id: 3,
      title: "Retire with Confidence",
      desc: "Reliable pension schemes designed for a comfortable tomorrow.",
      bg: "bg-[var(--foreground)]",
      image: "/retirement.png"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => { setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))};
  const nextSlide = () => { setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))};

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-none">
      <section 
        className="min-h-screen snap-start relative flex items-end overflow-hidden "  
        style = {{
          backgroundImage: `url(/HeroImage.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='h-screen bg-black/30 w-full px-6 py-32 sm:py-16 sm:px-10 lg:px-20'>
          <div className="h-screen relative z-10 mx-auto w-full max-w-7xl xs:pt-10 flex flex-col items-start justify-center gap-6 sm:gap-0 lg:gap-8">
            <p className=" mb-5 sm:mb-10 md:mb-15 text-sm sm:text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[var(--background)] " >
              Franto Insurance Agency
            </p>

            <h1 className=" max-w-4xl font-serif text-4xl font-semibold leading-tight text-[var(--accent)] sm:text-5xl md:text-6xl lg:text-7xl" >
              Protect what matters.
              <span className="block text-4xl sm:text-3xl text-[var(--secondary)]"> Build what matters. </span>
            </h1>
            <p className=" mt-8 xs:mt-12 max-w-5xl text-xs leading-8 text-[var(--background)] sm:text-sm md:text-md lg:text-lg tracking-wider font-sans" >
              From protecting your health and assets to building wealth and planning for retirement, we're here to help you discover endless financial possibilities.
            </p>
            <div className="mt-14 sm:mt-24 flex flex-wrap gap-4">
              <Link href="/services" className=" text-sm rounded-full bg-[var(--primary)] px-7 py-3 font-semibold text-[var(--background)] transition-all duration-300 hover:bg-[var(--secondary)] shadow-lg backdrop-blur-md">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen snap-start">
        <div className="relative w-full h-full overflow-hidden text-white">
              {/* 2. Slider Track Container */}
              <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }} >
                {slides.map((slide) => (
                  <div key={slide.id} className={`w-full h-full flex-shrink-0 md:flex-shrink-1 flex flex-row gap-4 justify-between items-center text-center px-8 sm:px-10 ${slide.bg}`} >
                    <div className='relative h-1/2 sm:flex sm:flex-col sm:justify-between md:h-3/4 text-left backdrop-blur-sm pb-12 after:absolute md:after:relative after:bottom-0 after:right-0 after:h-[1px] after:w-4/5 after:bg-white md:after:content-none'>
                      <h2 className="text-3xl lg:text-2xl lg:text-4xl font-serif font-bold mb-10 tracking-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm md:text-md lg:text-md xl:text-lg max-w-md sm:max-w-sm text-gray-300 font-light font-sans">
                        {slide.desc}
                      </p>
                    </div>
                    <img src={slide.image} alt={slide.title} className="md:absolute sm:translate-x-1 md:translate-x-1/8 xl:translate-x-3/4 w-50 h-auto md:w-40 lg:w-60 object-cover rounded-lg invert-[68%] sepia-[79%] saturate-[2476%] hue-rotate-[328deg]" />
                  </div>
                ))}
              </div>
              <div className="md:hidden inset-0 flex gap-2 items-center px-10">
                <button 
                  onClick={prevSlide}
                  className="left-4 top-1/2 -translate-y-28 sm:-translate-y-24 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors z-20 group"
                >
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button 
                  onClick={nextSlide}
                  className="right-4 top-1/2 -translate-y-28 sm:-translate-y-24 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors z-20 group"
                >
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>


              {/* 4. Bottom Dot Indicators */}
              <div className="md:hidden absolute bottom-20 right-5 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button key={index} onClick={() => setCurrent(index)} className={`h-2 rounded-full transition-all duration-300 ${ current === index ? "w-8 bg-white" : "w-2 bg-white/40" }`}
                  />
                ))}
              </div>
        </div>
      </section>
      <section className="h-screen snap-start flex flex-col items-center justify-center gap-6 bg-[var(--background)]">
        <h1 className="text-3xl lg:text-5xl text-[var(--accent)] font-serif font-bold mb-6">Who We Are</h1>
        <div className="px-4 text-center text-white gap-6">
          <p className="text-sm sm:text-md lg:text-lg text-[var(--primary)]"> We are a team of passionate professionals dedicated to providing exceptional services.</p>
          <span className="flex flex-row gap-6 items-center justify-center mt-16">
            <Link href={'/about'} className="bg-[var(--primary)] px-5 py-2 rounded-full text-sm hover:bg-[var(--secondary)]">About Us</Link>
            <Link href={'/services'} className="bg-[var(--accent)] px-5 py-2 rounded-full text-sm hover:bg-[var(--accent2)]">Our Services</Link>
          </span>
        </div>
      </section>
      {/* <section className="min-h-50">
        <Carousel />
      </section> */}
    </main>
  );
}

