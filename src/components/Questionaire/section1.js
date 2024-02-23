import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import Geolocation from "../geolocation.js"
import {useState} from "react"
import getZipCode from '../zipcode.js'
import { useDispatch } from 'react-redux'
import axios from 'axios'
function Section1 () {
    const dispatch = useDispatch()
    const [location, setLocation] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    const handleGeolocation = async () => {
        const result = await Geolocation();
        setLocation(result);
        console.log(zipCode)
    }

        useEffect(() => {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=7cbd2a04b71f4e18be968106abe02835`);
                const address = response.data.results[0].components;
                setZipCode(address.postcode);
            });
        }, []);
    useEffect(() => {
        dispatch({ type: 'SET_ZIPCODE', payload: zipCode });
    }, [zipCode])
    return (
        <>
        <div className="flex w-full  scroll-auto flex-col ">
        <h1 className="text-6xl font-serif justify-center flex mt-5">First Step</h1>
        <div className="flex items-center justify-center flex-col ">
           
           
           <button className="bg-teal-600 font-serif shadow-md shadow-slate-400 h-24 w-60 text-2xl p-1 justify-center rounded-2xl mt-2">Your zip code
           <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-36  p-2  mt-1 border-2 h-8 border-gray-400 " />
           </button>
        {/* {location && <p>{location}</p>} */}
     
           </div>
           </div>
            </>
    )
}
export default Section1