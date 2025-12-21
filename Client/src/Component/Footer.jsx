import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
      
      <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        
        {/* Brand Section */}
        <div className='max-w-80'>
          <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
          <p className='text-sm'>
            Experience unparalleled luxury and comfort with RooMantra, your trusted partner in exclusive accommodations worldwide.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            {/* Social Icons */}
            <img src={assets.instagramIcon} alt='instagram-icon' className='w-6 h-6 cursor-pointer hover:scale-110 transition-all'/>
            <img src={assets.facebookIcon} alt='facebook-icon' className='w-6 h-6 cursor-pointer hover:scale-110 transition-all'/>
            <img src={assets.twitterIcon} alt='twitter-icon' className='w-6 h-6 cursor-pointer hover:scale-110 transition-all'/>
            <img src={assets.linkendinIcon} alt='linkedin-icon' className='w-6 h-6 cursor-pointer hover:scale-110 transition-all'/>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className='font-playfair text-lg text-gray-800 font-medium'>COMPANY</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>About</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Careers</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Press</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Blog</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Partners</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <p className='font-playfair text-lg text-gray-800 font-medium'>SUPPORT</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Help Center</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Safety Information</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Cancellation Options</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Contact Us</a></li>
            <li><a href="#" className='hover:text-indigo-600 transition-colors'>Accessibility</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className='max-w-80'>
          <p className='font-playfair text-lg text-gray-800 font-medium'>STAY UPDATED</p>
          <p className='mt-3 text-sm'>
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className='flex items-center mt-4'>
            <input 
                type="text" 
                className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none text-sm w-full' 
                placeholder='Your email' 
            />
            <button className='flex items-center justify-center bg-black hover:bg-gray-800 transition-colors h-9 w-9 aspect-square rounded-r cursor-pointer'>
              <img src={assets.arrowIcon} alt='arrow-icon' className='w-3.5 invert'/>
            </button>
          </div>
        </div>
      </div>

      <hr className='border-gray-300 mt-8' />

      {/* Copyright Section */}
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm'>
        <p>© {new Date().getFullYear()} RooMantra. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#" className='hover:text-gray-800'>Privacy</a></li>
          <li><a href="#" className='hover:text-gray-800'>Terms</a></li>
          <li><a href="#" className='hover:text-gray-800'>Sitemap</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer