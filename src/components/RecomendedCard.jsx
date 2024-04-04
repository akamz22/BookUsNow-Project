import React, { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react';
const RecomendedCard = ({ event }) => {

    const getImage = (rawURL) => {
        const RAW_URL1 = rawURL.split("/d/");
        const RAW_URL2 = RAW_URL1[1].split("/view");
        const IMAGE_ID = RAW_URL2[0];
        return `https://drive.google.com/thumbnail?id=${IMAGE_ID}`;
    };
    function formatWeather(weatherString) {
        return weatherString.replace(/-?\d+/g, function(match) {
            return match + "°";
        });
    }
    
    return (
        <div className='relative w-60 z-30'>
            <div className='bg-transparent'>
                <img src={getImage(event?.imgUrl)} alt="Image" className='transform mix-blend-darken w-full h-auto scale-140' />
            </div>
            <div className='absolute bottom-0 left-0 w-full'>
                <div className='flex justify-between p-4'>
                    <div className='flex flex-col'>
                        <h2 className='flex-shrink-0 text-[0.8rem]'>{event.eventName.split(' ').slice(0, 2).join(' ')}</h2>
                        <p className='flex items-center text-sm'>
                            <MapPin className='w-4 h-4' />
                            <span className='text-[0.5em]'>{event.cityName}</span>
                        </p>
                    </div>
                    <div className=' flex flex-col'>
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                        <p className='text-[0.5rem]'>{formatWeather(event.weather)} | {parseInt(event.distanceKm)}km</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RecomendedCard
