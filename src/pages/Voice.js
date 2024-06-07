import React, { useState, useEffect } from 'react'
import { MdOutlineNotStarted } from "react-icons/md";
import { FaRegStopCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Card from '../components/Card';
import { useFirebase } from '../context/Firebase';

const Voice = () => {
    const firebase = useFirebase();

    const [message, setMessage] = useState();

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (message) { // Check if message is not undefined or empty
            await firebase.handleMessage(message); // Assuming handleMessage sets the message in Firestore
            setMessage(""); // Reset the message state after sending
        } else {
            console.error("Message is undefined or empty");
        }
    }

    const [isListening, setIsListening] = useState(false);
    const {
        transcript,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        setMessage(transcript);
    }, [transcript]);

    const handleStartListening = () => {
        SpeechRecognition.startListening({ continuous: true });
        setIsListening(true);
    };

    const handleStopListening = () => {
        SpeechRecognition.stopListening();
        setIsListening(false);
    };

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }


    return (
        <div className="flex flex-row bg-white h-screen w-screen">
            <div className="w-3/5 h-screen flex justify-center items-center">
                <Card />
                <form onSubmit={handleSendMessage} className="mb-4">
                    <div className="fixed bottom-0 left-0 w-3/5 bg-gray-100 px-4 py-2 flex items-center justify-between space-x-4">
                        <textarea
                            value={transcript}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        ></textarea>
                        <button className="px-5 py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-fit">Post</button>
                    </div>
                </form>
            </div>
            <div className="w-px h-screen bg-gray-400"></div>
            <div className="w-2/5 h-screen flex flex-col">
                <h2 className="font-semibold mt-3 text-3xl text-center">Speech To Text</h2>
                <p className="text-gray-600 mb-6 text-center mt-8">Effortlessly transcribe spoken language into written form, simplifying communication through advanced voice recognition.</p>
                <div className="w-5/6 h-5/6 bg-white rounded-lg shadow-md mb-6 ml-16">{transcript}</div>
                <div className="flex flex-row gap-1 ml-32 mb-9">
                    <button className="text-6xl text-green-300 hover:bg-white rounded-full cursor-pointer" onClick={handleStartListening} disabled={isListening}><MdOutlineNotStarted /></button>
                    <button className="text-5xl text-green-300 hover:bg-white rounded-full cursor-pointer" onClick={handleStopListening} disabled={!isListening}><FaRegStopCircle /></button>
                    <button className="text-5xl text-green-300 hover:bg-white rounded-full cursor-pointer" onClick={resetTranscript}><GrPowerReset /></button>
                </div>

            </div>
        </div>
    )
}

export default Voice