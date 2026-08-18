"use client";

import Link from "next/link";
import { useState } from "react";
import BookingForm from "./utility/bookingForm";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const [formVisible, setFormVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItems = [
    {
      name: "Insurance",
      link_to: "#",
      dropdown: [
        { name: "Insurance", link_to: "/insurance" },
        { name: "Insurance 1", link_to: "/insurance" },
      ],
    },
    {
      name: "Investments",
      link_to: "#",
      dropdown: [
        { name: "Investment", link_to: "/investments" },
        { name: "Investment 2", link_to: "/investments" },
      ],
    },
    {
      name: "Pension",
      link_to: "#",
      dropdown: [
        { name: "Pension", link_to: "/pension" },
        { name: "Pension 1", link_to: "/pension" },
      ],
    },
    {
      name: "Book Now",
      link_to: "#booking-form",
    },
  ];

  const handleBookingOpen = () => {
    setFormVisible(true);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {setMobileMenuOpen((prev) => !prev)};
  const handleNavigation = () => { setMobileMenuOpen(false)};

  const NavItem = NavItems.map((item, index) => {
    // =========================   DROP DOWN ITEMS  =========================

    if (item.dropdown) {
      return (
        <div key={index} className="relative w-full">
          <select key={index} defaultValue=""
            onChange={(e) => {if (e.target.value) { window.location.href = e.target.value }}}
            className={`w-full appearance-none cursor-pointer bg-transparent font-medium pb-1 pr-8 focus:outline-none ${mobileMenuOpen ? 'p-0 hover:bg-[var(--accent)] hover:text-[var(--background)] py-4 px-6 justify-center pb-4' : 'bg-[var(--background)]'}`}
          >

            {item.dropdown.map((opt, idx) => (
              <option key={idx} value={opt.link_to} className={`${mobileMenuOpen ? 'bg-[var(--background)] text-[var(--primary)] hover:bg-[var(--primary)]' : 'bg-[var(--background)] text-[var(--accent)]'}`}  >
                {opt.name}
              </option>
            ))}
          </select>
          <LuChevronDown size={15} className={` pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${mobileMenuOpen ? 'text-[var(--primary)]' : 'text-[var(--background)]'}`} />
        </div>

      );
    }

    // =========================   BOOK NOW   =========================
    if (item.name === "Book Now") {
      return (
        <button key={index} type="button" onClick={handleBookingOpen}
          className={`${mobileMenuOpen ? ' py-3 bg-[var(--primary)] text-[var(--background)]' : 'pb-1'} w-full relative inline-block cursor-pointer font-medium text-[var(--accent)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#F5C45E] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:text-[#F5C45E]`}
        >
          {item.name}
        </button>
      );
    }

    return null;
  });

  return (
    <>
      {/* =========================    NAVBAR      ========================= */}
      <header className=" fixed top-0 left-0 z-50 w-full px-6 sm:px-10 py-6 sm:py-10 text-white bg-[var(--primary)] sm:bg-transparent ">
        <div className="flex w-full items-center justify-between">
          {/* =========================         LOGO          ========================= */}
          <Link href="/" onClick={handleNavigation} className="flex items-center gap-2"  >
            <img src="/header_logo.png" alt="Franto Insurance" className=" mt-2 w-6 h-auto sm:w-10 rounded-lg object-cover drop-shadow-lg " />
          </Link>
          {/* =========================              DESKTOP NAVIGATION          ========================= */}
          <nav className=" hidden sm:flex flex-row items-center gap-6 rounded-full bg-[#102E50] px-8 py-3 text-sm font-medium backdrop-blur-md shadow-lg " >
            {NavItem}
          </nav>

          {/* =========================              MOBILE MENU BUTTON          ========================= */}
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className=" flex sm:hidden cursor-pointer items-center justify-center text-[var(--background)] transition-all duration-300 hover:scale-110 hover:text-[var(--accent)] "
            aria-label={ mobileMenuOpen ? "Close navigation" : "Open navigation" }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? ( <LuX size={32} /> ) : ( <LuMenu size={32} /> )}
          </button>
        </div>

        {/* =========================        MOBILE NAVIGATION        ========================= */}
        <div className={` absolute left-0 top-full w-full overflow-hidden bg-[var(--background)] backdrop-blur-md shadow-lg sm:hidden transition-all duration-300 ease-in-out ${ mobileMenuOpen ? "block" : "hidden" }`}>
          <nav className=" flex flex-col items-center pb-8 text-[var(--primary)] " >
            {NavItem}
          </nav>
        </div>
      </header>

      {/* =========================       BOOKING FORM MODAL      ========================= */}
      {formVisible && ( <BookingForm setFormVisible={setFormVisible} /> )}
    </>
  );
}

export default Navbar;