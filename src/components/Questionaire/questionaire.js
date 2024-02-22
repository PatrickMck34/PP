import React from "react";
import { Link } from "react-router-dom";

function Questions (){
   const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div className="flex flex-col">

        <div className="flex w-full 
         scroll-auto flex-col ">
            <h1 className="text-4xl justify-center flex mt-5">First Step</h1>
            <div className="flex items-center justify-center flex-col">

            <button className="bg-teal-600 w-48 text-xl p-1 justify-center rounded-lg mt-5">GeoLocation</button>
            <button className="bg-teal-600 w-48 text-xl p-1 justify-center rounded-lg mt-2">Organization Code</button>
            <button className="bg-teal-600 w-48 text-xl p-1 justify-center rounded-lg mt-2">Type a zip code</button>
            </div>

            <h1 className="text-4xl justify-center flex mt-5">Second Step</h1>
            <div className="flex justify-center">
                <button className=" bg-teal-600 mr-1 h-10 rounded-xl p-1 w-36">Domestic Violence</button>
                <Link to="/help2">

                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">LGBTQ</button>
                </Link>
            </div>
            <div className="mt-1 flex justify-center">
            <button className=" bg-[rgb(166,153,120)] mr-1 h-10 rounded-xl p-1 w-36">Crisis Resources</button>
                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">Human Trafficking</button>
            </div>
            <div className="mt-1 flex justify-center">
            <button className=" bg-[rgb(166,153,120)] mr-1 h-10 rounded-xl p-1 w-36">Military</button>
                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">Police</button>
            </div>
            <div className="mt-1 flex justify-center">
            <button className=" bg-teal-600 mr-1 h-10 rounded-xl p-1 w-36">Male Survivor</button>
                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">Child Survivor</button>
            </div>
            <div className="mt-1 flex justify-center">
            <button className=" bg-teal-600 mr-1 h-10 rounded-xl p-1 w-36">All Resources</button>
                
            </div>
        </div>
        <h1 className="text-4xl justify-center flex mt-5">Last Step</h1>
            <div className="flex justify-center">
                <button className=" bg-teal-400 mr-1 h-10 rounded-xl p-1 w-36">Confidential</button>
                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">Non-Confidential</button>
            </div>
            <div className="mt-1 flex justify-center">
            <button className=" bg-teal-400 mr-1 h-10 rounded-xl p-1 w-36">Health Center</button>
                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">DV Program</button>
            </div>
            <div className="mt-1 flex justify-center">
            <button className=" bg-teal-400 mr-1 h-10 rounded-xl p-1 w-36">Psych Program</button>
                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">Police</button>
            </div>
            <div className="mt-1 flex justify-center">
            
                <button className=" bg-teal-600 h-10 rounded-xl p-1 w-36">Advocacy Program</button>
            </div>
            <div className="mt-1 flex justify-center">
            <button className=" bg-[rgb(221,163,112)] mr-1 h-10 rounded-xl p-1 w-36">Fact Sheet</button>
                <button className=" bg-[rgb(166,153,120)] mr-1  h-10 rounded-xl p-1 w-36">Lightbulb</button>
                <button className=" bg-[rgb(221,163,112)]
                
                \h-10 rounded-xl p-1 w-36">Alt. Care</button>
            </div>
            <div>
                <span className="text-xl text-center bg-zinc-400 justify-center flex mt-5  ">FEW FACTS:
</span>
<p className="bg-[rgb(166,153,120)]  p-1
">

72 HOURS FOR POST EXPOSURE PROPHYLAXIS
120 HOURS TO RECIEVE AN EVIDENTARY EXAM
</p>
            </div>
        </div>
      
    )

    
}
export default Questions