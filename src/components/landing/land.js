import React from 'react';
import { Link } from 'react-router-dom';

function Land () {
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div>
                <Link to="/start">
            <button className="absolute w-full h-full  items-center justify-center mt-9 "></button>
                    
                </Link>
           <img src="https://i.postimg.cc/gkb5HBRP/Landing2.png" alt="Loading...">
            </img>
            <a href="https://www.google.com">

           <button className=" absolute w-full h-[20%] items-center justify-center mt-[-40%] "></button>
            </a>
            </div>
        </div>
    )
}
export default Land