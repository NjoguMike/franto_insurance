"use client";

import Link from "next/link";
import { useState } from "react";
import BookingForm from "./utility/bookingForm";
import { LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const [formVisible, setFormVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItems = [
    {
      name: "Home",
      link_to: "/",
    },
    {
      name: "Services",
      link_to: "/services",
    },
    {
      name: "About Us",
      link_to: "/about",
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

    if (item.name === "Book Now") {
      return (
        <button key={index} type="button" onClick={handleBookingOpen}
          className={`${mobileMenuOpen ? ' py-3 bg-[var(--primary)] text-[var(--background)]' : 'p-1 pl-3 min-w-max'} w-full relative inline-block cursor-pointer font-medium text-[var(--accent)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#F5C45E] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-80 hover:text-[#F5C45E]`}
        >
          {item.name}
        </button>
      );
    }

    return (
        <Link key={index} href={item.link_to} type="button"
          className={`${mobileMenuOpen ? ' py-3 text-center bg-[var(--primary)] text-[var(--background)]' : 'p-1 px-2 min-w-max'} w-full relative cursor-pointer font-medium text-[var(--background)] hover:text-[#F5C45E]`}
        >
          {item.name}
        </Link>
      );;
  });

  return (
    <>
      {/* =========================    NAVBAR      ========================= */}
      <header className=" fixed top-0 left-0 z-50 w-full px-6 sm:px-10 py-6 sm:py-10 text-white sm:bg-transparent ">
        <div className="flex w-full items-center justify-between">
          {/* =========================         LOGO          ========================= */}
          <Link href="/" onClick={handleNavigation} className="flex items-center gap-2"  >
            <img src="/header2_logo.png" alt="Franto Insurance" className=" ml-2 md:ml-8 mt-2 w-8 h-auto sm:w-10 rounded-lg object-cover drop-shadow-lg " />
          </Link>
          {/* =========================              DESKTOP NAVIGATION          ========================= */}
          <nav className="min-w-100 hidden sm:flex flex-row items-center gap-2 rounded-full bg-[#102E50] px-10 py-3 text-sm font-medium backdrop-blur-md shadow-lg " >
            {NavItem}
          </nav>

          {/* =========================              MOBILE MENU BUTTON          ========================= */}
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className=" flex sm:hidden cursor-pointer items-center justify-center text-[var(--accent)] transition-all duration-300 hover:scale-110 hover:text-[var(--accent)] "
            aria-label={ mobileMenuOpen ? "Close navigation" : "Open navigation" }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? ( <LuX size={32} /> ) : ( <LuMenu size={32} /> )}
          </button>
        </div>

        {/* =========================        MOBILE NAVIGATION        ========================= */}
        <div className={` absolute left-0 top-full w-full overflow-hidden bg-[var(--background)] backdrop-blur-md shadow-lg sm:hidden transition-all duration-300 ease-in-out ${ mobileMenuOpen ? "block" : "hidden" }`}>
          <nav className=" flex flex-col items-center text-[var(--primary)] transition-all duration-300 ease-in-out" onClick={handleNavigation}>
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