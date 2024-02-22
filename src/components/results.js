import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

function Results () {
const results = useSelector((state) => state.section.section3)
const zip = useSelector((state) => state.section.zipCode)
const res = Object.values(results)
console.log(results)
useEffect(() => {
    if(1===1){
        console.log("hello")
    
    }
}, [results])
    return (
        <div className="">
            <h1 className="text-black text-2xl flex justify-center items-center flex-col mt-20 h-36 w-full">
               {Object.entries(results).map(([key, value]) => {
                if (value === true) {
                  return <p key={key}>{key}</p>;
                }
                return null;
              })}
              {zip}
           </h1>
        </div>
    )
}
export default Results