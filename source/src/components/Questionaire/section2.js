import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

function Section2() {
    const dispatch = useDispatch()
    const [section2, setSection2] = React.useState({
        // domesticViolence: false,
        // LGBTQ: false,
        // crisisResources: false,
        // humanTrafficking: false,
        // military: false,
        // lawEnforcement: false,
        // elderSurvivor: false,
        // childSurvivor: false,
        // allResources: false,
        // legalAdvice: false,
        // forensicExams: false,
        // generalHealth: false,
        // pregnancy: false,
        // housing: false,
        // collegeOnCampus: false,
        // title9: false,
        // tribal: false,
        // coalition: false,
        // std: false,
        // hivSupport: false
    });

    function updateSection2(key) {
        document.getElementById(key).style.backgroundColor = "rgb(166,220,220)";
        setSection2({ ...section2, [key]: true });
    }
    useEffect(() => {
        dispatch({ type: 'SET_SECTION2', payload: section2 });

    }, [section2])
    return (
        <div className="text-lg ">
            <h1 className="text-5xl justify-center font-serif  flex mt-5">Second Step</h1>
            <div className="flex justify-center mt-5">

                <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="LGBTQ" onClick={() => updateSection2("LGBTQ")}>LGBTQ</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="blindDeaf" onClick={() => updateSection2("blindDeaf")}>Blind/Deaf</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="disabled" onClick={() => updateSection2("disabled")}>Disabled</button>

            </div>

            <div className="mt-1 flex justify-center">
                <button className=" bg-teal-600 border-2 border-slate-400 -700 shadow-md shadow-slate-400 font-serif mr-1 h-20 rounded-xl p-1 w-36" id="military" onClick={() => updateSection2("military")}>Military</button>
                <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 h-20 font-serif rounded-xl p-1 w-36" id="childSurvivor" onClick={() => updateSection2("childSurvivor")}>Child Survivor</button>
                <button className=" bg-teal-600 shadow-md border-2 border-teal-700  shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="elderSurvivor" onClick={() => updateSection2("elderSurvivor")}>Elder Survivor</button>

            </div>
            <div className="mt-1 flex justify-center">
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="specialNeeds" onClick={() => updateSection2("specialNeeds")}>Special Needs</button>

                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="immigrants" onClick={() => updateSection2("immigrants")}>Immigrants</button>

                <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 font-serif   rounded-xl p-1  w-36" id="domesticViolence" onClick={() => updateSection2("domesticViolence")}>Domestic Violence</button>
            </div>
            <div className="flex justify-center mt-1 ">
                <button className=" bg-teal-600 border-2 border-teal-700 shadow-md shadow-slate-400 font-serif rounded-xl p-1 h-20 w-36" id="humanTrafficking" onClick={() => updateSection2("humanTrafficking")}>Human Trafficking</button>
                <button className=" bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="allResources" onClick={() => updateSection2("allResources")}>All Resources</button>
                <button className=" bg-teal-600 border-2 border-slate-400 shadow-md shadow-slate-400 font-serif mr-1 rounded-xl p-1  h-20 w-36" id="crisisResources" onClick={() => updateSection2("crisisResources")}>Crisis Resources</button>
            </div>

        </div>
    )
}
export default Section2