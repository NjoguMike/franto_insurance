"use client";

import Link from "next/link";
import { LuArrowRight, LuAward, LuHeartHandshake, LuShieldCheck, LuTarget, LuUsers } from "react-icons/lu";

function About() {
  const values = [
    {
      icon: LuShieldCheck,
      title: "Integrity",
      description:
        "We believe trust is earned through transparency, honesty, and a commitment to doing what is right.",
    },
    {
      icon: LuAward,
      title: "Excellence",
      description:
        "We pursue high standards and thoughtful solutions in every client relationship.",
    },
    {
      icon: LuUsers,
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their goals and build meaningful financial strategies.",
    },
    {
      icon: LuTarget,
      title: "Innovation",
      description:
        "We embrace forward-thinking solutions that create new opportunities for financial growth.",
    },
  ];

  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-none">
      <section id="about" className=" relative min-h-screen snap-start overflow-hidden bg-[var(--background)] px-6 pb-16 pt-32 sm:px-10 lg:px-20 ">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[var(--primary)]/20 sm:h-[500px] sm:w-[500px]" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-[var(--secondary)]/40 sm:h-96 sm:w-96" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-lg sm:max-w-7xl flex-col justify-center">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]"> Franto Insurance Agency </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-[var(--primary)] sm:text-6xl lg:text-7xl">
              Building confidence for
              <span className="block text-[var(--secondary)]">
                every financial future.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--primary)]/80 sm:text-lg">
              At Franto Insurance Agency, we believe financial protection is more than preparing for uncertainty. It is about creating the confidence to move forward, pursue opportunities, and build a secure future.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[var(--primary)] p-8 text-white shadow-xl sm:p-10">
              <div className="flex gap-6 items-baseline">
                <div className="mb-6 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--primary)]">
                  <LuTarget size={24} />
                </div>
                <p className="text-lg sm:text-2xl font-semibold uppercase tracking-[0.1em] text-[var(--secondary)]"> Our Mission </p> 
              </div>

              <h2 className="font-serif text-2xl font-bold sm:text-3xl"> Empowering confident decisions. </h2>
              <p className="mt-5 leading-6 text-white/75 text-sm sm:text-md">
                Our mission is to empower individuals and businesses with trusted insurance, investment, and retirement solutions that support lasting financial confidence.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--accent)]/40 p-8 shadow-lg backdrop-blur-md sm:p-10">
              <div className="flex gap-6 items-baseline">
                <div className="mb-6 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--accent)]">
                <LuHeartHandshake size={28} />
                </div>
                <p className="text-lg sm:text-2xl font-semibold uppercase tracking-[0.1em] text-[var(--secondary)]"> Our Vision </p> 
              </div>

              <h2 className="font-serif text-2xl font-bold sm:text-3xl"> Endless financial possibilities. </h2>
              <p className="mt-5 leading-6 text-blue/75 text-sm sm:text-md">
                We envision a future where more people have access to the knowledge, protection, and financial opportunities needed to achieve their ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================     VALUES      ===================================================== */}
      <section id="values" className=" min-h-screen snap-start bg-[var(--secondary)]/20 px-6 py-24 sm:px-10 lg:px-20 ">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]"> What Guides Us </p>
            <h2 className="font-serif text-3xl font-bold text-[var(--primary)] sm:text-5xl"> Values that define how we serve. </h2>
            <p className="mt-6 max-w-sm sm:max-w-7xl text-md sm:text-xl leading-8 text-[var(--primary)]/70">
              Our values shape every relationship, recommendation, and financial solution we provide.
            </p>
          </div>

          <div className="mt-14 grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className=" group rounded-2xl border border-[var(--primary)]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ">
                  <div className="flex items-end gap-4">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-serif text-lg md:text-2xl lg:text-xl font-bold text-[var(--primary)]"> {value.title} </h3>
                  </div>
                  <p className="mt-4 leading-6 text-gray-600 text-xs md:text-md"> {value.description} </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className=" min-h-screen snap-start bg-[var(--primary)] px-6 py-24 sm:px-10 lg:px-20 text-white ">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]"> Our Team </p>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl"> Expertise built around your future. </h2>
            <p className="mt-7 max-w-lg text-md md:text-lg leading-8 text-white/70">
              Our team brings together experience, insight, and a genuine commitment to helping our clients make informed financial decisions.
            </p>

            <div className="mt-10 space-y-5">
              {[ "Client-focused financial guidance", "Thoughtful and practical solutions", "Long-term partnership and support" ].map((item) => (
                <div key={item} className="flex items-center gap-3" >
                  <div className="flex h-6 w-6 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--primary)]">
                    <LuShieldCheck size={16} />
                  </div>
                  <p className="text-white/90 text-xs md:text-md">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual content */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]"> The Franto Approach </p>
              <blockquote className="mt-8 font-serif text-xl leading-relaxed md:text-4xl">
                "Your goals deserve more than a standard solution."
              </blockquote>
              <div className="mt-10 h-px w-full bg-white/10" />
              <p className="mt-8 leading-7 text-white/60">
                We take the time to understand where you are, where you want to go, and how the right financial strategy can help connect the two.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full border border-[var(--secondary)]/40 lg:block" />
          </div>
        </div>
      </section>

      <section id="contact" className=" min-h-screen snap-start flex items-center justify-center bg-[var(--background)] px-6 py-24 sm:px-10 lg:px-20 ">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]"> Let's Start a Conversation </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[var(--secondary)] md:text-6xl ">
            Your future deserves <span className="block"> thoughtful planning. </span>
          </h2>
          <p className="mx-auto mt-12 max-w-lg md:max-w-2xl text-lg leading-8 text-[var(--primary)]/75">
            Whether you're looking for protection, investment opportunities, or retirement planning, our team is ready to help you explore your possibilities.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 xs:flex-row md:flex-row">
            <Link
              href="mailto:info@detche.com"
              className=" inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)] hover:shadow-xl ">
              Email Us
              <LuArrowRight size={18} />
            </Link>

            <Link
              href="tel:+1234567890"
              className=" inline-flex items-center justify-center rounded-full border border-[var(--primary)]/30 px-8 py-4 font-semibold text-[var(--primary)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white ">
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;