"use client";

import Link from "next/link";
import { LuLandmark, LuTrendingUp, LuCar, LuShieldCheck, LuHeartPulse, LuWalletCards, LuArrowUpRight } from "react-icons/lu";
import { useState } from "react";
import BookingForm from "@/components/utility/bookingForm";

interface Service {
  title: string;
  description: string;
  icon: any;
}

interface ServiceSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
  dark?: boolean;
}


const services = {
  investments: [
    {
      title: "Wealth & Investment Management",
      description: "Build and preserve your wealth with investment strategies designed around your financial goals and long-term ambitions.",
      icon: LuTrendingUp,
    },
    {
      title: "Capital Growth Investments",
      description: "Put your money to work with structured investment opportunities focused on long-term growth and wealth accumulation.",
      icon: LuArrowUpRight,
    },
  ],

  insurance: [
    {
      title: "Motor Insurance",
      description: "Protect your vehicle and drive with confidence knowing you're covered when the unexpected happens.",
      icon: LuCar,
    },
    {
      title: "Health Insurance",
      description: "Protect yourself and your loved ones from unexpected medical costs with dependable healthcare solutions.",
      icon: LuHeartPulse,
    },
  ],

  pension: [
    {
      title: "Personal Pension Plan",
      description: "Build a dedicated financial foundation today for greater independence and security in your retirement years.",
      icon: LuWalletCards,
    },
    {
      title: "Retirement Investment Plan",
      description: "Turn your working years into lasting financial security through structured long-term retirement planning.",
      icon: LuLandmark,
    },
  ],
};

function ServiceCard({ service } : { service: Service }) {
  const Icon = service.icon;

  return (
    <div className=" group text-sm relative overflow-hidden rounded-2xl border border-[#102E50]/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl "
    >
      {/* Gold accent */}
      <div className=" absolute left-0 top-0 h-1 w-0 bg-[#F5C45E] transition-all duration-500 group-hover:w-full " />

      <div className="flex flex-row gap-4 items-baseline">
        {/* Icon */}
        <div className=" mb-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#102E50] text-[#F5C45E] transition-all duration-500 group-hover:bg-[#F5C45E] group-hover:text-[#102E50] " >
          <Icon size={24} strokeWidth={1.7} />
        </div>

        {/* Title */}
        <h3 className=" mb-4 font-serif text-xl xs:text-3xl font-semibold text-[#102E50] " > {service.title} </h3>
      </div>

      {/* Description */}
      <p className="mb-6 leading-7 text-gray-600 font-sans"> {service.description} </p>

      {/* Learn more */}
      <Link href="#contact" className=" inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#102E50] transition-colors duration-300 group-hover:text-[#BE3D2A] " >
        Learn More
        <LuArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1  group-hover:-translate-y-1 " />
      </Link>
    </div>
  );
}

function ServiceSection({ id, eyebrow, title, description, services, dark = false} : ServiceSectionProps) {
  return (
    <section id={id} className={`min-h-screen snap-start relative px-6 py-24 sm:px-10 lg:px-20 ${ dark ? "bg-[var(--primary)] text-white" : "bg-[var(--background)]" } `} >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl"> 
        <p className={` mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${ dark ? "text-[#F5C45E]" : "text-[#BE3D2A]" } `} >
          {eyebrow}
        </p>
        <h2 className={` mb-6 font-serif text-xl sm:text-4xl font-semibold sm:text-5xl ${ dark ? "text-white" : "text-[#102E50]" } `}
        >
          {title}
        </h2>
        <p className={` max-w-4xl text-sm sm:text-lg leading-8 font-sans ${ dark ? "text-white/70" : "text-gray-600" } `} >
          {description}
        </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => ( <ServiceCard key={index} service={service} /> ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [formVisible, setFormVisible] = useState(false);

  const handleBookingOpen = () => {
    setFormVisible(true);
  };
  return (
    <main className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth scrollbar-none">
      <section className="min-h-screen snap-start relative flex items-end overflow-hidden bg-[var(--foreground)]/8 px-6 py-32 sm:px-10 lg:px-20 " >

        {/* Decorative circles */}
        <div className=" absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[var(--primary)]/50 " />
        <div className=" absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[var(--accent)]/40 " />
        <div className="relative z-10 mx-auto w-full max-w-7xl pt-20">
          <p className=" mb-10 text-md font-semibold uppercase tracking-[0.35em] text-[var(--secondary)] " >
            Franto Insurance Agency
          </p>

          <h1 className=" max-w-4xl font-serif text-4xl font-semibold leading-tight text-[var(--accent)] sm:text-6xl lg:text-7xl " >
            Protect what matters.
            <span className="block text-[var(--primary)]"> Build what matters. </span>
          </h1>
          <p className=" mt-10 max-w-3xl text-sm sm:text-lg leading-8 text-[var(--secondary)] sm:text-xl tracking-wider font-sans" >
            From protecting your health and assets to building wealth and planning for retirement, we're here to help you discover endless financial possibilities.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#investments" className=" text-sm rounded-full bg-[var(--primary)] px-7 py-2 font-semibold text-[var(--background)] transition-all duration-300 hover:bg-[var(--accent)] ">
              Explore Our Services
            </Link>
            <Link href="#contact" className=" text-sm rounded-full border border-[var(--secondary)] px-7 py-2 text-[var(--secondary)] transition-all duration-300 hover:border-[#F5C45E] hover:text-[#F5C45E] ">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= INVESTMENTS ========================================= */}
      <ServiceSection 
        id="investments"
        eyebrow="Investments"
        title="Make your money work for your future."
        description="Whether you're building wealth, growing your capital, or planning for significant future goals, our investment solutions are designed around your financial ambitions."
        services={services.investments}
      />

      {/* ========================================= INSURANCE ========================================= */}
      <ServiceSection
        id="insurance"
        eyebrow="Insurance"
        title="Protection for the things that matter most."
        description="Life is unpredictable. The right insurance provides confidence today and financial protection when you need it most."
        services={services.insurance}
        dark
      />

      {/* ========================================= PENSION ========================================= */}
      <ServiceSection
        id="pension"
        eyebrow="Pension & Retirement"
        title="Build today for the life you want tomorrow."
        description="A secure retirement starts with thoughtful planning. Our pension solutions help you create a financial foundation for greater independence and peace of mind."
        services={services.pension}
      />

      <section id="contact" className="snap-start relative overflow-hidden bg-[#F5C45E] px-6 py-24 sm:px-10 lg:px-20 " >
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className=" mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)] " >
            Your Future Starts Today
          </p>

          <h2 className=" font-serif text-2xl sm:text-3xl font-semibold text-[#102E50] sm:text-5xl " >
            Endless Financial Possibilities.
          </h2>

          <p className=" mx-auto mt-6 max-w-2xl text-sm sm:text-lg leading-8 text-[#102E50]/70 " >
            Let's build a financial strategy that protects   what you've worked for and creates opportunities   for what comes next.
          </p>
          <button onClick={handleBookingOpen} className=" mt-8 inline-flex rounded-full bg-[#102E50] text-xs px-6 py-3 sm:px-8 sm:py-4 text-white transition-all duration-300 hover:bg-[#BE3D2A] hover:shadow-xl ">
            Start a Conversation
          </button>
        </div>
      </section>
      
      {/* =========================       BOOKING FORM MODAL      ========================= */}
      {formVisible && ( <BookingForm setFormVisible={setFormVisible} /> )}
    </main>
  );
}