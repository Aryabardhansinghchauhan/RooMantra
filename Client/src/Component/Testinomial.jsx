import React from 'react'
import Title from './Title'
// 1. IMPORT YOUR DATA HERE (Make sure the name 'testimonials' matches your assets.js export)
import { testimonials, assets } from '../assets/assets' 


const Testinomial = () => {

    // 2. Helper Component (Updated to use dynamic 'card.text')
    const CreateCard = ({ card }) => (
        <div className="bg-white p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-80 shrink-0 border border-gray-100 flex flex-col justify-between h-auto">
            <div className="flex gap-2">
                <img className="size-11 rounded-full object-cover" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="font-semibold text-gray-900 text-sm">{card.name}</p>
                        {/* Blue checkmark icon */}
                        <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                    <div className="flex gap-1 mt-1">
                        {Array.from({length: card.rating}, (_, i) => (
                            <img key={i} src={assets.starIconFilled} alt='star' className="w-3 h-3" />
                        ))}
                    </div>
                </div>
            </div>
            
            
            {/* 3. DYNAMIC TEXT: This now uses the text from your asset file */}
            <p className="text-sm py-4 text-gray-700 leading-relaxed">
                {card.text || "No review text provided."}
            </p>

            <div className="flex items-center justify-between text-slate-500 text-xs mt-auto">
                <div className="flex items-center gap-1">
                    <span>Posted on</span>
                    <a href="#" className="hover:text-sky-500">
                        {/* X (Twitter) Icon */}
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-20 overflow-hidden'>
            <Title title="What Our Guests Say" subTitle="Discover why discerning travelers consistently choose RooMantra for their exclusive and luxurious accommodations around the world." />

            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-inner {
                    animation: marqueeScroll 40s linear infinite; /* Slowed down slightly for readability */
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }
                .marquee-row:hover .marquee-inner {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Row 1: Left to Right */}
            <div className="marquee-row w-full mx-auto max-w-[90rem] overflow-hidden relative mt-12">
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent"></div>
                
                {/* 4. MAPPING: We map 'testimonials' twice to create the infinite loop effect */}
                <div className="marquee-inner flex transform-gpu w-max py-4">
                    {[...testimonials, ...testimonials].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                
                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent"></div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="marquee-row w-full mx-auto max-w-[90rem] overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu w-max py-4">
                    {[...testimonials, ...testimonials].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent"></div>
            </div>

        </div>
    )
}

export default Testinomial