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
  LuBadgeDollarSign,
  LuBriefcaseBusiness,
  LuBuilding2,
  LuChartNoAxesCombined,
  LuGraduationCap,
  LuHouse,
  LuPlane,
  LuRefreshCw,
  LuScale,
  LuShieldAlert,
  LuShieldCheck,
  LuShip,
  LuUmbrella,
  LuUserRoundCheck,
  LuUserRoundCog,
  LuUsers,
} from "react-icons/lu";

import { useState } from "react";
import BookingForm from "@/components/utility/bookingForm";


// ============================================================
// TYPES
// ============================================================

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

type ServiceTab =
  | "Medical"
  | "Life"
  | "General Insurance"
  | "Investments"
  | "Pension"
  | "Employee Benefits"
  | "Commercial Assets"
  | "Liability & Specialty"
  | "Corporate Financial";


// ============================================================
// SERVICE DATA
// ============================================================

const serviceData: Record<Audience, ServiceCategory[]> = {
  // ==========================================================
  // INDIVIDUAL
  // ==========================================================

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


  // ==========================================================
  // CORPORATE
  // ==========================================================

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


// ============================================================
// TAB CONFIGURATION
// ============================================================

const individualTabs: {
  label: ServiceTab;
  categoryId: string;
}[] = [
  {
    label: "Medical",
    categoryId: "medical",
  },
  {
    label: "Life",
    categoryId: "life",
  },
  {
    label: "General Insurance",
    categoryId: "general-insurance",
  },
  {
    label: "Investments",
    categoryId: "investments",
  },
  {
    label: "Pension",
    categoryId: "pension",
  },
];

const corporateTabs: {
  label: ServiceTab;
  categoryId: string;
}[] = [
  {
    label: "Employee Benefits",
    categoryId: "employee-benefits",
  },
  {
    label: "Commercial Assets",
    categoryId: "commercial-assets",
  },
  {
    label: "Liability & Specialty",
    categoryId: "liability-specialty",
  },
  {
    label: "Corporate Financial",
    categoryId: "corporate-financial",
  },
];


// ============================================================
// CATEGORY HEADER
// ============================================================

function CategoryHeader({
  category,
}: {
  category: ServiceCategory;
}) {
  return (
    <div className="pb-2">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        {category.eyebrow}
      </p>

      <h3 className="mb-3 font-serif text-xl font-semibold text-[#102E50]">
        {category.title}
      </h3>

      <p className="font-sans text-sm leading-7 text-gray-600 line-clamp-4">
        {category.description}
      </p>
    </div>
  );
}


// ============================================================
// SERVICES TABS
// ============================================================

function ServicesTabs({
  tabs,
  activeTab,
  onTabClick,
}: {
  tabs: {
    label: ServiceTab;
    categoryId: string;
  }[];
  activeTab: ServiceTab;
  onTabClick: (tab: ServiceTab) => void;
}) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.categoryId}
          type="button"
          onClick={() => onTabClick(tab.label)}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out ${
            activeTab === tab.label
              ? "bg-[var(--primary)] text-white shadow-lg"
              : "bg-[var(--secondary)]/20 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}


// ============================================================
// SERVICE CARD
// ============================================================

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
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#102E50]/10 bg-white p-6 text-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Gold accent */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-[#F5C45E] transition-all duration-500 group-hover:w-full" />

      {/* Details toggle */}
      <button
        type="button"
        onClick={onOpenDetails}
        aria-label={`More details about ${service.title}`}
        title="More details"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#102E50]/15 text-[#102E50] transition-colors duration-300 hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
      >
        <LuPlus size={16} />
      </button>

      {/* Icon */}
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#102E50] text-[#F5C45E] transition-all duration-500 group-hover:bg-[#F5C45E] group-hover:text-[#102E50] sm:h-12 sm:w-12">
        <Icon size={22} strokeWidth={1.7} />
      </div>

      {/* Title */}
      <h3 className="mb-2 pr-8 font-serif text-lg font-semibold text-[#102E50] xs:text-xl">
        <button
          type="button"
          onClick={onOpenBooking}
          className="block w-full text-left line-clamp-2 transition-colors duration-300 hover:text-[var(--secondary)]"
        >
          {service.title}
        </button>
      </h3>

      {/* Description */}
      <p className="mb-5 font-sans text-[13px] leading-6 text-[var(--secondary)] line-clamp-3">
        {service.description}
      </p>

      {/* Learn more */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--secondary)]"
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


// ============================================================
// SERVICE DETAIL OVERLAY
// ============================================================

