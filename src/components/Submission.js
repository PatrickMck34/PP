import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import * as ProviderActions from "../store/provider.js"
function Submission () {
    const dispatch= useDispatch()
    const history = useNavigate()
const submission = useSelector((state) => state.provider?.provider2)
const zip = useSelector((state) => state.provider?.zipCode)
const name = useSelector((state) => state.provider?.name)
const address = useSelector((state) => state.provider?.address)
const phone = useSelector((state) => state.provider?.phone)

const handleSubmit=()=> {
dispatch(ProviderActions.createProvider({submission, name, address, zip, phone})).then(() => history("/"))
}


    return (
        <div className="">
            <div className=" mt-5 h-fit rounded-xl mb-2 border-2 border-slate-700 bg-teal-600 w-full mx-auto flex flex-col text-center justify-center text-2xl text-pink-50">
           Your Listing
                </div>
                <div className="border-2 h-fit border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
            { <p className="text-2xl justify-center flex items-center">{name}</p>}
            {address && <p>Address: {address[0]}</p>}
             {address[1] + " ," + " " + address[2]} 
            {zip && <p>Zip Code: {zip}</p>}
            {phone && <p>Phone: {phone}</p>}
           <span className="bg-teal-600 h-1 w-full mt-5 mb-2"></span>
            <h1 className="bg-teal-600 text-pink-50 border-2 rounded p-1 w-full items-center justify-center flex border-slate-700">Expertise</h1>
           <span className="bg-teal-600 mt-2 h-1 w-full"></span>
            
            <span className="text-black  flex-col grid grid-cols-2
             w-full">
               {Object.entries(submission).map(([key, value]) => {
                   if (value === true) {
                       return <p key={key} className="w-fit h-fit text-center justify-around  text-teal-600 ">{key}</p>;
                    }
                    return null;
                })}
              
           </span>
          </div>
          <div className="w-full flex items-center justify-center">
                <Link to="/">

           <button className="bg-teal-600 border-2 border-slate-600 shadow-xl shadow-slate-600 rounded-xl p-1 mt-5 text-pink-50" type="submit" onClick={handleSubmit}>Submit for Approval</button>
                </Link>
          </div>
        </div>
    )
}
export default Submission