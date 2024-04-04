import React, { useState, useEffect } from 'react'
import UpcomingCard from './UpcomingCard';
import { Import, MoveRight } from 'lucide-react';
import Loader from './Loader';
const UpcomingEvents = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const code = import.meta.env.VITE_CODE;
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {

            
            const response = await fetch(
                `${code}==&page=1&type=upcoming`
            );
            const data = await response.json();
            // console.log("Upcoming data:", data?.events);
            setEvents((prevEvents) => [...prevEvents, ...data?.events]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };
    const handleScroll = () => {
        const isCloseToBottom = document.documentElement.scrollHeight - window.innerHeight - document.documentElement.scrollTop < 100;
        if (isCloseToBottom) {
            fetchData();
        }
    };
    
    return (
        <div>
             <div className='font-bold text-black md:px-20 p-4 cursor-pointer'>
                <div className='flex gap-2'>
                    <p>Upcoming Events</p>
                    <MoveRight color="#737373" absoluteStrokeWidth />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 cursor-pointer lg:grid-cols-3 gap-4 md:px-20 p-4">
                {events.map((event, index) => (
                    <UpcomingCard key={index} event={event} />
                ))}
            </div>
            {loading && <Loader/>}
        </div>
    )
}

export default UpcomingEvents
