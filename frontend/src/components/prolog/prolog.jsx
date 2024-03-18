import React from 'react'
import { Link } from 'react-router-dom'
function Prolog() {
    return (
        <>
            <div className="flex justify-center items-center flex-col">

                <img src="https://i.ibb.co/sJ7MhrR/Land.png" alt="Loading Logo" className="h-48 " />

                <Link to={"/signup"} >

                    <button className="bg-[rgb(221,163,112)] rounded-xl p-1 border-2 mt-2 border-amber-800  w-36"> Register</button>
                </Link>

                <a href="/login" className="bg-[rgb(221,163,112)] rounded-xl p-1 text-center border-2 border-amber-800 mt-2 w-36">Login</a>
            </div>

        </>
    )
}
export default Prolog