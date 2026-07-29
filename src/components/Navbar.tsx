import React from 'react'

function Navbar() {
  const NavItems = [
    {
      name: "Insurance", 
      link_to: "#",
      dropdown: [
        {
          name: "Insurance", 
          link_to: "/insurance",
        },
        {
          name: "Insurance 1", 
          link_to: "/insurance",
        },
      ]
    },
    {
      name: "Investments", 
      link_to: "#",
      dropdown: [
        {
          name: "Investment", 
          link_to: "/investments",
        },
        {
          name: "Investment 2", 
          link_to: "investments",
        },
      ]
    },
    {
      name: "Pension", 
      link_to: "#",
      dropdown: [
        {
          name: "Pension", 
          link_to: "/pension",
        },
        {
          name: "Pension 1", 
          link_to: "/pension",
        },
      ]
    },
    {
      name: "Book Now", 
      link_to: "/contact",
    },
  ]

  const NavItem = NavItems.map((item, index) => {

    if (item.dropdown) {
      return (
        <select key={index} className='hover:cursor-pointer hover:text-[#F5C45E] bg-transparent text-white font-medium pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[var(--accent)] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus:outline-none'>
        {item.dropdown.map((opt, idx) => (
          <option key={idx} value={opt.link_to} className='bg-gray-800 text-white'> {opt.name} </option>
        ))}
        </select>
      )
    } 
    return (
      <span key={index} className="bg-blue text-white cursor-pointer relative inline-block font-medium pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#F5C45E] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">{item.name}</span>
    )
  })

  return (
    <div className='w-full fixed top-0 z-50 flex flex-row justify-between items-center px-10 py-12 text-white bg-transparent'>
      <img src={"/logo_no_background.png"} alt="Franto Insurance" className="w-40 h-20 object-cover mt-4  rounded-lg" />
      <div className='flex flex-row gap-6 bg-[#102E50] backdrop-blur pt-4 pb-3 px-8 rounded-full items-center text-white font-medium text-sm'>
        {NavItem}
      </div>
    </div>
  )
}

export default Navbar