import React from 'react'
import {Link, useLocation} from "react-router-dom"
function Header () {
    const location = useLocation();

    // Don't render the header on the /excludePage route
    if (location.pathname === '/' || location.pathname === '/start') {
      return null;
    }
    return (
        <div className="flex w-full ml-4">
            <Link to={"/"}>
            <button className=" flex flex-col items-center text-center font-serif shadow-md shadow-slate-400 p-2  border-2 border-gray-400  bg-teal-800 text-pink-50 justify-center rounded-2xl mt-2"> Home</button>
            </Link>
        </div>
    )
}
export default Header