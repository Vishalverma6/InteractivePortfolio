import React from 'react'
import image from "../assets/navbar.png"
import { RiArrowDownSFill } from 'react-icons/ri'
import { FaSearch } from 'react-icons/fa'
import bagImage from "../assets/bag.png"
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='w-full px-8 py-5 flex justify-between items-center text-white'>
      
      {/* Left Part */}
      <div className='flex items-center gap-2 cursor-pointer'>
        <img src={image} alt="logo" className='w-12 h-12 object-contain' />
        <span className='text-2xl font-bold'>Planto.</span>
      </div>

      {/* Center Part */}
      <ul className='hidden md:flex items-center gap-10 font-medium'>
        <li className='cursor-pointer hover:text-green-300 transition-all duration-300'>
          Home
        </li>

        <li className='flex items-center cursor-pointer hover:text-green-300 transition-all duration-300'>
          Plants Type
          <RiArrowDownSFill className='text-xl ml-1' />
        </li>

        <li className='cursor-pointer hover:text-green-300 transition-all duration-300'>
          More
        </li>

        <li className='cursor-pointer hover:text-green-300 transition-all duration-300'>
          Contact
        </li>
      </ul>

      {/* Right Part */}
      <div className='flex items-center gap-5'>
        
        <FaSearch className='text-xl cursor-pointer hover:text-green-300 transition-all duration-300' />

        <img
          src={bagImage}
          alt="bag"
          className='w-6 h-6 cursor-pointer'
        />

        <HiOutlineMenuAlt4 className='text-3xl cursor-pointer ' />
      </div>
    </nav>
  )
}

export default Navbar