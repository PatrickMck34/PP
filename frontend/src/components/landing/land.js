import React from 'react';
import { Link } from 'react-router-dom';

function Land() {
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div>
                <Link to="/start">
                    <button className="absolute w-[80%] md:w-[40%] lg:w-[30%]  ml-5 h-[20%] items-center justify-center mt-9 "></button>

                </Link>
                <img src="https://i.postimg.cc/gkb5HBRP/Landing2.png" alt="Loading...">
                </img>
                <a href="https://www.google.com">

                    <button className=" absolute w-[80%] md:w-[40%] mt-[-40%]  md:mt-[-20%] lg:mt-[-15%] lg:w-[30%] xl:mt-[-10%] h-[10%] ml-5  items-center justify-center   "></button>
                </a>
            </div>
        </div>
    )
}
export default Land