import React from 'react'
import Banner from './../assets/banner.png'
import Recomended from './Recomended'
const Body = () => {
    return (
        // <div className='flex justify-center items-center'>
        //     <div className="relative w-full h-[86vh] flex flex-col justify-center items-center" style={{ backgroundImage: `url(${Banner})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        //         <div className="flex flex-col md:w-1/2 w-2/3 justify-center items-center text-center">
        //             <h1 className="md:text-4xl text-2xl font-bold text-white">Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
        //             <p className="text-sm text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, pro</p>
        //         </div>
        //     </div>
        //     <div className="absolute bottom-0">
        //         <Recomended />
        //     </div>
        // </div>
        <div className='flex justify-center items-center relative'>
            <div className="w-full h-[86vh] flex flex-col justify-center items-center" style={{ backgroundImage: `url(${Banner})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="flex flex-col md:w-1/2 w-2/3 justify-center items-center text-center">
                    <h1 className="md:text-4xl text-2xl font-bold text-white">Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
                    <p className="text-sm text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, pro</p>
                </div>
            </div>
            {/* <div className="absolute bottom-0">
                <Recomended />
            </div> */}
        </div>

    )
}

export default Body
