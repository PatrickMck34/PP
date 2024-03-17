import React, { useEffect, useRef, useState } from 'react';
import {Link, useLocation} from "react-router-dom"
import { HomeIcon } from '@heroicons/react/solid';
function Header () {
    const [timeLeft, setTimeLeft] = useState(300); // Time left in seconds
    const [isExtended, setIsExtended] = useState(false);
    const timer = useRef(null);
  
    const resetTimer = () => {
        if (timer.current) {
            clearTimeout(timer.current);
          }
          setTimeLeft(300)
          timer.current = setTimeout(() => {
            window.location.href = 'https://www.google.com';
          }, timeLeft * 1000); // Convert to milliseconds
        };
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      }
    const extendTimeout = () => {
      setIsExtended(true);
      setTimeLeft(300);
    };
  
    useEffect(() => {
      if (timeLeft > 0) {
        const id = setTimeout(() => setTimeLeft(timeLeft -1), 1000);
        return () => clearTimeout(id);
      }
    }, [timeLeft]);
  
    useEffect(() => {
      document.addEventListener('click', resetTimer);
      resetTimer(); // Start the timer for the first time
  
      return () => {
        document.removeEventListener('click', resetTimer);
        if (timer.current) {
          clearTimeout(timer.current);
        }
      };
    }, []);
  

    const location = useLocation();

    // Don't render the header on the /excludePage route
    if (location.pathname === '/' || location.pathname === '/start' || location.pathname === '/admin/home' || location.pathname === '/admin/approvals') {
      return null;
    }
    return (
        <div className="flex flex-col w-full ml-4">
            <div className="flex flex-row w-full ">

            <Link to={"/"}>
            <HomeIcon className="h-6 w-6 text-teal-400 bg-blue-100 rounded-xl" />
            {/* <button className=" flex flex-col items-center text-center font-serif shadow-md shadow-slate-400 p-2  border-2 border-gray-400  bg-teal-600 text-pink-50 justify-center rounded-2xl text-sm mt-2"> Home</button> */}
            </Link>
            <div className="flex ml-5 text-sm">

               Redirect in: {formatTime(timeLeft)} 
        {!isExtended && <button onClick={extendTimeout} className="bg-teal-600 text-pink-50 rounded-xl ml-5 p-1 ">Extend Timeout</button>}
            </div>
            </div>
        </div>
    )
}
export default Header