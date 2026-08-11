import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='grid grid-cols-2 bg-[#102E50] text-[#F5C45E] px-16 py-20 gap-8'>
      <div className='leading-relaxed'>
        <img src={"/header_logo.png"} alt="Franto Insurance" className="w-10 h-auto object-cover mt-2 py-4  rounded-lg" />
        <h2 className='text-2xl font-[--font-serif] tracking-wide font-bold'> Franto Insurance Agency</h2>
        <p className='mb-8 py-2 text-2xl font-cursive tracking-widest text-white'> endless financial possibilities</p>
        <div className='flex flex-row gap-4 cursor-pointer'>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125'><FaInstagram size={24}/></span>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125'><FaLinkedin size={24}/></span>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125'><FaXTwitter size={24}/></span>
        </div>
      </div>
      <div className='flex flex-row gap-8 px-4 mt-20'>
        <div className='px-8'>
          <h2 className='text-2xl font-serif font-bold py-2'>Services</h2>
          <div className='px-2 text-white font-sans text-sm leading-8'>
            <p>Insurance</p>
            <p>Investments</p>
            <p>Pension</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-serif font-bold py-2'>Address</h2>
          <div className='px-2 text-white font-sans text-sm leading-8'>
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