import React from 'react'
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ name, review, rating, image }) => {
  return (
    <div className='bg-white/10 backdrop-blur-sm p-5 rounded-2xl shadow-lg max-w-sm border border-white/15'>

  {/* User Info */}
  <div className='flex items-center gap-3 mb-4'>
    <img
      src={image}
      alt={name}
      className='w-14 h-14 rounded-full object-cover'
    />

    <div>
      <h3 className='font-bold text-lg text-white'>
        {name}
      </h3>

      <div className='flex items-center gap-1 text-yellow-400'>
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    </div>
  </div>

  <p className='text-gray-300 leading-7'>
    {review}
  </p>
</div>
  )
}

export default ReviewCard