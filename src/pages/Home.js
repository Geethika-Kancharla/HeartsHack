import React, { useEffect, useState } from 'react';
import './Home.css';
import 'tailwindcss/tailwind.css';
import { IoHeart } from "react-icons/io5";
import { useFirebase } from '../context/Firebase'
import { Link } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";

const Home = () => {

    const firebase = useFirebase();
    const [isMenu, setMenu] = useState(false);


    const handleClick = () => {
        setMenu(!isMenu);
    }

    return (
        <>
            <div className="header h-screen">
                <div className="nav w-screen ">
                    <div>
                        <div className="name"><IoHeart className='text-red-600 w-12 h-12 transition-transform duration-1000 animate-pulse hover:scale-125' /></div>
                        <div className="logo">MediSimplify</div>
                        <div className="flex flex-row space-x-6 rounded-md">
                            <div className="button">
                                <a className='flex flex-row space-x-5' href="#">
                                    <div className='rounded-md p-2 px-6 text-lg border border-black hover:bg-black hover:text-white'><Link to="/about">About</Link></div>
                                    <div className='rounded-md p-2 px-6 text-lg border border-black hover:bg-black hover:text-white'><Link to="/voice">Speech</Link></div>
                                </a>
                            </div>
                            <div className='w-12 h-12 rounded-full relative flex items-center justify-center bg-green-700 hover:bg-blue-400 shadow-md cursor-pointer'>
                                <p className='text-white text-lg hover:text-black' onClick={handleClick}>{firebase.user?.email[0].toUpperCase()} </p>
                            </div>
                            {isMenu && (
                                <div className="absolute bg-white rounded shadow-lg p-4 mt-12 w-48 ">
                                    <div className="flex flex-col items-start gap-8 mt-2">
                                        <div className='flex flex-row space-x-2'>
                                            <Link> <button className="text-green-500 pl-6 hover:bg-white hover:text-red-600" onClick={firebase.handleLogout}>Logout </button></Link>
                                            <Link><button className="text-green-500 pl-2 hover:bg-white hover:text-red-600 text-lg" onClick={firebase.handleLogout}><IoLogOutOutline /></button></Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mainpage">
                    <div className="page">
                        <div className="heading">
                            <p>MEDI SIMPLIFY</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="info">
                        <div className="subheading">
                            <div>
                                <div>Clear Hearts <span>and</span> Healthier Lives</div>
                                <div>
                                    <div className="os">ABOUT US</div>
                                    <div className="defination">
                                        Welcome to MediSimplify - simplifying complex medical <br />reports
                                        into easy-to-understand language and providing <br />educational resources on cardiac health, self-care, and early symptom detection.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <div className="menu-heading">SERVICES</div>
                            <div>
                                <div className="deadlock">
                                    <a href="deadlockAlgo/deadlock.html">
                                        <div className="image">
                                            <div className="link">  </div>
                                            <div className="title">ABOUT</div>
                                        </div>
                                        <div className="text">
                                            <div className="text-heading">Need HELP ?</div>
                                            Discover the latest articles on cardiac health, covering topics such as prevention, treatment, lifestyle changes, and advancements in cardiology research.
                                        </div>
                                    </a>
                                </div>
                                <div className="sheduling">
                                    <Link to="/voice">
                                        <div className="image">
                                            <img src="" alt='med' />
                                            <div className="link"></div>
                                            <div className="title">TRANSLATE MEDICAL LANGUAGE</div>
                                        </div>
                                        <div className="text">
                                            <div className="text-heading">GO AHEAD!</div>
                                            Empowering patients by simplifying medical terminology,
                                            facilitating better understanding and informed decision-making.
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer" className="footer bg-gray-100">
                        <section className="text-gray-600 body-font relative">
                            <div className="container px-72 py-24 flex sm:flex-nowrap flex-wrap">
                                <div className="w-full h-screen  bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        className="absolute inset-0"
                                        frameBorder="0"
                                        title="map"
                                        marginHeight="0"
                                        marginWidth="0"
                                        scrolling="no"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.841674903467!2d77.59663257367053!3d12.91789551605626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16773e7dc413%3A0x350240386002607b!2sJayadeva%20Hospital!5e0!3m2!1sen!2sin!4v1717643207739!5m2!1sen!2sin"
                                    ></iframe>
                                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                        <div className="lg:w-1/2 px-6">
                                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                            <p className="mt-1">B-8, B T M I Stage, Marenahalli Rd, KEB Colony, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560041</p>
                                        </div>
                                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                            <a className="text-indigo-500 leading-relaxed" href="mailto:projayadevacardiology@gmail.com">projayadevacardiology@gmail.com</a>
                                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                            <p className="leading-relaxed">91-80-2297-7400</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 bg-grey-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 h-full bg-contain inset-0">


                                    <div className="relative mb-4">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-100">Name</label>
                                        <input type="text" id="name" name="name" className="w-full  text-gray-100 bg-gray-100  py-1 px-3  transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="email" className=" text-sm text-gray-100">Email</label>
                                        <input type="text" id="name" name="name" className="w-full rounded  text-gray-100 bg-gray-100  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-100">Message</label>
                                        <textarea id="message" name="message" className="w-full rounded  text-base outline-none text-gray-100 bg-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                    <button className=" border-0 py-2 px-6 bg-grey-100 text-gray-100 rounded text-lg">Button</button>
                                    <p className="text-xs text-gray-100 hover:bg-grey-100 mt-3"></p>
                                </div>
                            </div>
                            <div class="text-center text-green-400 border border-black flex flex-col space-y-2">
    <p> Copyright &copy; 2024 MediSimplify. </p>
    <p>Made With ❤️ By Three Coders.</p>
</div>

                           
                        </section>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;