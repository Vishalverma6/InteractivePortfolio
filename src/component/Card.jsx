import React from 'react'

const Card = ({
  plantImage,
  heading,
  paragraph,
  price,
  cartImage
}) => {
  return (
    <div className='flex flex-col  gap-5 bg-white/10 backdrop-blur-md p-6 rounded-[40px] w-[320px] text-white'>

      {/* Plant Image */}
      <div className='flex justify-center'>
        <img
          src={plantImage}
          alt={heading}
          className='w-[220px] h-[220px] object-contain'
        />
      </div>

      {/* Heading */}
      <h1 className='text-2xl text-gray-400 font-bold'>
        {heading}
      </h1>

      {/* Paragraph */}
      <p className='text-gray-300 leading-7'>
        {paragraph}
      </p>

      {/* Bottom Part */}
      <div className='flex items-center justify-between mt-3'>

        {/* Price */}
        <span className='text-2xl text-gray-300 font-semibold'>
          Rs. {price}/-
        </span>

        {/* Cart Image */}
        {
          cartImage && (
            <div className='bg-white/10 p-2 rounded-md border cursor-pointer hover:bg-white/20 transition-all duration-300'>
              <img
                src={cartImage}
                alt="cart"
                className='w-6 h-6 object-contain'
              />
            </div>
          )
        }

      </div>

    </div>
  )
}

export default Card