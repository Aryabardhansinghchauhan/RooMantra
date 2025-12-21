import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'

const Roomdetail = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const selectedRoom = roomsDummyData.find(item => item._id === id)
    if (selectedRoom) {
      setRoom(selectedRoom)
      setMainImage(selectedRoom.images[0])
    }
  }, [id])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* --- Header Section --- */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair font-semibold text-gray-800'>
            {room.hotel.name}
            <span className='font-inter text-base font-normal text-gray-500 ml-2'>({room.roomType})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-400 rounded-full'>20% OFF</p>
      </div>

      {/* --- Rating & Address --- */}
      <div className='flex flex-col gap-2 mt-2'>
        <div className='flex items-center gap-2'>
            <div className='flex'>
                {Array.from({ length: Math.floor(room.rating) }, (_, i) => (
                    <img key={i} src={assets.starIconFilled} alt='star' className='w-4 h-4' />
                ))}
            </div>
            <p className='font-medium text-gray-800'>{room.rating}</p>
            <p className='text-gray-500 text-sm ml-1'>| 200+ reviews</p>
        </div>
        <div className='flex items-center gap-1 text-gray-500 text-sm'>
            <img src={assets.locationIcon} alt='location-icon' className='w-4 h-4' />
            <span>{room.hotel.address}</span>
        </div>
      </div>

      {/* --- Image Gallery --- */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
        <div className='w-full'>
            <img 
                src={mainImage} 
                alt='Main Room' 
                className='w-full h-[400px] object-cover rounded-xl shadow-lg transition-all duration-300'
            />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 h-fit'>
            {room.images.length > 1 && room.images.map((image, index) => (
                <img 
                    onClick={() => setMainImage(image)} 
                    key={index} 
                    src={image} 
                    alt={`Thumbnail ${index}`} 
                    className={`w-full h-32 object-cover rounded-xl cursor-pointer shadow-md transition-all ${mainImage === image ? 'ring-2 ring-orange-400 opacity-100' : 'opacity-70 hover:opacity-100'}`}
                />
            ))}
        </div>
      </div>

      {/* --- Room Highlights & Price --- */}
      <div className='flex flex-col md:flex-row md:justify-between items-start mt-12 gap-8'>
        <div className='flex flex-col w-full md:w-2/3'>
          <h2 className='text-2xl font-playfair font-semibold text-gray-800'>Experience Luxury Like Never Before</h2>
          <p className='text-gray-500 mt-2 leading-relaxed'>
             Indulge in a stay defined by comfort and elegance. This room offers a perfect blend of modern amenities and classic charm, ensuring a memorable experience.
          </p>
          <div className='flex flex-wrap items-center mt-6 gap-3'>
            {room.amenities?.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 border border-gray-200'>
                {facilityIcons && facilityIcons[item] && <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>}
                <p className='text-sm text-gray-700 capitalize'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Card */}
        <div className='w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
            <p className='text-gray-500 text-sm'>Price per night</p>
            <p className='text-3xl font-bold text-gray-800 mt-1'>${room.pricePerNight}</p>
        </div>
      </div>

      {/* --- Check Availability Form --- */}
      <form className='flex flex-col lg:flex-row items-center justify-between bg-white shadow-xl p-6 rounded-xl mx-auto mt-16 max-w-6xl border border-gray-100'>
          
          <div className='flex flex-col md:flex-row items-center gap-6 w-full'>
            
            <div className='flex flex-col w-full'>
              <label htmlFor="checkInDate" className='font-medium text-gray-700 text-sm'>Check-In</label>
              <input type="date" id='checkInDate' className='w-full rounded border border-gray-300 px-3 py-2 mt-1 outline-none text-sm' required />
            </div>
            
            <div className='hidden md:block w-px h-12 bg-gray-300'></div>

            <div className='flex flex-col w-full'>
              <label htmlFor="checkOutDate" className='font-medium text-gray-700 text-sm'>Check-Out</label>
              <input type="date" id='checkOutDate' className='w-full rounded border border-gray-300 px-3 py-2 mt-1 outline-none text-sm' required />
            </div>

            <div className='hidden md:block w-px h-12 bg-gray-300'></div>

            <div className='flex flex-col w-full md:w-32'>
              <label htmlFor="guests" className='font-medium text-gray-700 text-sm'>Guests</label>
              <input type="number" id='guests' placeholder='1' min="1" className='w-full rounded border border-gray-300 px-3 py-2 mt-1 outline-none text-sm' required />
            </div>
          </div>

          <button type='submit' className='bg-black hover:bg-gray-800 active:scale-95 transition-all text-white rounded-lg w-full lg:w-auto mt-6 lg:mt-0 lg:ml-8 px-8 py-3 font-medium cursor-pointer'>
            Check Availability
          </button>
      </form>

      {/* --- Common Specifications --- */}
      <div className='mt-16 space-y-6'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-start gap-4'>
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6 h-6 mt-1' />
            <div>
              <p className='text-base font-semibold text-gray-800'>{spec.title}</p>
              <p className='text-gray-500 text-sm mt-1'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Description Box --- */}
      <div className='max-w-4xl border-y border-gray-200 my-12 py-8 text-gray-600 leading-relaxed text-sm md:text-base'>
        <p>Guests will be allocated on the ground floor according to the availability at the time of check-in. Special requests are subject to availability and cannot be guaranteed. You get a comfortable two-bedroom apartment that has a true city feeling. The price quoted is for two guests; at the guest slot please mark the number of guests to get the accurate price. You can request an extra bed at an additional cost of $20 per night.</p>
      </div>

      {/* --- Host Info --- */}
      <div className='flex flex-col items-start gap-4'>
        <div className='flex gap-4 items-center'>
          <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-16 md:w-16 rounded-full object-cover shadow-sm'/>
          <div>
            <p className='text-lg md:text-xl font-semibold text-gray-800'>Hosted By {room.hotel.name}</p>
            <div className='flex items-center mt-1 gap-2'>
                <div className='flex'>
                    {Array.from({ length: Math.floor(room.rating) }, (_, i) => (
                        <img key={i} src={assets.starIconFilled} alt='star' className='w-4 h-4' />
                    ))}
                </div>
                <p className='font-medium text-gray-800 text-sm'>{room.rating}</p>
                <p className='text-gray-500 text-xs ml-1'>| 200+ reviews</p>
            </div>
          </div>
        </div>
        <button className='px-6 py-2.5 mt-2 rounded-lg text-white bg-black hover:bg-gray-800 transition-all cursor-pointer font-medium shadow-md'>
          Contact Host
        </button>
      </div>

    </div>
  )
}

export default Roomdetail