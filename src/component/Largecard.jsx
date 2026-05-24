import React from 'react'

const Largecard = ({
    image,
    heading,
    paragraph,
    price,
    buttonText,
    cartImage,
    reverse = false
}) => {
    return (
        <div
            className={`relative overflow-visible flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''
                } items-center justify-between gap-10 bg-white/10 text-white p-8 rounded-[40px] h-[600px] md:h-[300px] w-full backdrop-blur-sm`}
        >

            {/* Blue Blur Background */}
            <div className='absolute left-20 top-10 w-[250px] h-[250px] bg-blue-500/30 blur-3xl rounded-full'></div>

            {/* Image Part */}
            <div className='relative flex justify-center w-full md:w-1/2'>

                <img
                    src={image}
                    alt={heading}
                    className='relative z-10 w-[420px] md:w-[500px] object-contain -mt-[140px]'
                />
            </div>

            {/* Content Part */}
            <div className='flex flex-col gap-5 w-full md:w-1/2 z-10'>

                {/* Heading */}
                <h1 className='text-3xl text-gray-200 font-semibold leading-tight'>
                    {heading}
                </h1>

                {/* Paragraph */}
                <p className='text-gray-300 leading-8'>
                    {paragraph}
                </p>

                {/* Price */}
                <span className='text-3xl font-semibold'>
                    {
                        price ? `₹ ${price}` : ""
                    }
                </span>

                {/* Button + Cart */}
                <div className='flex items-center gap-5'>

                    <button className='transition-all duration-300 px-8 py-2 rounded-md font-semibold border hover:bg-white hover:text-black'>
                        {buttonText}
                    </button>

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
        </div>
    )
}

export default Largecard