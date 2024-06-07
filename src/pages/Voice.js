import React, { useState, useEffect } from 'react'
import { MdOutlineNotStarted } from "react-icons/md";
import { FaRegStopCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Card from '../components/Card';
import { useFirebase } from '../context/Firebase';
import Simplify from '../components/Simplify';

const Voice = () => {
    const firebase = useFirebase();

    const [message, setMessage] = useState();

    const [currMessages, setCurrMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from Firebase
                await firebase.getMessage();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Fetch data when component mounts
    }, [firebase]);

    useEffect(() => {
        if (firebase.currMessage) {
            // Sort messages by timeStamp
            const sortedMessages = firebase.currMessage.sort((a, b) => b.timeStamp?.seconds - a.timeStamp?.seconds);
            setCurrMessages(sortedMessages);
        }
    }, [firebase.currMessage]);


    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (message) {
            await firebase.handleMessage(message);
            setMessage('');
        } else {
            console.error("Message is undefined or empty");
        }
        await firebase.getMessage(firebase.user);
    };

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
            <div className="w-3/5 h-screen flex ">
                <div className="w-full bg-white overflow-y-auto p-4 mb-28">
                    {currMessages &&
                        currMessages.map((message, index) => (
                            <Card key={index} name={message.name} role={message.role} message={message.message}
                                timeStamp={message.timeStamp ? message.timeStamp.seconds : null} />
                        ))}
                </div>
                <form onSubmit={handleSendMessage} className="mb-4">
                    <div className="fixed bottom-0 left-0 w-3/5 bg-white shadow-md px-4 py-2 flex items-center justify-between space-x-4">
                        <textarea
                            value={transcript}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="The message goes as..."
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"                         ></textarea>
                        <button className="px-7 py-5 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-fit">Post</button>
                    </div>
                </form>
            </div>
            <div className="w-px h-screen bg-gray-400"></div>
            <div className="w-2/5 h-screen flex flex-col">
                <h2 className="font-semibold mt-3 text-3xl text-center">Speech To Text</h2>
                <p className="text-gray-600 mb-6 text-center mt-8">Effortlessly transcribe spoken language into written form, simplifying communication through advanced voice recognition.</p>
                <div className="w-5/6 h-5/6 bg-white rounded-lg shadow-md mb-6 ml-16">{transcript}</div>
                <div className="flex flex-row gap-1 ml-32 mb-9">
                    <button className="text-6xl text-green-300 bg-white hover:bg-white rounded-full cursor-pointer" onClick={handleStartListening} disabled={isListening}><MdOutlineNotStarted /></button>
                    <button className="text-5xl text-green-300 bg-white hover:bg-white rounded-full cursor-pointer" onClick={handleStopListening} disabled={!isListening}><FaRegStopCircle /></button>
                    <button className="text-5xl text-green-300 bg-white hover:bg-white rounded-full cursor-pointer" onClick={resetTranscript}><GrPowerReset /></button>
                </div>
                <Simplify input={transcript} />
            </div>
        </div>
    )
}

export default Voice