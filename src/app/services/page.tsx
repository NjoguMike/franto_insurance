"use client";

import { LuLandmark, LuTrendingUp, LuCar, LuHeartPulse, LuWalletCards, LuArrowUpRight, LuBadgeDollarSign, LuBriefcaseBusiness, LuBuilding2, LuChartNoAxesCombined, LuGraduationCap, LuHouse, LuPlane, LuRefreshCw, LuScale, LuShieldAlert, LuShieldCheck, LuShip, LuUmbrella, LuUserRoundCheck, LuUserRoundCog, LuUsers, LuChevronsDown } from "react-icons/lu";
import { useEffect, useMemo, useState } from "react";
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
      id: "medical",
      eyebrow: "Medical Insurance",
      title: "Healthcare protection for you and your family.",
      description:
        "Access dependable medical insurance solutions designed to protect you and your loved ones from the financial burden of unexpected healthcare costs.",
      services: [
        {
          title: "Individual & Family Medical",
          description:
            "Protect yourself and your family with flexible medical cover designed around your healthcare needs.",
          details:
            "Our individual and family medical solutions provide financial protection against eligible healthcare expenses, giving you access to quality medical care without placing unnecessary pressure on your finances. Cover can be structured around your household, healthcare needs, and preferred level of protection.",
          highlights: [
            "Inpatient & outpatient cover options",
            "Individual and family plans",
            "Access to a network of healthcare providers",
          ],
          icon: LuHeartPulse,
        },
      ],
    },

    {
      id: "life",
      eyebrow: "Life Insurance",
      title: "Protect the people and plans that matter most.",
      description:
        "Life insurance gives your loved ones financial protection while helping you plan confidently for major milestones and long-term obligations.",
      services: [
        {
          title: "Term Life Insurance",
          description:
            "Provide affordable financial protection for your loved ones over a defined period.",
          details:
            "Term life insurance provides a financial benefit to your nominated beneficiaries if you pass away during the policy term. It can be used to protect family income, outstanding obligations, children's needs, and other important financial commitments.",
          highlights: [
            "Affordable life protection",
            "Flexible policy terms",
            "Financial protection for dependants",
          ],
          icon: LuShieldCheck,
        },
        {
          title: "Whole Life & Endowment",
          description:
            "Combine long-term financial protection with structured savings and future financial planning.",
          details:
            "Whole life and endowment solutions are designed for clients seeking longer-term protection, with product structures that may also provide savings or maturity benefits. They can form part of a broader strategy for wealth preservation and financial security.",
          highlights: [
            "Long-term financial protection",
            "Structured savings opportunities",
            "Supports long-term financial planning",
          ],
          icon: LuUmbrella,
        },
        {
          title: "Education Savings Plan",
          description:
            "Start planning today for the education and opportunities you want to provide for your children.",
          details:
            "An education savings plan helps you build funds systematically toward future education expenses. By starting early and contributing consistently, you can create a dedicated financial foundation for school, college, or university costs.",
          highlights: [
            "Disciplined long-term saving",
            "Designed around education goals",
            "Helps prepare for future education costs",
          ],
          icon: LuGraduationCap,
        },
        {
          title: "Credit Life Protection",
          description:
            "Protect your family from the burden of outstanding loans and credit obligations.",
          details:
            "Credit life protection is designed to settle eligible outstanding credit obligations following the death or other covered event affecting the insured borrower. It helps ensure that personal debts do not unnecessarily become a financial burden for your family.",
          highlights: [
            "Protection for outstanding credit",
            "Helps safeguard family finances",
            "Suitable for qualifying loans and obligations",
          ],
          icon: LuBadgeDollarSign,
        },
      ],
    },

    {
      id: "general-insurance",
      eyebrow: "General Insurance",
      title: "Protection for the assets and experiences that matter.",
      description:
        "From your vehicle and home to personal accidents and travel, our general insurance solutions help you manage life's unexpected risks.",
      services: [
        {
          title: "Private Motor Insurance",
          description:
            "Protect your vehicle and drive with confidence knowing you're covered when the unexpected happens.",
          details:
            "Our private motor insurance solutions provide protection against eligible risks including accidental damage, theft, fire, and third-party liability. We help you select cover that reflects your vehicle, driving needs, and level of protection required.",
          highlights: [
            "Comprehensive & third-party options",
            "Protection against eligible vehicle risks",
            "Claims support when you need it",
          ],
          icon: LuCar,
        },
        {
          title: "Home Insurance",
          description:
            "Protect your home, belongings, and the value you've worked hard to build.",
          details:
            "Home insurance can protect both the building itself and the contents within it against covered risks. From household possessions and fixtures to the structure of your property, we help you build protection around what matters most.",
          highlights: [
            "Building & contents protection",
            "Protection against covered property risks",
            "Flexible cover based on your needs",
          ],
          icon: LuHouse,
        },
        {
          title: "Personal Accident Insurance",
          description:
            "Protect yourself financially against the unexpected impact of accidental injury or disability.",
          details:
            "Personal accident insurance provides financial support following covered accidental injuries, disability, or death. It can help protect your income and provide additional financial security when an unexpected accident affects your ability to work or meet everyday obligations.",
          highlights: [
            "Accidental injury protection",
            "Disability & death benefits",
            "Additional financial security",
          ],
          icon: LuShieldCheck,
        },
        {
          title: "Travel Insurance",
          description:
            "Travel with greater confidence knowing you're protected against unexpected events along the way.",
          details:
            "Travel insurance provides protection against eligible medical emergencies, travel disruptions, baggage-related losses, and other unforeseen events during your journey. We help you select cover suited to your destination and travel plans.",
          highlights: [
            "Emergency medical protection",
            "Travel disruption & baggage cover",
            "Travel assistance when you need it",
          ],
          icon: LuPlane,
        },
      ],
    },

    {
      id: "investments",
      eyebrow: "Savings & Investments",
      title: "Make your money work for your future.",
      description:
        "Whether you're building wealth, growing your capital, or planning for significant future goals, our investment solutions are designed around your financial ambitions.",
      services: [
        {
          title: "Unit Trust Investments",
          description:
            "Access professionally managed investment portfolios designed to help you grow your wealth over time.",
          details:
            "Unit trusts allow investors to participate in professionally managed portfolios, providing access to a diversified range of investments. We help you understand your options and select an approach aligned with your goals, timeframe, and risk profile.",
          highlights: [
            "Professionally managed portfolios",
            "Diversification across investments",
            "Suitable for different financial goals",
          ],
          icon: LuTrendingUp,
        },
        {
          title: "Wealth Management",
          description:
            "Build, manage, and preserve your wealth with a strategy designed around your complete financial picture.",
          details:
            "Our wealth management approach looks beyond individual investments to understand your broader financial position, objectives, and risk tolerance. We help develop a coordinated strategy for growing and preserving wealth as your circumstances evolve.",
          highlights: [
            "Personalized wealth strategy",
            "Portfolio review & management",
            "Long-term wealth preservation",
          ],
          icon: LuChartNoAxesCombined,
        },
        {
          title: "Structured Investment Plans",
          description:
            "Turn specific financial goals into a disciplined investment strategy built around your timeline and objectives.",
          details:
            "Structured investment plans provide a focused approach to accumulating capital for defined financial objectives. We help align contributions, investment choices, time horizons, and risk considerations with the outcomes you want to achieve.",
          highlights: [
            "Goals-based investment strategy",
            "Structured contribution approach",
            "Regular progress reviews",
          ],
          icon: LuArrowUpRight,
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
            "Build a dedicated retirement fund through structured contributions made throughout your working years.",
          details:
            "A Personal Pension Plan provides a disciplined way to accumulate retirement savings over time. Your contributions are invested with your long-term retirement objectives in mind, helping you build financial independence for the years ahead.",
          highlights: [
            "Flexible contribution options",
            "Long-term retirement savings",
            "Retirement planning support",
          ],
          icon: LuWalletCards,
        },
        {
          title: "Annuities & Retirement Drawdowns",
          description:
            "Turn your accumulated retirement savings into a sustainable source of income when you retire.",
          details:
            "Annuities and retirement drawdown solutions help you manage the transition from accumulating retirement wealth to using it. We help you consider your income needs, longevity, liquidity, and desired lifestyle when planning how your retirement savings will support you.",
          highlights: [
            "Structured retirement income",
            "Flexible drawdown considerations",
            "Designed around your retirement needs",
          ],
          icon: LuLandmark,
        },
      ],
    },
  ],

  corporate: [
    {
      id: "employee-benefits",
      eyebrow: "Employee Benefits",
      title: "Protect your people and strengthen your benefits package.",
      description:
        "Give your employees meaningful financial and healthcare protection through benefits designed to support wellbeing, retention, and long-term security.",
      services: [
        {
          title: "Group Medical Insurance",
          description:
            "Give your employees and their families access to dependable healthcare protection as part of a competitive benefits package.",
          details:
            "Group medical insurance helps organizations provide employees with access to healthcare while reducing the financial impact of illness and medical treatment. Plans can be structured around workforce size, employee needs, and available benefits budgets.",
          highlights: [
            "Inpatient & outpatient options",
            "Employee & dependant cover",
            "Flexible benefit structures",
          ],
          icon: LuHeartPulse,
        },
        {
          title: "Group Life & Last Expense",
          description:
            "Provide employees and their families with financial support when they need it most.",
          details:
            "Group life insurance provides financial protection to nominated beneficiaries following the death of an insured employee. Last-expense benefits can provide additional support toward eligible funeral and related expenses, helping families navigate difficult circumstances.",
          highlights: [
            "Financial protection for beneficiaries",
            "Last-expense benefit options",
            "Strengthens employee welfare",
          ],
          icon: LuUsers,
        },
        {
          title: "Group Personal Accident & WIBA",
          description:
            "Protect your workforce against financial consequences arising from covered workplace and accidental risks.",
          details:
            "Group Personal Accident and WIBA-related solutions help organizations manage employee risks arising from workplace injuries, accidents, disability, or death, subject to applicable policy terms and statutory requirements.",
          highlights: [
            "Workplace injury protection",
            "Accidental disability & death benefits",
            "Supports employee risk management",
          ],
          icon: LuShieldCheck,
        },
        {
          title: "Corporate Pension Schemes",
          description:
            "Build a stronger employee benefits package with structured retirement savings for your workforce.",
          details:
            "Corporate pension schemes provide employees with a structured way to build retirement savings through employer and employee contributions. We support organizations with scheme design, administration, and ongoing management.",
          highlights: [
            "Structured employee retirement savings",
            "Employer contribution options",
            "Ongoing scheme administration",
          ],
          icon: LuLandmark,
        },
      ],
    },

    {
      id: "commercial-assets",
      eyebrow: "Commercial Property & Assets",
      title: "Protect the assets that keep your business moving.",
      description:
        "From buildings and equipment to vehicles and goods in transit, our commercial insurance solutions help protect the physical foundation of your business.",
      services: [
        {
          title: "Property All Risks & Fire",
          description:
            "Protect your commercial buildings, equipment, stock, and other business assets against covered property risks.",
          details:
            "Commercial property insurance helps businesses protect physical assets against specified risks such as fire, theft, accidental damage, and other insured events. Cover can be structured around the nature and value of your business property.",
          highlights: [
            "Commercial building protection",
            "Equipment & stock cover",
            "Fire and specified risk protection",
          ],
          icon: LuBuilding2,
        },
        {
          title: "Commercial Motor & Fleet Insurance",
          description:
            "Keep your business vehicles and drivers protected with cover built around commercial operations.",
          details:
            "Whether you operate a small number of business vehicles or a larger fleet, commercial motor insurance provides protection against eligible vehicle risks and liabilities. We help businesses structure fleet cover that supports operational continuity.",
          highlights: [
            "Single vehicle & fleet options",
            "Commercial vehicle protection",
            "Dedicated claims support",
          ],
          icon: LuCar,
        },
        {
          title: "Business Interruption",
          description:
            "Protect your business's financial continuity when an insured event disrupts normal operations.",
          details:
            "Business interruption insurance helps eligible businesses recover from the financial consequences of an insured event that temporarily affects operations. Depending on the policy, cover can support lost income and continuing business expenses during the recovery period.",
          highlights: [
            "Business income protection",
            "Support for continuing expenses",
            "Helps accelerate financial recovery",
          ],
          icon: LuRefreshCw,
        },
        {
          title: "Goods in Transit & Marine",
          description:
            "Protect your goods and cargo while they move through your supply chain.",
          details:
            "Goods in transit and marine insurance provides protection against covered loss or damage to cargo while being transported. Solutions can support businesses involved in local distribution, imports, exports, logistics, and international trade.",
          highlights: [
            "Cargo protection in transit",
            "Local & international movement",
            "Support for logistics and trade operations",
          ],
          icon: LuShip,
        },
      ],
    },

    {
      id: "liability-specialty",
      eyebrow: "Liability & Specialty Risk",
      title: "Prepare your business for risks you can't always predict.",
      description:
        "Specialist risk solutions help protect your business against third-party claims, professional exposures, management liabilities, cyber incidents, and other complex risks.",
      services: [
        {
          title: "Public & Product Liability",
          description:
            "Protect your business against eligible third-party claims arising from your premises, operations, or products.",
          details:
            "Public and product liability insurance helps businesses manage financial exposure arising from claims involving third-party bodily injury or property damage connected to business operations or products supplied.",
          highlights: [
            "Third-party liability protection",
            "Public premises & operations risks",
            "Product-related liability protection",
          ],
          icon: LuScale,
        },
        {
          title: "Professional Indemnity",
          description:
            "Protect your professional practice against financial claims arising from alleged errors, omissions, or negligence.",
          details:
            "Professional indemnity insurance is designed for businesses and professionals whose clients may suffer financial loss following an alleged professional error, omission, negligent act, or failure in the delivery of professional services.",
          highlights: [
            "Protection against professional claims",
            "Errors & omissions cover",
            "Suitable for professional service providers",
          ],
          icon: LuBriefcaseBusiness,
        },
        {
          title: "Directors & Officers Insurance",
          description:
            "Give your leadership team an additional layer of protection against claims arising from management decisions.",
          details:
            "Directors and Officers insurance protects eligible directors and senior officers against certain claims arising from decisions and actions taken in their managerial capacity. It can help organizations attract and retain capable leadership while managing corporate governance risks.",
          highlights: [
            "Protection for directors & officers",
            "Management liability protection",
            "Supports stronger corporate governance",
          ],
          icon: LuUserRoundCheck,
        },
        {
          title: "Cyber & Crime Risk",
          description:
            "Strengthen your financial resilience against cyber incidents, fraud, theft, and other emerging business risks.",
          details:
            "Cyber and crime risk solutions help businesses manage financial exposures arising from covered cyber incidents, fraud, theft, data-related events, and other forms of digital or criminal activity. Cover can be tailored to the organization's risk environment.",
          highlights: [
            "Cyber incident protection",
            "Crime & fraud risk solutions",
            "Support for digital business risks",
          ],
          icon: LuShieldAlert,
        },
      ],
    },

    {
      id: "corporate-financial",
      eyebrow: "Corporate Financial Services",
      title: "Protect your financial strength and plan for what comes next.",
      description:
        "Our corporate financial solutions help businesses protect critical relationships, manage financial obligations, and make better use of their capital.",
      services: [
        {
          title: "Key Person Protection",
          description:
            "Protect your business against the financial impact of losing an individual whose expertise is critical to your success.",
          details:
            "Key person protection provides financial support to a business following the death or covered loss of a critical employee, executive, or business leader. It can help the organization manage disruption, recruitment, transition costs, and lost business opportunities.",
          highlights: [
            "Protects against key-person dependency",
            "Supports business continuity",
            "Helps fund transition and replacement costs",
          ],
          icon: LuUserRoundCog,
        },
        {
          title: "Corporate Credit Life",
          description:
            "Help protect your business against eligible outstanding credit obligations following the loss of a key borrower.",
          details:
            "Corporate credit life solutions are designed to provide financial protection against qualifying corporate credit obligations following the death or another covered event affecting an insured borrower. This can help reduce pressure on the business and its remaining stakeholders.",
          highlights: [
            "Protection for qualifying corporate debt",
            "Supports financial continuity",
            "Reduces debt-related business exposure",
          ],
          icon: LuBadgeDollarSign,
        },
        {
          title: "Treasury & Wealth Management",
          description:
            "Put your company's capital to disciplined use while balancing growth, liquidity, and risk.",
          details:
            "Our treasury and wealth management solutions help businesses manage surplus cash, reserves, and investments within a structured financial strategy. We consider liquidity requirements, risk appetite, investment objectives, and the broader financial needs of the organization.",
          highlights: [
            "Liquidity-aware investment strategy",
            "Corporate portfolio management",
            "Regular financial performance reporting",
          ],
          icon: LuTrendingUp,
        },
      ],
    },
  ],
};


