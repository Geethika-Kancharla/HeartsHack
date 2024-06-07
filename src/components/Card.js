import React from 'react'

const Card = ({ name, role, message, timeStamp }) => {

    function getFormattedTimestamp(timestampSeconds) {
        const date = new Date(timestampSeconds * 1000);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6 m-3 relative">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-sm text-gray-500 mb-4">{role}</p>
            <p className="text-base text-gray-700">{message}</p>
            <p className='absolute bottom-0 right-0 flex justify-end items-end text-sm text-gray-500 p-2'>{getFormattedTimestamp(timeStamp)}</p>
        </div>
    )
}

export default Card