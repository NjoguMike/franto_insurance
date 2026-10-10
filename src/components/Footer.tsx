import Link from "next/link";
import { LuFacebook, LuInstagram, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";

function Footer() {
  return (
    <footer className="bg-[#102E50] text-white">
      {/* Main Footer */}
      <div className="grid gap-12 px-8 py-16 sm:px-12 md:grid-cols-[max-content_max-content] md:justify-between md:px-18 lg:px-20 lg:py-20">
        
        {/* Brand */}
        <div className="flex flex-col justify-between gap-8">
          <div className="max-w-md">
            <h2 className="font-serif text-xl font-bold tracking-wide text-white sm:text-2xl"> Franto Insurance Agency </h2>

            <div className="mt-3 h-px w-12 bg-[#F5C45E]" />

            <p className="mt-4 font-serif text-sm italic tracking-[0.18em] text-[#F5C45E] sm:text-xs">
              endless financial possibilities
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Protect what matters, grow what matters, and build a more secure financial future with Franto Insurance Agency.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"> Connect with us </p>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Franto Insurance Agency on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#F5C45E] transition-all duration-300 hover:border-[#F5C45E] hover:bg-[#F5C45E] hover:text-[#102E50]"
              >
                <LuInstagram size={19} />
              </Link>

              <Link
                href="https://www.facebook.com/people/Franto-Insurance-Agency/100083415733405/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Franto Insurance Agency on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#F5C45E] transition-all duration-300 hover:border-[#F5C45E] hover:bg-[#F5C45E] hover:text-[#102E50]"
              >
                <LuFacebook size={19} />
              </Link>

              <Link
                href="https://www.linkedin.com/company/frantoinsuranceagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Franto Insurance Agency on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#F5C45E] transition-all duration-300 hover:border-[#F5C45E] hover:bg-[#F5C45E] hover:text-[#102E50]"
              >
                <LuLinkedin size={19} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="mr-8">
          <h2 className="font-serif text-lg font-semibold tracking-wider text-[#F5C45E]"> Contact </h2>

          <div className="mt-5 flex flex-col gap-4 text-sm">
            <Link
              href="tel:+254118978911"
              className="group flex items-start gap-3 text-white/75 transition-colors duration-300 hover:text-[#F5C45E]"
            >
              <LuPhone size={17} className="mt-0.5 shrink-0 text-[#F5C45E]" />
              <span>+254 118 978911</span>
            </Link>

            <Link
              href="mailto:info@frantoinsurance.com"
              className="group flex no-wrap items-start gap-3 break-all text-white/75 transition-colors duration-300 hover:text-[#F5C45E]"
            >
              <LuMail size={17} className="mt-0.5 shrink-0 text-[#F5C45E]" />
              <span>info@frantoinsurance.com</span>
            </Link>

            <div className="mt-1 ml-8">
              <p className="text-xs uppercase tracking-wider text-white/40"> Operating Hours </p>
              <p className="mt-1 text-white/75"> 8:00 AM – 5:00 PM </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-8 border-t border-white/10 sm:mx-12 md:mx-16 lg:mx-20">
        <div className="flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p> © {new Date().getFullYear()} Franto Insurance Agency. All rights reserved. </p>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#F5C45E]" > Privacy Policy </Link>
            <Link href="/terms" className="transition-colors hover:text-[#F5C45E]" > Terms & Conditions </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;