function ServiceDetailOverlay({
  service,
  onClose,
  onOpenBooking,
}: {
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
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
      >

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-[var(--secondary)] transition-colors hover:bg-[var(--secondary)]/10 hover:text-[#102E50]"
        >
          <LuX size={18} />
        </button>

        {/* Header */}
        <div className="mb-5 flex flex-row items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102E50] text-[#F5C45E]">
            <Icon size={24} strokeWidth={1.7} />
          </div>

          <h3 className="max-w-xs font-serif text-xl font-semibold text-[var(--accent)]">
            {service.title}
          </h3>
        </div>

        {/* Details */}
        <p className="mb-5 font-sans text-sm leading-7 text-[var(--secondary)]">
          {service.details}
        </p>

        {/* Highlights */}
        <ul className="mb-8 space-y-3">
          {service.highlights.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 font-sans text-sm text-[var(--primary)]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />

              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#102E50] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[var(--secondary)]"
        >
          Start a Conversation
        </button>
      </div>
    </div>
  );
}


// ============================================================
// MAIN SERVICES PAGE
// ============================================================

export default function Services() {
  const [formVisible, setFormVisible] = useState(false);

  const [active, setActive] =
    useState<Audience>("individual");

  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const [activeTab, setActiveTab] =
    useState<ServiceTab>("Medical");


  // ----------------------------------------------------------
  // Current tabs based on audience
  // ----------------------------------------------------------

  const tabs =
    active === "individual"
      ? individualTabs
      : corporateTabs;


  // ----------------------------------------------------------
  // Find category associated with selected tab
  // ----------------------------------------------------------

  const selectedTabConfig = tabs.find(
    (tab) => tab.label === activeTab
  );

  const categories = serviceData[active].filter(
    (category) =>
      category.id === selectedTabConfig?.categoryId
  );


  // ----------------------------------------------------------
  // Booking
  // ----------------------------------------------------------

  const handleBookingOpen = () => {
    setSelectedService(null);
    setFormVisible(true);
  };


  // ----------------------------------------------------------
  // Audience switch
  // ----------------------------------------------------------

  const changeAudience = (audience: Audience) => {
    setActive(audience);
    setSelectedService(null);

    if (audience === "individual") {
      setActiveTab("Medical");
    } else {
      setActiveTab("Employee Benefits");
    }
  };


  // ----------------------------------------------------------
  // Tab switch
  // ----------------------------------------------------------

  const changeTab = (tab: ServiceTab) => {
    setActiveTab(tab);
    setSelectedService(null);
  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-none">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-screen snap-start items-center overflow-hidden bg-[var(--foreground)]/8 px-6 sm:px-10 lg:px-20">

        {/* Decorative circles */}
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full border border-[var(--primary)]/30 lg:h-[600px] lg:w-[600px]" />

        <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full border border-[var(--accent)]/50 lg:h-[700px] lg:w-[700px]" />

        <div className="flex w-full flex-col items-center pt-20">

          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-[var(--accent)] sm:text-6xl lg:text-7xl">
            Our Services
          </h1>

          <p className="mt-20 max-w-2xl text-center font-sans text-sm leading-8 tracking-wider text-[var(--secondary)] sm:text-xl lg:text-lg">
            From protecting your health and assets to building wealth and
            planning for retirement, we&apos;re here to help you discover
            endless financial possibilities.
          </p>

          <h2 className="mt-10 text-center font-serif text-xl font-semibold text-[var(--accent)] sm:text-4xl">
            Every stage of your financial journey, covered.
          </h2>

        </div>
      </section>


      {/* ======================================================
          ALL SERVICES
      ====================================================== */}

      <section
        id="services"
        className="relative snap-start bg-[var(--background)] px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-10 max-w-3xl">

            <h3 className="mb-4 font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
              What We Offer
            </h3>

            <p className="max-w-4xl font-sans text-sm leading-8 text-gray-600 sm:text-lg">
              Explore our range of financial, insurance, investment, and
              retirement solutions. Select a category below to discover
              the solutions available to you.
            </p>

          </div>


          {/* ==================================================
              INDIVIDUAL / CORPORATE TOGGLE
          ================================================== */}

          <div className="mb-12 flex justify-center">

            <div className="flex rounded-full bg-[var(--secondary)]/20 p-1">

              <button
                type="button"
                onClick={() => changeAudience("individual")}
                className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out ${
                  active === "individual"
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-[var(--secondary)] hover:text-[var(--primary)]"
                }`}
              >
                Individual
              </button>

              <button
                type="button"
                onClick={() => changeAudience("corporate")}
                className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out ${
                  active === "corporate"
                    ? "bg-[#102E50] text-white shadow-lg"
                    : "text-[#102E50] hover:text-[var(--secondary)]"
                }`}
              >
                Corporate
              </button>

            </div>
          </div>


          {/* ==================================================
              SERVICE CATEGORY TABS
          ================================================== */}

          <ServicesTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={changeTab}
          />


          {/* ==================================================
              SELECTED SERVICE CATEGORY
          ================================================== */}

          <div className="grid grid-cols-1 gap-10">

            {categories.map((category) => (

              <div
                key={`${active}-${category.id}`}
                className="flex flex-col gap-8"
              >

                {/* Category introduction */}
                <CategoryHeader category={category} />


                {/* Service cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                  {category.services.map((service, index) => (

                    <ServiceCard
                      key={`${active}-${category.id}-${index}`}
                      service={service}
                      onOpenBooking={handleBookingOpen}
                      onOpenDetails={() =>
                        setSelectedService(service)
                      }
                    />

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ======================================================
          CONTACT / CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative snap-start overflow-hidden bg-[#F5C45E] px-6 py-24 sm:px-10 lg:px-20"
      >

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--background)]">
            Your Future Starts Today
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[var(--secondary)] sm:text-5xl">
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


      {/* ======================================================
          SERVICE DETAIL MODAL
      ====================================================== */}

      {selectedService && (
        <ServiceDetailOverlay
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenBooking={handleBookingOpen}
        />
      )}


      {/* ======================================================
          BOOKING FORM MODAL
      ====================================================== */}

      {formVisible && (
        <BookingForm
          setFormVisible={setFormVisible}
        />
      )}

    </main>
  );
}