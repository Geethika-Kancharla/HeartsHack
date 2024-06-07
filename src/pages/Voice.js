import React from 'react'
import { MdOutlineNotStarted } from "react-icons/md";
import { FaRegStopCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Voice = () => {
    return (
        <div className="flex bg-white h-screen w-screen">
            <div className="w-3/5 h-screen flex justify-center items-center">

            </div>
            <div className="w-px h-screen bg-gray-400"></div>
            <div className="w-2/5 h-screen flex flex-col ">
                <h2 className="font-semibold mt-3 text-3xl text-center">Speech To Text</h2>
                <p className="text-gray-600 mb-6 text-center mt-8">Effortlessly transcribe spoken language into written form, simplifying communication through advanced voice recognition.</p>
                <div className="w-5/6 h-5/6 bg-white rounded-lg ml-12 shadow-md mb-6"></div>
                <div className="flex gap-2 ml-24">
                    <button className="text-7xl  text-green-300 hover:bg-white rounded-full"><MdOutlineNotStarted /></button>
                    <button className="text-6xl text-green-300 hover:bg-white rounded-full"><FaRegStopCircle /></button>
                    <button className="text-6xl text-green-300 hover:bg-white rounded-full"><GrPowerReset /></button>

                </div>
                <button className="px-5 py-3 w-fit m-9 ml-64 text-xl bg-blue-600 hover:border text-white rounded-lg">Post</button>
            </div>
        </div>
    )
}

export default Voice