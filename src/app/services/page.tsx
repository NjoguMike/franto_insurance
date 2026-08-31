"use client";

import {
  LuLandmark,
  LuTrendingUp,
  LuCar,
  LuHeartPulse,
  LuWalletCards,
  LuArrowUpRight,
  LuPlus,
  LuX,
} from "react-icons/lu";
import { Fragment, useState } from "react";
import BookingForm from "@/components/utility/bookingForm";

interface Service {
  title: string;
  description: string;
  details: string;
  highlights: string[];
  icon: any;
}

interface ServiceCategory {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
}

type Audience = "individual" | "corporate";

const serviceData: Record<Audience, ServiceCategory[]> = {
  individual: [
    {
      id: "investments",
      eyebrow: "Investments",
      title: "Make your money work for your future.",
      description:
        "Whether you're building wealth, growing your capital, or planning for significant future goals, our investment solutions are designed around your financial ambitions.",
      services: [
        {
          title: "Wealth & Investment Management",
          description:
            "Build and preserve your wealth with investment strategies designed around your financial goals and long-term ambitions.",
          details:
            "Our wealth management team works closely with you to understand your financial picture, risk tolerance, and long-term ambitions. From there, we build a diversified portfolio strategy that's reviewed and adjusted as your life and the markets change.",
          highlights: [
            "Personalized portfolio strategy",
            "Ongoing performance reviews",
            "Dedicated relationship manager",
          ],
          icon: LuTrendingUp,
        },
        {
          title: "Capital Growth Investments",
          description:
            "Put your money to work with structured investment opportunities focused on long-term growth and wealth accumulation.",
          details:
            "Capital Growth Investments are structured for clients who want their money working toward long-term accumulation. We identify opportunities across asset classes and manage them within a disciplined, goals-based framework.",
          highlights: [
            "Access to structured investment products",
            "Goals-based growth strategy",
            "Regular progress reporting",
          ],
          icon: LuArrowUpRight,
        },
      ],
    },
    {
      id: "insurance",
      eyebrow: "Insurance",
      title: "Protection for the things that matter most.",
      description:
        "Life is unpredictable. The right insurance provides confidence today and financial protection when you need it most.",
      services: [
        {
          title: "Motor Insurance",
          description:
            "Protect your vehicle and drive with confidence knowing you're covered when the unexpected happens.",
          details:
            "Our motor insurance plans cover accident damage, theft, and third-party liability, with flexible add-ons so your cover matches how and where you drive.",
          highlights: [
            "Comprehensive & third-party options",
            "Fast, straightforward claims",
            "Optional roadside assistance",
          ],
          icon: LuCar,
        },
        {
          title: "Health Insurance",
          description:
            "Protect yourself and your loved ones from unexpected medical costs with dependable healthcare solutions.",
          details:
            "From routine care to major medical events, our health insurance plans are built to reduce the financial strain of unexpected illness or injury for you and your family.",
          highlights: [
            "Inpatient & outpatient cover",
            "Family and dependents plans",
            "Wide hospital network",
          ],
          icon: LuHeartPulse,
        },
      ],
    },
    {
      id: "pension",
      eyebrow: "Pension & Retirement",
      title: "Build today for the life you want tomorrow.",
      description:
        "A secure retirement starts with thoughtful planning. Our pension solutions help you create a financial foundation for greater independence and peace of mind.",
      services: [
        {
          title: "Personal Pension Plan",
          description:
            "Build a dedicated financial foundation today for greater independence and security in your retirement years.",
          details:
            "A Personal Pension Plan lets you set aside contributions consistently over your working years, growing tax-efficiently so you have a dependable income stream in retirement.",
          highlights: [
            "Flexible contribution options",
            "Tax-efficient growth",
            "Clear retirement income projections",
          ],
          icon: LuWalletCards,
        },
        {
          title: "Retirement Investment Plan",
          description:
            "Turn your working years into lasting financial security through structured long-term retirement planning.",
          details:
            "Our Retirement Investment Plan combines disciplined investing with long-term planning, so your working years steadily build toward the retirement you want.",
          highlights: [
            "Long-term investment strategy",
            "Regular plan check-ins",
            "Designed around your retirement age",
          ],
          icon: LuLandmark,
        },
      ],
    },
  ],

  corporate: [
    {
      id: "investments",
      eyebrow: "Investments",
      title: "Put company capital to disciplined, long-term work.",
      description:
        "From treasury management to employee investment benefits, our corporate investment solutions are built around your business's financial strategy.",
      services: [
        {
          title: "Corporate Treasury & Investment Solutions",
          description:
            "Manage surplus capital and reserves with structured, risk-aware investment strategies built for your business.",
          details:
            "We work with your finance team to put idle capital and reserves to work through liquidity-conscious, risk-managed investment strategies, so your business's cash continues to serve its long-term goals.",
          highlights: [
            "Liquidity-aware investment strategy",
            "Regular reporting for finance teams",
            "Aligned with company risk appetite",
          ],
          icon: LuTrendingUp,
        },
        {
          title: "Employee Share & Investment Schemes",
          description:
            "Offer your team structured investment and share-ownership benefits that support recruitment and retention.",
          details:
            "Employee investment and share schemes give your team a stake in the business's success. We help design and administer schemes that are easy to run and genuinely valued by staff.",
          highlights: [
            "Scheme design and administration",
            "Supports recruitment & retention",
            "Clear reporting for HR and finance",
          ],
          icon: LuArrowUpRight,
        },
      ],
    },
    {
      id: "insurance",
      eyebrow: "Insurance",
      title: "Cover that protects your people and your operations.",
      description:
        "From your fleet to your workforce, our corporate insurance solutions are designed to keep your business protected and running.",
      services: [
        {
          title: "Fleet & Commercial Motor Insurance",
          description:
            "Keep your company vehicles and drivers covered with commercial motor plans built for business use.",
          details:
            "Whether you run a handful of vehicles or a full fleet, our commercial motor cover is built around business use, with claims support designed to minimize downtime for your operations.",
          highlights: [
            "Single or multi-vehicle fleet cover",
            "Business-use liability protection",
            "Dedicated claims support",
          ],
          icon: LuCar,
        },
        {
          title: "Group Health Insurance",
          description:
            "Give your team access to dependable healthcare cover as part of a competitive benefits package.",
          details:
            "Group health plans reduce the financial impact of illness or injury for your employees and their families, and help you offer a benefits package that supports recruitment and retention.",
          highlights: [
            "Flexible tiers for teams of any size",
            "Dependants cover options",
            "Simple enrolment for HR",
          ],
          icon: LuHeartPulse,
        },
      ],
    },
    {
      id: "pension",
      eyebrow: "Pension & Retirement",
      title: "Build a retirement benefit your team can count on.",
      description:
        "A strong group pension scheme is one of the clearest ways to invest in your people. We help you set one up and keep it running smoothly.",
      services: [
        {
          title: "Group Pension Schemes",
          description:
            "Offer your employees a structured, tax-efficient pension scheme managed end-to-end on your behalf.",
          details:
            "We set up and administer group pension schemes so your employees build retirement savings automatically, with reporting that keeps your finance and HR teams fully informed.",
          highlights: [
            "End-to-end scheme administration",
            "Tax-efficient contributions",
            "Regular scheme performance reporting",
          ],
          icon: LuLandmark,
        },
        {
          title: "Employee Retirement Benefits Plan",
          description:
            "Complement your pension scheme with additional retirement benefits that strengthen your total rewards package.",
          details:
            "Beyond a core pension, we help design supplementary retirement benefits, so your total rewards package stands out to current and prospective employees.",
          highlights: [
            "Customizable benefit structures",
            "Strengthens your total rewards package",
            "Ongoing employer support",
          ],
          icon: LuWalletCards,
        },
      ],
    },
  ],
};

