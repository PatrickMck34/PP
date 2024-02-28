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
        lawEnforcement: false,
        elderSurvivor: false,
        childSurvivor: false,
        allResources: false,
        legalAdvice: false,
        forensicExams: false,
        generalHealth: false,
        pregnancy: false,
        housing: false,
        collegeOnCampus: false,
        title9: false,
        tribal: false,
        coalition: false,
        std: false,
        hivSupport: false
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
    function lawEnforcement() {
        document.getElementById("lawEnforcement").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, lawEnforcement: true }); 
    }
    function elderSurvivor() {
        document.getElementById("elder").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, elderSurvivor: true }); 
    }
    function childSurvivor() {
        document.getElementById("child").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, childSurvivor: true }); 
    }
    function AllResources() {
        document.getElementById("all").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, allResources: true }); 
    }
    function legalAdvice() {
        document.getElementById("legalAdvice").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, legalAdvice: true }); 
    }
    
    function forensicExams() {
        document.getElementById("forensicExams").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, forensicExams: true }); 
    }
    
    function generalHealth() {
        document.getElementById("generalHealth").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, generalHealth: true }); 
    }
    
    function pregnancy() {
        document.getElementById("pregnancy").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, pregnancy: true }); 
    }
    
    function housing() {
        document.getElementById("housing").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, housing: true }); 
    }
    
    function collegeOnCampus() {
        document.getElementById("collegeOnCampus").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, collegeOnCampus: true }); 
    }
    
    function title9() {
        document.getElementById("title9").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, title9: true }); 
    }
    
    function tribal() {
        document.getElementById("tribal").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, tribal: true }); 
    }
    
    function coalition() {
        document.getElementById("coalition").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, coalition: true }); 
    }
    
    function std() {
        document.getElementById("std").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, std: true }); 
    }
    
    function hivSupport() {
        document.getElementById("hivSupport").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, hivSupport: true }); 
    }
    
    function immigrants() {
        document.getElementById("immigrants").style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, immigrants: true }); 
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
          
       
        <button className=" bg-[rgb(166,153,120)] border-2 border-slate-400 shadow-md shadow-slate-400 font-serif mr-1 rounded-xl p-1  h-20 w-36" id="crisis" onClick={crisisResources}>Crisis Resources</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="human" onClick={humanTrafficking}>Human Trafficking</button>
        </div>
        
        <div className="mt-1 flex justify-center">
        <button className=" bg-[rgb(166,153,120)] border-2 border-slate-400 -700 shadow-md shadow-slate-400 font-serif mr-1 h-20 rounded-xl p-1 w-36" id="military" onClick={military}>Military</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="lawEnforcement" onClick={lawEnforcement}>Law Enforcement</button>
        </div>
        <div className="mt-1 flex justify-center">
        <button className=" bg-teal-600 shadow-md border-2 border-teal-700  shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="elder" onClick={elderSurvivor}>Elder Survivor</button>
            <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="child" onClick={childSurvivor}>Child Survivor</button>
     
        <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="all" onClick={AllResources}>All Resources</button>
            
        </div>
  
        <div className="flex justify-center mt-1 ">

        <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="legalAdvice" onClick={legalAdvice}>Legal Advice</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="forensicExams" onClick={forensicExams}>Forensic Exams</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="generalHealth" onClick={generalHealth}>General Health</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="pregnancy" onClick={pregnancy}>Pregnancy</button>
        </div>
        <div className="flex justify-center mt-1 ">

<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="housing" onClick={housing}>Housing</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="collegeOnCampus" onClick={collegeOnCampus}>College On Campus</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="title9" onClick={title9}>Title 9</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="tribal" onClick={tribal}>Tribal</button>
        </div>
        <div className="flex justify-center mt-1 ">
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="coalition" onClick={coalition}>Coalition</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="std" onClick={std}>STD</button>
<button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="hivSupport" onClick={hivSupport}>HIV Support</button>
            
        </div>
  
        </div>
    )
}
export default Section2