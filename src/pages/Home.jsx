import React from 'react'
import ReviewCard from '../component/ReviewCard'
import image from "../assets/review.jpg"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import bigPlant from "../assets/bigPlant.jpg"
import { MdOutlinePlayCircleFilled } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
import heroImage from "../assets/heroSection.png"
import Largecard from '../component/Largecard'
import trendyPlants1 from "../assets/trendyPlants1.png";
import trendyPlants2 from "../assets/trendyPlants2.png"
import cartImage from "../assets/bag.png"
import reviews from '../data/review-data'
import cardData from '../data/card_data'
import Card from '../component/Card'



const Home = () => {
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <Navbar />

            <div className='relative w-full overflow-hidden bg-[#1B2316]'>

                {/* Background Image */}
                <img
                    src={bigPlant}
                    alt=""
                    className='w-full h-full object-cover absolute inset-0'
                />

                {/* Dark Overlay */}
                <div className='absolute inset-0 '></div>

                {/* Main Content */}
                <div className='relative z-10 px-6 md:px-14 py-16 flex flex-col gap-32'>

                    {/* Hero Section */}
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-16 min-h-screen'>

                        {/* Left Part */}
                        <div className='flex flex-col gap-20 max-w-2xl text-white'>

                            {/* Upper Part */}
                            <div className='flex flex-col gap-6'>

                                <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
                                    Breath Natural
                                </h1>

                                <p className='text-gray-200 text-lg leading-8 max-w-xl'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                {/* Buttons */}
                                <div className='flex items-center gap-6'>

                                    <button className='transition-all duration-300 px-8 py-3 rounded-md font-semibold border border-white hover:bg-white hover:text-black'>
                                        Explore
                                    </button>

                                    <span className='flex items-center gap-2 cursor-pointer text-lg hover:text-green-300 transition-all duration-300'>
                                        <MdOutlinePlayCircleFilled className='text-4xl' />
                                        Live Demo...
                                    </span>

                                </div>
                            </div>

                            {/* Review Card */}
                            <div>
                                <ReviewCard
                                    name="Alena Patel"
                                    rating={5}
                                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
                                    image={image}
                                />
                            </div>
                        </div>

                        {/* Right Product Card */}
                        <div className='relative flex flex-col justify-end bg-white/10 backdrop-blur-lg border border-white/20 rounded-[40px] p-6 w-full max-w-[360px] h-[380px] text-white'>

                            {/* Blue Background Circle */}
                            <div className='absolute top-10 left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-blue-500/30 blur-3xl rounded-full'></div>

                            {/* Plant Image */}
                            <div className='absolute top-[-110px] left-1/2 -translate-x-1/2 z-10'>
                                <img
                                    src={heroImage}
                                    alt="plant"
                                    className='w-[500px] h-[300px] '
                                />
                            </div>

                            {/* Card Content */}
                            <div className='mt-auto z-10'>

                                <p className='text-gray-300 mb-2'>
                                    Trendy House Plant
                                </p>

                                <div className='flex justify-between items-center'>
                                    <h2 className='text-3xl font-bold'>
                                        Calathea Plant
                                    </h2>

                                    <IoIosArrowForward className='text-2xl cursor-pointer' />
                                </div>

                                <div className='flex justify-between items-center mt-8'>
                                    {/* 
                                    <span className='text-2xl font-semibold'>
                                        ₹ 599
                                    </span> */}

                                    <button className='transition-all duration-300 px-8 py-3 rounded-md font-semibold border border-white hover:bg-white hover:text-black'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Trendy Plants */}
                    <div className='w-full flex flex-col gap-32 mt-44'>

                        {/* Heading */}
                        <div className='flex justify-center'>
                            <h1 className='text-4xl md:text-6xl font-bold text-white text-center'>
                                Our Trendy Plants
                            </h1>
                        </div>

                        {/* First Card */}
                        <Largecard
                            image={trendyPlants1}
                            heading="For Small Decs Ai Plant"
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                            price="599/-"
                            buttonText="Explore"
                            cartImage={cartImage}
                        />

                        {/* Second Card */}
                        <Largecard
                            image={trendyPlants2}
                            heading="For Fresh Decs Ai Plant"
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                            price="579/-"
                            buttonText="Explore"
                            cartImage={cartImage}
                            reverse={true}
                        />
                    </div>
                </div>
            </div>

            {/* Our Top selling */}
            <div className='flex flex-col items-center gap-16 py-20'>

                {/* Heading */}
                <div className='relative inline-block px-10 py-4'>

                    {/* Top Right Border */}
                    <div className='absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-lime-500 rounded-tr-2xl'></div>

                    {/* Bottom Left Border */}
                    <div className='absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-lime-500 rounded-bl-2xl'></div>

                    <h1 className='text-[26px] font-bold text-white text-center'>
                        Our Top Selling
                    </h1>
                </div>

                {/* Cards */}
                <div className='flex flex-wrap  items-center justify-between gap-y-10 w-[90%] max-w-[1400px]'>

                    {
                        cardData.map((data) => (
                            <div
                                key={data.id}
                                className='w-[80%] lg:w-[32%]'
                            >
                                <Card
                                    plantImage={data.plantImage}
                                    heading={data.heading}
                                    paragraph={data.paragraph}
                                    price={data.price}
                                    cartImage={data.cartImage}
                                />
                            </div>
                        ))
                    }

                </div>

            </div>

            {/* Customer review */}
            <div className='flex flex-col items-center gap-16 py-20'>

                {/* Heading */}
                <div className='relative inline-block px-10 py-4'>

                    {/* Top Right Border */}
                    <div className='absolute top-0 right-0 w-10 h-10 border-t-4  border-r-4 border-lime-500 rounded-tr-2xl'></div>

                    {/* Bottom Left Border */}
                    <div className='absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-lime-500 rounded-bl-2xl'></div>

                    <h1 className='text-[26px] font-bold text-white text-center'>
                        Customer Review
                    </h1>
                </div>

                {/* Review Cards */}
                <div className='flex flex-wrap justify-center gap-8 w-full'>

                    {
                        reviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                name={review.name}
                                review={review.review}
                                rating={review.rating}
                                image={review.image}
                            />
                        ))
                    }

                </div>

            </div>

            {/* Our best 02 */}
            <div className='w-full flex justify-center px-6 py-20'>

                <div className='flex flex-col items-center gap-28 w-full max-w-[1400px]'>

                    {/* Heading */}
                    <div className='relative inline-block px-10 py-4'>

                        {/* Top Right Border */}
                        <div className='absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-lime-500 rounded-tr-2xl'></div>

                        {/* Bottom Left Border */}
                        <div className='absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-lime-500 rounded-bl-2xl'></div>

                        <h1 className='text-[26px] :text-5xl font-bold text-white text-center'>
                            Our Best O2
                        </h1>
                    </div>

                    {/* Card */}
                    <div >
                        <Largecard
                            image={heroImage}
                            heading="We Have Small And Best O2 Plants Collection’s"
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            buttonText="Explore"
                            price=""
                        />

                    </div>
                </div>

            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Home
