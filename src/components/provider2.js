import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

function Provider2 () {
    const dispatch = useDispatch()
    const [provider1, setProvider1] = React.useState({
        domesticViolence: false,
        LGBTQ: false,
        crisisResources: false,
        humanTrafficking: false,
        military: false,
        police: false,
        maleSurvivor: false,
        childSurvivor: false,
        allResources: false,
    });
    function domV() {
        document.getElementById("dom1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, domesticViolence: true }); 
    }
    function LGBTQ() {
        document.getElementById("LGBTQ1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, LGBTQ: true }); 
    }
    function crisisResources() {
        document.getElementById("crisis1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, crisisResources: true }); 
    }
    function humanTrafficking() {
        document.getElementById("human1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, humanTrafficking: true }); 
    }
    function military() {
        document.getElementById("military1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, military: true }); 
    }
    function police() {
        document.getElementById("police1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, police: true }); 
    }
    function maleSurvivor() {
        document.getElementById("male1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, maleSurvivor: true }); 
    }
    function childSurvivor() {
        document.getElementById("child1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, childSurvivor: true }); 
    }
    function AllResources() {
        document.getElementById("all1").style.backgroundColor = "rgb(166,220,220)";
        setProvider1({ ...provider1, allResources: true }); 
    }
    useEffect(() => {
        dispatch({ type: 'SET_PROVIDER', payload: provider1 });
    
    }, [provider1])
console.log(provider1)
    return (
       <div className="text-2xl ">
            <h1 className="text-5xl justify-center font-serif  flex mt-5">Second Step</h1>
            <span className="items-center justify-center flex">Please Select area of Expertise</span>
        <div className="flex justify-center mt-5">
            <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 font-serif   rounded-xl p-1  w-36" id="dom1" onClick={domV}>Domestic Violence</button>

            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="LGBTQ1" onClick={LGBTQ}>LGBTQ</button>
          
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-[rgb(166,153,120)] border-2 border-slate-400 shadow-md shadow-slate-400 font-serif mr-1 rounded-xl p-1  h-20 w-36" id="crisis1" onClick={crisisResources}>Crisis Resource</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="human1" onClick={humanTrafficking}>Human Trafficking</button>
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-[rgb(166,153,120)] border-2 border-slate-400 -700 shadow-md shadow-slate-400 font-serif mr-1 h-20 rounded-xl p-1 w-36" id="military1" onClick={military}>Military</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="police1" onClick={police}>Police</button>
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-teal-600 shadow-md border-2 border-teal-700  shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="male1" onClick={maleSurvivor}>Male Survivors</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="child1" onClick={childSurvivor}>Child Survivors</button>
        </div>
       
  
        </div>
    )
}
export default Provider2