import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import getZipCode from "./zipcode";

function Geolocation() {
    const [location, setLocation] = useState(null);
    const [zipCode, setZipCode] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setZipCode(getZipCode(position.coords.latitude, position.coords.longitude).result);
            });
        }
    }, []); // Empty dependency array means this effect runs once on mount

          
            
}
    
    
   
          
    // useEffect(() => {
    //     if (location) {
    //       getZipCode(location.latitude, location.longitude)
    //         .then(zipCode => {
    //             setZipCode(zipCode)
             
    //         })
    //         .catch(error => {
    //           console.log('Error getting zip code:', error);
    //         });
    //     }
    //   }, [zipCode]);
    // return (
    //     <div className="flex justify-center mx-auto w-full text-2xl">
    //   {/* <button onClick={getLocation} className="mt-2 w-48 h-9 border-2 border-teal-700 bg-teal-600 rounded-xl text-center text-pink-50 font-['Jomolhari']">Get Location</button> */}
    //   {/* {location && <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>} */}
    //     {/* {zipCode && <p>Zip Code: {zipCode}</p>} */}
   
    // </div>
    // }

 
  
export default Geolocation