function CategoryHeader({ category }: { category: ServiceCategory }) {
  return (
    <div className="pb-4">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#BE3D2A]">
        {category.eyebrow}
      </p>
      <h3 className="mb-3 font-serif text-xl font-semibold text-[#102E50]">
        {category.title}
      </h3>
      <p className="text-sm leading-7 text-gray-600 font-sans line-clamp-4">
        {category.description}
      </p>
    </div>
  );
}

function ServiceCard({
  service,
  onOpenBooking,
  onOpenDetails,
}: {
  service: Service;
  onOpenBooking: () => void;
  onOpenDetails: () => void;
}) {
  const Icon = service.icon;

  return (
    <div className="group text-sm relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#102E50]/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Gold accent */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-[#F5C45E] transition-all duration-500 group-hover:w-full" />

      {/* Details toggle */}
      <button
        type="button"
        onClick={onOpenDetails}
        aria-label={`More details about ${service.title}`}
        title="More details"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#102E50]/15 text-[#102E50] transition-colors duration-300 hover:border-[#BE3D2A] hover:text-[#BE3D2A]"
      >
        <LuPlus size={16} />
      </button>

      {/* Icon */}
      <div className="mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#102E50] text-[#F5C45E] transition-all duration-500 group-hover:bg-[#F5C45E] group-hover:text-[#102E50]">
        <Icon size={22} strokeWidth={1.7} />
      </div>

      {/* Title -> opens booking form. Clamped to 2 lines so card headers line up. */}
      <h3 className="mb-2 pr-8 font-serif text-lg xs:text-xl font-semibold text-[#102E50]">
        <button
          type="button"
          onClick={onOpenBooking}
          className="block w-full text-left line-clamp-2 transition-colors duration-300 hover:text-[#BE3D2A]"
        >
          {service.title}
        </button>
      </h3>

      {/* Description, clamped to 3 lines so card bodies don't balloon in height */}
      <p className="mb-5 leading-6 text-gray-600 font-sans text-[13px] line-clamp-3">
        {service.description}
      </p>

      {/* Learn more -> opens booking form. mt-auto keeps it flush to the bottom
          of the card regardless of how much text sits above it. */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102E50] transition-colors duration-300 group-hover:text-[#BE3D2A]"
      >
        Learn More
        <LuArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>
    </div>
  );
}

function ServiceDetailOverlay({ service, onClose, onOpenBooking }: {
  service: Service;
  onClose: () => void;
  onOpenBooking: () => void;
}) {
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#102E50]/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-[#102E50]/60 transition-colors hover:bg-[#102E50]/5 hover:text-[#102E50]"
        >
          <LuX size={18} />
        </button>

        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#102E50] text-[#F5C45E]">
          <Icon size={24} strokeWidth={1.7} />
        </div>

        <h3 className="mb-3 font-serif text-2xl font-semibold text-[#102E50]">
          {service.title}
        </h3>

        <p className="mb-5 text-sm leading-7 text-gray-600 font-sans">
          {service.details}
        </p>

        <ul className="mb-8 space-y-2">
          {service.highlights.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-700 font-sans"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#BE3D2A]" />
              {point}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#102E50] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#BE3D2A]"
        >
          Start a Conversation
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [formVisible, setFormVisible] = useState(false);
  const [active, setActive] = useState<Audience>("individual");
  const [selectedService, setSelectedService] = useState<Service | null>( null );

  const handleBookingOpen = () => {
    setSelectedService(null);
    setFormVisible(true);
  };

  const changeTab = (tab: Audience) => {
    setActive(tab);
    setSelectedService(null);
  };

  const categories = serviceData[active];

  return (
    <main className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth scrollbar-none">
      <section className="min-h-screen snap-start relative flex items-center overflow-hidden bg-[var(--foreground)]/8 px-6 sm:px-10 lg:px-20">
        {/* Decorative circles */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[var(--primary)]/50" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[var(--accent)]/40" />
        <div className="flex flex-col items-center w-full pt-20">
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-[var(--accent)] sm:text-6xl lg:text-7xl">
            Our Services
          </h1>
          <p className="mt-20 max-w-3xl text-center text-sm sm:text-lg leading-8 text-[var(--secondary)] sm:text-xl tracking-wider font-sans">
            From protecting your health and assets to building wealth and planning for retirement, we&apos;re here to help you discover endless financial possibilities.
          </p>
          <h2 className="mt-10 font-serif text-xl sm:text-4xl font-semibold sm:text-5xl text-[#102E50]">
            Every stage of your financial journey, covered.
          </h2>
        </div>
      </section>

      {/* ========================================= ALL SERVICES ========================================= */}
      <section
        id="services"
        className="snap-start relative px-6 py-24 sm:px-10 lg:px-20 bg-[var(--background)]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <h3 className="mb-4 font-bold uppercase tracking-[0.3em] text-[#BE3D2A]">
              What We Offer
            </h3>
            <p className="max-w-4xl text-sm sm:text-lg leading-8 text-gray-600 font-sans">
              Explore investments, insurance, and pension solutions below.
              Tap a title to start a conversation, or the{" "}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#102E50]/30 align-middle text-[10px]">
                +
              </span>{" "}
              icon on any service for more detail.
            </p>
          </div>

          {/* Individual / Corporate toggle */}
          <div className="mb-14 flex justify-center">
            <div className="flex rounded-full bg-[#102E50]/10">
              <button
                type="button"
                onClick={() => changeTab("individual")}
                className={`rounded-full px-7 py-2 text-sm font-semibold transition-all duration-300 ease-in-out ${ active === "individual" ? "bg-[#102E50] text-white shadow-lg" : "text-[#102E50] hover:text-[#BE3D2A]" }`}
              >
                Individual
              </button>

              <button
                type="button"
                onClick={() => changeTab("corporate")}
                className={`rounded-full px-7 py-2 text-sm font-semibold transition-all duration-300 ease-in-out ${ active === "corporate" ? "bg-[#102E50] text-white shadow-lg" : "text-[#102E50] hover:text-[#BE3D2A]" }`}
              >
                Corporate
              </button>
            </div>
          </div>

          {/*
            Layout note: each category currently has exactly 2 services, so the
            grid below uses 3 explicit row tracks per column (header + 2 cards):
            "auto 1fr 1fr". grid-flow-col fills a whole column (one category)
            before moving to the next, so categories stay grouped visually,
            while same-row cells across columns share the tallest row's height
            automatically — that's what keeps card 1 the same height across all
            three categories, and card 2 the same height across all three.
            If a category ever gets a different number of services, add a row
            track here to match.
          */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-flow-col md:grid-rows-[auto_1fr_1fr] md:gap-x-10 md:gap-y-6 md:items-stretch">
            {categories.map((category) => (
              <Fragment key={`${active}-${category.id}`}>
                <CategoryHeader category={category} />
                {category.services.map((service, index) => (
                  <ServiceCard
                    key={`${active}-${category.id}-${index}`}
                    service={service}
                    onOpenBooking={handleBookingOpen}
                    onOpenDetails={() => setSelectedService(service)}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="snap-start relative overflow-hidden bg-[#F5C45E] px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]">
            Your Future Starts Today
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#102E50] sm:text-5xl">
            Endless Financial Possibilities.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-lg leading-8 text-[#102E50]/70">
            Let&apos;s build a financial strategy that protects what
            you&apos;ve worked for and creates opportunities for what comes
            next.
          </p>
          <button
            onClick={handleBookingOpen}
            className="mt-8 inline-flex rounded-full bg-[#102E50] text-xs px-6 py-3 sm:px-8 sm:py-4 text-white transition-all duration-300 hover:bg-[#BE3D2A] hover:shadow-xl"
          >
            Start a Conversation
          </button>
        </div>
      </section>

      {/* =========================       SERVICE DETAIL OVERLAY      ========================= */}
      {selectedService && (
        <ServiceDetailOverlay
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenBooking={handleBookingOpen}
        />
      )}

      {/* =========================       BOOKING FORM MODAL      ========================= */}
      {formVisible && <BookingForm setFormVisible={setFormVisible} />}
    </main>
  );
}
