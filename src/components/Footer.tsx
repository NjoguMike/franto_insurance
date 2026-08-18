import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='grid  sm:grid-cols-2 bg-[#102E50] text-[#F5C45E] px-10 sm:px-26 py-20 gap-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-start gap-4'>
          <img src={"/header_logo.png"} alt="Franto Insurance" className="block w-14 h-14 shrink-0 object-contain" />
          <div className=' flex flex-col'>
            <h2 className='text-2xl font-serif tracking-wide font-bold leading-4 text-white'> Franto Insurance Agency </h2>
            <p className='mt-2 py-2 text-lg font-cursive tracking-widest text-[var(--accent)]'> endless financial possibilities</p>
          </div>
        </div>
        <div className='flex flex-row gap-4 cursor-pointer px-2'>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-[var(--background)] rounded-md p-1'><FaInstagram size={22}/></span>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125 text-[var(--background)]'><FaLinkedin size={30}/></span>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125 bg-[var(--foreground)] text-[var(--background)] rounded-md p-1'><FaXTwitter size={20}/></span>
        </div>
      </div>
      <div className='flex flex-row gap-8 mt-5 sm:px-4 sm:justify-end'>
        <div>
          <h2 className='text-xl font-serif font-semibold py-2 tracking-wider'>Services</h2>
          <div className='px-2 text-white font-sans text-sm leading-8'>
            <p>Insurance</p>
            <p>Investments</p>
            <p>Pension</p>
          </div>
        </div>
        <div>
          <h2 className='text-xl font-serif font-semibold py-2 tracking-wider'>Address</h2>
          <div className='px-2 text-white font-sans text-sm leading-8'>
            <p>Contact</p>
            <p>Email Support</p>
            <p className='leading-relaxed'>Operating Hours :
              <span className='block px-2 text-xs'>8:00 AM - 5:00 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer