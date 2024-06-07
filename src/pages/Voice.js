import React from 'react'

const Voice = () => {
    return (
        <div className="flex bg-white h-screen w-screen">
            <div className="w-3/5 h-screen flex justify-center items-center">

            </div>
            <div className="w-px h-screen bg-gray-400"></div>
            <div className="w-2/5 h-screen flex flex-col justify-center items-center">
                <h2 className="text-lg font-semibold mb-4">Heading</h2>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec odio vitae felis pharetra aliquam.</p>
                <div className="w-32 h-32 bg-white rounded-lg shadow-md mb-6"></div>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Button 1</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Button 2</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Button 3</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Button 4</button>
                </div>
            </div>
        </div>
    )
}

export default Voice