function ServiceSelector({ categories, selectedCategory, selectedService, onCategoryChange, onServiceChange }: {
  categories: ServiceCategory[]; selectedCategory: string; selectedService: string;
  onCategoryChange: (id: string) => void; onServiceChange: (title: string) => void;
}) {
  const category = categories.find( (item) => item.id === selectedCategory );

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div>
        <label htmlFor="service-category" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]" >
          Service Category
        </label>
        
        <div className="relative group">
          <select
            id="service-category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full appearance-none cursor-pointer rounded-xl border border-[#102E50]/15 bg-white px-5 py-4 font-sans text-sm text-[#102E50] focus:outline-none transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_8px_20px_-6px_rgba(16,46,80,0.1)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
          >
            {categories.map((item) => ( <option key={item.id} value={item.id} className="w-full rounded-lg px-4 py-3 text-left font-sans text-sm text-[#102E50] transition-colors duration-200 hover:bg-[#102E50]/5 checked:bg-[var(--accent)]/20 checked:text-[var(--accent2)]"> {item.eyebrow} </option> ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
            <LuChevronsDown size={20} className="text-[var(--secondary)] transition-all duration-300 group-hover:text-[var(--primary)] group-hover:scale-110" />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="specific-service"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
        >
          Specific Service
        </label>
        <div className="relative group">
          <select
            id="specific-service"
            value={selectedService}
            onChange={(e) => onServiceChange(e.target.value)}
            className="w-full appearance-none cursor-pointer rounded-xl border border-[#102E50]/15 bg-white px-5 py-4 font-sans text-sm text-[#102E50] outline-none transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_8px_20px_-6px_rgba(16,46,80,0.1)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
          > 
            {category?.services.map((service) => ( <option key={service.title} value={service.title} className="w-full rounded-lg px-4 py-3 text-left font-sans text-sm text-[#102E50] transition-colors duration-200 hover:bg-[#102E50]/5 checked:bg-[var(--accent)]/20 checked:text-[var(--accent2)]"> {service.title} </option> ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
            <LuChevronsDown size={20} className="text-[var(--secondary)] transition-all duration-300 group-hover:text-[var(--primary)] group-hover:scale-110" />
          </div>
        </div>
      </div>

    </div>
  );
}

function SelectedService({ service, category, onOpenBooking }: { service: Service; category: ServiceCategory; onOpenBooking: () => void }) {
  const Icon = service.icon;

  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#102E50]/10 bg-white shadow-xl">
      <div className="grid lg:grid-cols-[1fr_0.8fr]">
        <div className="p-7 sm:p-10 lg:p-12">
          <div className="mb-7 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#102E50] text-[#F5C45E]">
              <Icon size={26} strokeWidth={1.6} />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                {category.eyebrow}
              </p>

              <h3 className="font-serif text-2xl font-semibold leading-tight text-[#102E50] sm:text-3xl">
                {service.title}
              </h3>
            </div>

          </div>

          <p className="mb-5 font-sans text-base leading-7 text-[var(--secondary)]">
            {service.description}
          </p>

          <p className="font-sans text-sm leading-7 text-gray-600">
            {service.details}
          </p>

          <button
            type="button"
            onClick={onOpenBooking}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#102E50] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:shadow-xl"
          >
            Start a Conversation
            <LuArrowUpRight size={15} />
          </button>

        </div>


        {/* Highlights */}
        <div className="bg-[#102E50] p-7 text-white sm:p-10 lg:p-12">

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C45E]">
            Key Highlights
          </p>

          <ul className="space-y-5">

            {service.highlights.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-4"
              >
                <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-[#F5C45E]" />

                <span className="font-sans text-sm leading-6 text-white/85">
                  {point}
                </span>
              </li>
            ))}

          </ul>

        </div>

      </div>
    </div>
  );
}

export default function Services() {

  const [formVisible, setFormVisible] = useState(false);
  const [active, setActive] = useState<Audience>("individual");

  const categories = serviceData[active];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedService, setSelectedService] = useState(categories[0].services[0].title);

  const currentCategory = useMemo( 
    () => categories.find((category) => category.id === selectedCategory ) ?? categories[0], [categories, selectedCategory]
  );

  const currentService = useMemo(
    () => currentCategory.services.find((service) => service.title === selectedService ) ?? currentCategory.services[0], [currentCategory, selectedService]
  );

  const handleCategoryChange = (id: string) => {

    const category = categories.find( (item) => item.id === id );

    if (!category) return;

    setSelectedCategory(id);
    setSelectedService( category.services[0].title );
  };

  const changeAudience = (audience: Audience) => {

    const nextCategories = serviceData[audience];

    setActive(audience);
    setSelectedCategory( nextCategories[0].id );

    setSelectedService( nextCategories[0].services[0].title );
  };

  const handleBookingOpen = () => { setFormVisible(true)};


  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-none">
      <section className="relative flex min-h-screen snap-start items-center overflow-hidden bg-[var(--primary)]/10 px-6 sm:px-10 lg:px-20">
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full border border-[var(--primary)]/30 lg:h-[600px] lg:w-[600px]" />
        <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full border border-[var(--accent)]/50 lg:h-[700px] lg:w-[700px]" />
        <div className="flex w-full flex-col items-center pt-20">
          <h1 className="max-w-4xl text-shadow-sm font-serif text-4xl font-semibold leading-tight text-[var(--accent)] sm:text-5xl lg:text-7xl">
            Our Services
          </h1>

          <p className="mt-20 max-w-2xl text-center font-sans text-sm leading-8 tracking-wider text-[var(--secondary)] sm:text-lg lg:text-lg">
            From protecting your health and assets to building wealth and
            planning for retirement, we&apos;re here to help you discover
            endless financial possibilities.
          </p>

          <h2 className="mt-10 text-shadow-xs text-center font-serif text-xl font-semibold text-[var(--accent)] sm:text-3xl">
            Every stage of your financial journey, covered.
          </h2>
        </div>
      </section>

      <section id="services" className="relative snap-start bg-[var(--background)] px-6 py-24 sm:px-10 lg:px-20" >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="mb-4 font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
              What We Offer
            </h3>

            <p className="font-sans text-sm leading-8 text-gray-600 sm:text-lg">
              Explore our solutions by selecting a service category and then choosing the specific solution that matches your needs.
            </p>

          </div>

          <div className="mb-12 flex justify-center">
            <div className={`flex rounded-full shadow-xs bg-[var(--secondary)]/10 p-1 hover:bg-[var(--secondary)]/20`}>
              <button
                type="button"
                onClick={() => changeAudience("individual") }
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                  active === "individual"
                    ? "bg-[var(--primary)] text-white shadow-lg" : "text-[var(--secondary)] hover:text-[var(--primary)]"
                }`}
              >
                Individuals
              </button>

              <button
                type="button"
                onClick={() => changeAudience("corporate") }
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                  active === "corporate"
                    ? "bg-[#102E50] text-white shadow-lg" : "text-[#102E50] hover:text-[var(--secondary)]"
                }`}
              >
                Businesses
              </button>
            </div>
          </div>

          <ServiceSelector
            categories={categories}
            selectedCategory={selectedCategory}
            selectedService={selectedService}
            onCategoryChange={handleCategoryChange}
            onServiceChange={setSelectedService}
          />

          <SelectedService
            category={currentCategory}
            service={currentService}
            onOpenBooking={handleBookingOpen}
          />
        </div>
      </section>

      <section id="contact" className="relative snap-start overflow-hidden bg-[#F5C45E] px-6 py-24 sm:px-10 lg:px-20" >
        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--background)]">
            Your Future Starts Today
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[var(--primary)] sm:text-5xl">
            Endless Financial Possibilities.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#102E50]/70 sm:text-lg">
            Let&apos;s build a financial strategy that protects what
            you&apos;ve worked for and creates opportunities for what comes
            next.
          </p>

          <button
            type="button"
            onClick={handleBookingOpen}
            className="mt-8 inline-flex rounded-full bg-[#102E50] px-6 py-3 text-xs text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:shadow-xl sm:px-8 sm:py-4"
          >
            Start a Conversation
          </button>
        </div>
      </section>

      {formVisible && (
        <BookingForm
          setFormVisible={setFormVisible}
        />
      )}

    </main>
  );
}