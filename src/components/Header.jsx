import React from 'react'
import { AlignJustify, Search, MapPin, ChevronRight, Heart, UserRound } from 'lucide-react'
const Header = () => {
    return (
        <div className='md:sticky md:top-0 z-50 bg-white'>
            <div className='flex justify-between md:px-4 pt-2 px-2 bg-white items-center'>
                <div className='text-[#CF2D2D] md:text-[27px] text-[1.5em] font-semibold cursor-pointer'>BookUsNow</div>
                <div className='flex gap-2'>
                    <div className='bg-gray-800 cursor-pointer md:flex items-center hidden text-white px-2 gap-2 py-1 rounded-md'>
                        <AlignJustify className='' />
                        <p className=''>Categories</p>
                    </div>
                    <div className='flex items-center rounded-md bg-white md:gap-2 md:border'>
                        <input placeholder='DJI phantom' type="text" className='outline-none hidden md:block md:w-[40vw] px-2' />
                        <Search className='m-2 hidden md:block text-gray-400' />
                    </div>
                </div>
                <div className='flex md:gap-4 gap-2 justify-center items-center'>
                    <Search className=' text-gray-400 md:hidden' />
                    <div className='flex gap-2'>

                        <Heart className='text-gray-400' />
                        <p className='hidden md:block text-[#1E2022]'>
                            Favourites
                        </p>
                    </div>
                    <button className='md:border rounded-md p-2'>
                        <p className='hidden md:block text-[#1E2022] cursor-pointer'>Sign In</p>
                        <UserRound className="md:hidden text-gray-400 cursor-pointer" />
                    </button>
                </div>
            </div>
            <div className='md:flex px-2 md:px-4 py-2 justify-between items-center'>
                <div className='flex justify-center flex-none items-center cursor-pointer'>
                    <MapPin className='mr-1 w-4 h-4' />
                    <p className='mr-1'>Mumbai, India</p>
                    <ChevronRight />
                </div>
                <div className='flex-grow font-semibold text-[#989090]  no-scrollbar flex overflow-x-auto items-center md:justify-center gap-4 m-2 md:m-1'>
                    <div className='flex-shrink-0'>Live Shows</div>
                    <div>Streams</div>
                    <div>Movies</div>
                    <div>Plays</div>
                    <div>Events</div>
                    <div>Sports</div>
                    <div>Activities</div>
                </div>
            </div>
        </div>
    )
}

export default Header
