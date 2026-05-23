import React from 'react'
import image from "../assets/navbar.png"
import { quickLinks } from '../data/quick_link'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#1F3D2B] text-white px-8 md:px-16 py-12 mt-auto'>

      {/* Top Section */}
      <div className='flex flex-col md:flex-row justify-between gap-10  pb-10'>

        {/* Left Part */}
        <div className='flex flex-col max-w-sm'>
          <div className='flex items-center gap-2 mb-4'>
            <img
              src={image}
              alt="logo"
              className='w-14 h-14 object-contain'
            />

            <span className='text-2xl font-bold'>
              Planto.
            </span>
          </div>

          <p className='text-gray-300 leading-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Center Part */}
        <div className='flex flex-col'>
          <h3 className='text-xl font-semibold mb-5'>
            Quick Links
          </h3>

          <div className='flex flex-col gap-3'>
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to="/"
                className='text-gray-300 hover:text-green-300 transition-all duration-300'
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Part */}
        <div className='flex flex-col'>
          <h3 className='text-xl font-semibold mb-5'>
            For Every Update.
          </h3>

          <div className='flex items-center bg-white rounded-full overflow-hidden p-1 w-full max-w-md'>
            <input
              type="email"
              placeholder='Enter Email'
              className='flex-1 px-4 py-2 outline-none text-black'
            />

            <button className='bg-green-600 hover:bg-green-700 transition-all duration-300 px-5 py-2 rounded-full  '>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-5 pt-6'>

        {/* Social Links */}
        <div className='flex items-center gap-5 font-semibold'>
          <span className='cursor-pointer hover:text-green-300'>
            FB
          </span>

          <span className='cursor-pointer hover:text-green-300'>
            TW
          </span>

          <span className='cursor-pointer hover:text-green-300'>
            LI
          </span>
        </div>

        {/* Copyright */}
        <span className='text-gray-300 text-sm mr-36'>
          Planto © All Rights Reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer