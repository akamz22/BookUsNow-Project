import React, { useEffect, useState } from 'react'
import { MoveRight } from 'lucide-react';
import { MapPin } from 'lucide-react';
import RecomendedCard from './RecomendedCard';
const Recomended = () => {
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const code = import.meta.env.VITE_CODE;
  const getRecommended = async () => {
    try {
      const response = await fetch(`${code}==&type=reco`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // console.log(data);
      setRecommendedEvents(data?.events);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  useEffect(() => {
    getRecommended();
  }, []);
  return (
    <div className='md:w-[60vw] w-[80%] z-40'>
      <div className='flex justify-between text-white'>
        <div className='flex gap-2'>
          <p>Recomended Shows</p>
          <MoveRight color="#737373" absoluteStrokeWidth />
        </div>
        <div>
          <button className='border-b-2'>See All</button>
        </div>
      </div>
      <div className='text-white flex overflow-x-auto gap-4 no-scrollbar mt-4'>
        {recommendedEvents.map(event => (
          <div key={event.eventName} className='text-sm cursor-pointer'>
            <RecomendedCard event = {event}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recomended
