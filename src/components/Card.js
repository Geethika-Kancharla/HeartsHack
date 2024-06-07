import React from 'react'

const Card = (props) => {
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6 m-3 relative">
            <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{props.role}</p>
            <p className="text-base text-gray-700">{props.message}</p>
            <p className='absolute bottom-0 right-0 flex justify-end items-end text-sm text-gray-500 p-2'>{props.timeStamp}</p>
        </div>
    )
}

export default Card