import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='grid grid-cols-2 bg-[#102E50] text-[#F5C45E] px-16 py-20 gap-8'>
      <div className='leading-relaxed'>
        <img src={"/logo_no_background.png"} alt="Franto Insurance" className="w-40 h-20 object-cover mt-4  rounded-lg" />
        <p className='mb-8 py-2 text-white'> Descriptive slogan</p>
        <div className='flex flex-row gap-4'>
          <span><FaInstagram size={24}/></span>
          <span><FaLinkedin size={24}/></span>
          <span><FaXTwitter size={24}/></span>
        </div>
      </div>
      <div className='flex flex-row gap-8 px-4'>
        <div className='px-8'>
          <h2 className='text-2xl font-serif font-bold py-2'>Services</h2>
          <div className='px-2 text-white text-sm leading-8'>
            <p>Insurance</p>
            <p>Investments</p>
            <p>Pension</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-serif font-bold py-2'>Address</h2>
          <div className='px-2 text-white text-sm leading-8'>
            <p>Contact</p>
            <p>Email Support</p>
            <p>Operating Hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer