// import { FaInstagram, FaLinkedin } from 'react-icons/fa'
// import { FaXTwitter } from 'react-icons/fa6'
import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu'

function Footer() {
  return (
    <div className='grid sm:grid-cols-[1.2fr_1fr] bg-[#102E50] text-[#F5C45E] px-10 sm:px-16 py-20 gap-8'>
      <div className='flex flex-col gap-8 justify-between '>
        <div className='flex items-start gap-2'>
          <img src={"/header_logo.png"} alt="Franto Insurance" className="block w-14 h-14 shrink-0 object-contain backdrop-blur-lg" />
          <div className='min-w-[200px] flex flex-col pr-4'>
            <h2 className='text-lg sm:text-xl md:text-2xl font-serif tracking-wide font-bold leading-6 text-white'> Franto Insurance Agency </h2>
            <p className='py-2 text-lg font-cursive tracking-widest text-[var(--accent)]'> endless financial possibilities</p>
          </div>
        </div>
        <div className='flex flex-row gap-4 cursor-pointer px-2'>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-[var(--background)] rounded-sm p-1.5'><LuInstagram size={24}/></span>
          <span className='cursor-pointer flex items-end rounded-sm transition-transform duration-300 hover:scale-125 bg-[#273c99] text-[var(--background)] px-1'><LuFacebook size={28} fill='white'/></span>
          <span className='cursor-pointer transition-transform duration-300 hover:scale-125 bg-[#0c83e6] text-white rounded-sm p-1.5'><LuLinkedin  size={24} fill='white'/></span>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 mt-10 sm:mt-0 sm:px-2 sm:justify-end'>
        <div>
          <h2 className='text-xl font-serif font-semibold py-2 tracking-wider'>Services</h2>
          <div className='px-2 text-white text-sm leading-8 cursor-pointer'>
            <p>Insurance</p>
            <p>Investments</p>
            <p>Pension</p>
          </div>
        </div>
        <div>
          <h2 className='text-xl font-serif font-semibold py-2 tracking-wider'>Address</h2>
          <div className='px-2 text-white text-sm leading-8'>
            <p>Contact : 0700 123 456</p>
            <p>Email Support : info@frantoinsurance.com</p>
            <p>Operating Hours : 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer