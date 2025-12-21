import React from 'react'
import { assets, cities } from '../assets/assets'

const H = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      
      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20 text-sm md:text-base'>The Ultimate Hotel Experience</p>
      <h1 className='font-platfair text-3xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover your Perfect Gateway Destination</h1>
      <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>

      <form className='bg-white text-gray-500 rounded-lg p-6 mt-8 w-full max-w-5xl mx-auto shadow-lg grid grid-cols-1 md:grid-cols-5 gap-4 items-end'>

        <div className='flex flex-col w-full'>
          <div className='flex items-center gap-2 mb-1'>
            <img src={assets.calenderIcon} alt='' className='h-4' />
            <label htmlFor="destinationInput" className='text-sm font-medium'>Destination</label>
          </div>
          <input 
            list='destinations' 
            id="destinationInput" 
            type="text" 
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 transition-colors" 
            placeholder="Search city..." 
            required 
          />
          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div className='flex flex-col w-full'>
          <div className='flex items-center gap-2 mb-1'>
            <img src={assets.calenderIcon} alt='' className='h-4' />
            <label htmlFor="checkIn" className='text-sm font-medium'>Check in</label>
          </div>
          <input id="checkIn" type="date" className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500" />
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex items-center gap-2 mb-1'>
            <img src={assets.calenderIcon} alt='' className='h-4' />
            <label htmlFor="checkOut" className='text-sm font-medium'>Check out</label>
          </div>
          <input id="checkOut" type="date" className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500" />
        </div>
        <div className='flex flex-col w-full'>
            <div className='flex items-center gap-2 mb-1'>
                <img src={assets.calenderIcon} alt='' className='h-4 invisible md:visible' />
                <label htmlFor="guests" className='text-sm font-medium'>Guests</label>
            </div>
          <input min={1} max={10} id="guests" type="number" className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500" placeholder="1" />
        </div>
        <button className='
            w-full 
            bg-black text-white 
            font-medium 
            py-2.5 px-4 
            rounded-md 
            shadow-lg hover:shadow-xl 
            transition-all duration-300 
            transform hover:-translate-y-1 active:scale-95 
            flex items-center justify-center gap-2
        '>
          <img src={assets.searchIcon} alt='searchIcon' className='h-5 w-5 brightness-0 invert' />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default H