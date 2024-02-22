import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

function Section2 () {
    const dispatch = useDispatch()
    const [section2, setSection2] = React.useState({
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
        document.getElementById("dom").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, domesticViolence: true }); 
    }
    function LGBTQ() {
        document.getElementById("LGBTQ").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, LGBTQ: true }); 
    }
    function crisisResources() {
        document.getElementById("crisis").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, crisisResources: true }); 
    }
    function humanTrafficking() {
        document.getElementById("human").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, humanTrafficking: true }); 
    }
    function military() {
        document.getElementById("military").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, military: true }); 
    }
    function police() {
        document.getElementById("police").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, police: true }); 
    }
    function maleSurvivor() {
        document.getElementById("male").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, maleSurvivor: true }); 
    }
    function childSurvivor() {
        document.getElementById("child").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, childSurvivor: true }); 
    }
    function AllResources() {
        document.getElementById("all").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, allResources: true }); 
    }
    useEffect(() => {
        dispatch({ type: 'SET_SECTION2', payload: section2 });
    
    }, [section2])
console.log(section2)
    return (
       <div className="text-2xl ">
            <h1 className="text-5xl justify-center font-serif  flex mt-5">Second Step</h1>
        <div className="flex justify-center mt-5">
            <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 font-serif   rounded-xl p-1  w-36" id="dom" onClick={domV}>Domestic Violence</button>

            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="LGBTQ" onClick={LGBTQ}>LGBTQ</button>
          
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-[rgb(166,153,120)] border-2 border-slate-400 shadow-md shadow-slate-400 font-serif mr-1 rounded-xl p-1  h-20 w-36" id="crisis" onClick={crisisResources}>Crisis Resources</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="human" onClick={humanTrafficking}>Human Trafficking</button>
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-[rgb(166,153,120)] border-2 border-slate-400 -700 shadow-md shadow-slate-400 font-serif mr-1 h-20 rounded-xl p-1 w-36" id="military" onClick={military}>Military</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="police" onClick={police}>Police</button>
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-teal-600 shadow-md border-2 border-teal-700  shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="male" onClick={maleSurvivor}>Male Survivor</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="child" onClick={childSurvivor}>Child Survivor</button>
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="all" onClick={AllResources}>All Resources</button>
            
        </div>
  
        </div>
    )
}
export default Section2