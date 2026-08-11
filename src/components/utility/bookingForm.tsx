// import { useParams } from 'next/navigation';
import React from 'react'
import { FaX } from 'react-icons/fa6'

function BookingForm({ setFormVisible }: { setFormVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
  
  return (
    <div id="booking-form" className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm`}>
      <div className="relative w-full max-w-2xl rounded-2xl bg-white py-16 px-12 shadow-2xl animate-in fade-in duration-300">
        <div className="relative flex flex-row items-center justify-between mb-18">
          <h1 className="text-4xl text-[var(--primary)] font-serif font-bold">Book an Appointment</h1>
          <FaX  
            className="relative cursor-pointer text-xl text-[#102E50] transition hover:bg-[var(--secondary)] hover:text-white hover:rounded-full" 
            size={24} 
            onClick = {() => setFormVisible(false)}
          />
        </div>
        <form className="flex flex-col gap-4 text-black">
          <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-gray-300 p-3 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50" />
          <div className="flex flex-row gap-4">
            <input type="email" placeholder="Email Address" className="w-1/2 rounded-lg border border-gray-300 p-3 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50" />
            <input type="tel" placeholder="Phone Number" className="w-1/2 rounded-lg border border-gray-300 p-3 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50" />
          </div>
          <div className="flex flex-row gap-4">
            <input type="date" placeholder="Preferred Date" className="w-full rounded-lg border border-gray-300 p-3 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50" />
            <input type="time" placeholder="Preferred Time" className="w-full rounded-lg border border-gray-300 p-3 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50" />
          </div>
          <select className="w-full rounded-lg border border-gray-300 p-3 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50">
            <option value="">Select Service</option>
            <option value="service1">Insurance</option>
            <option value="service2">Investment</option>
            <option value="service3">Pension</option>
          </select>
          <textarea placeholder="Message" className="w-full rounded-lg mb-12 border border-gray-300 p-3 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50"></textarea>
          <button type="submit" className="w-full rounded-lg bg-[var(--accent)] p-3 text-white transition hover:bg-[var(--primary)]">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BookingForm