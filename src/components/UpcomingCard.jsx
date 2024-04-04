import React from 'react';
const UpcomingCard = ({ event }) => {
    const { eventName, cityName, date, weather, distanceKm, imgUrl } = event;
    const getImage = (rawURL) => {
        const RAW_URL1 = rawURL.split("/d/");
        const RAW_URL2 = RAW_URL1[1].split("/view");
        const IMAGE_ID = RAW_URL2[0];
        return `https://drive.google.com/thumbnail?id=${IMAGE_ID}`;
    };
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }
    function formatWeather(weatherString) {
        return weatherString.replace(/-?\d+/g, function (match) {
            return match + "°";
        });
    }
    return (
        <div className="relative bg-white rounded-lg shadow-md">
           
            <div className="relative">
                <img src={getImage(imgUrl)} alt={eventName} className="w-full h-auto mb-4 rounded-md" />
                <p className="text-white absolute bottom-0 left-0 right-0 text-sm rounded-md bg-black bg-opacity-50 p-2">{formatDate(date)}</p>
            </div>
            <h2 className="text-xl font-semibold mb-2 px-4">{eventName}</h2>
            <div className='flex justify-between p-4'>
                <p className="text-gray-500 mb-2">{cityName}</p>
                <p className="text-gray-500 mb-2">{formatWeather(weather)} | {parseInt(distanceKm)}Km</p>
            </div>
        </div>

    );
};

export default UpcomingCard;
