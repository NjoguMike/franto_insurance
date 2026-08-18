import React from 'react'

function About() {
  return (
    <main className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-none'>
      <section className='h-screen snap-start flex flex-col items-center justify-between gap-4 bg-[var(--accent)] pt-12 rounded-lg shadow-lg'>
        <div className='flex flex-col justify-baseline p-14 text-center backdrop-blur-sm pt-18'>
          <h1 className="text-5xl text-[var(--primary)] font-serif font-bold mb-6">About Us</h1>
          <p className="text-lg]">We are a team of dedicated professionals committed to providing exceptional service and solutions.</p>
        </div>
        <div className="relative bottom-0 flex flex-col sm:flex-row w-full justify-between text-center text-white gap-8 bg-[var(--primary)] py-12 shadow-lg">
          <div className="min-w-[350px] flex flex-col text-white gap-4 px-12">
            <h1 className="text-5xl text-[var(--accent)] font-serif font-bold mb-6">Our Mission</h1>
            <p className="text-md">Our mission is to empower our clients with innovative solutions that drive success and growth.</p>
          </div>
          <div className="min-w-[350px] flex flex-col text-white gap-4 px-12">
            <h1 className="text-5xl text-[var(--secondary)] font-serif font-bold mb-6">Our Values</h1>
            <p className="text-md">Integrity, Excellence, Collaboration, and Innovation are the core values that guide our actions and decisions.</p>
          </div>
        </div>
      </section>
      <section className="h-screen snap-start flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl text-[var(--primary)] font-serif font-bold mb-6">Our Team</h1>
        <div className="flex flex-col text-white gap-4">
          <p className="text-lg text-[var(--accent)]">Meet our talented team of professionals who are passionate about delivering exceptional results.</p>
        </div>
      </section>
      <section className="h-screen snap-start flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl text-[var(--primary)] font-serif font-bold mb-6">Contact Us</h1>
        <div className="flex flex-col text-white gap-4">
          <p className="text-lg text-[var(--accent)]">Have questions or want to learn more? Reach out to us and we'll be happy to assist you.</p>
        </div>
        <div className="flex flex-row gap-6 items-center justify-center mt-16">
          <a href="mailto:info@detche.com" className="bg-[var(--accent)] text-white py-2 px-4 rounded-lg hover:bg-[var(--secondary)] transition-colors duration-300">Email Us</a>
          <a href="tel:+1234567890" className="bg-[var(--accent)] text-white py-2 px-4 rounded-lg hover:bg-[var(--secondary)] transition-colors duration-300">Call Us</a>
        </div>
      </section>
    </main>
  )
}

export default About