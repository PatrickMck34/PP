
import {useSelector, useDispatch} from "react-redux"
import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import { useState } from "react"
function Provider3 () {
    const messagesEndRef = useRef(null);
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const provider2 = useSelector(state => state.provider.provider)
    const [provider3, setProvider3] = React.useState({ ...provider2,
        confidential: false,
        nonConfidential: false,
        healthCenter: false,
        dvProgram: false,
        psychProgram: false,
        callpolice: false,
        advocacyProgram: false,
        factSheet: false,
        lightbulb: false,
        altCare: false,
    })

    function confidential() {
        document.getElementById("con").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3,  confidential: true }); 
    }
    function nonConfidential() {
        document.getElementById("non").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, nonConfidential: true }); 
    }
    function healthCenter() {
        document.getElementById("health").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, healthCenter: true }); 
    }
    function dvProgram() {
        document.getElementById("dv").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, dvProgram: true }); 
    }
    function psychProgram() {
        document.getElementById("psy").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, psychProgram: true }); 
    }
    function callpolice() {
        document.getElementById("call").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, callpolice: true }); 
    }
    function advocacyProgram() {
        document.getElementById("advocacy").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, advocacyProgram: true }); 
    }
    function factSheet() {
        document.getElementById("fact").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, factSheet: true }); 
    }
    function lightbulb() {
        document.getElementById("light").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, lightbulb: true }); 
    }
    function altCare() {
        document.getElementById("alt").style.backgroundColor = "rgb(166,220,220)";
        setProvider3({ ...provider3, altCare: true }); 
    }
    React.useEffect(() => {
        dispatch({ type: 'SET_PROVIDER2', payload: provider3 });
           
           
    }, [provider3])
    return (
        <>
<h1 className="text-6xl font-serif justify-center flex mt-5">Last Step</h1>
<div className="flex justify-center text-2xl mt-5">
    <button className=" bg-teal-400 border-2 border-teal-600 mr-1  font-serif h-20 rounded-xl p-1 w-36" id="con" onClick={confidential}>Confidential</button>
    <button className=" bg-teal-600 h-20 border-2 border-teal-700   font-serif rounded-xl p-1 w-36" id="non" onClick={nonConfidential}>Non-Confidential</button>
</div>
<div className="mt-1 flex justify-center text-2xl">
<button className=" bg-teal-400 border-2 border-teal-600 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="health" onClick={healthCenter}>Health Center</button>
    <button className=" bg-teal-600 border-2 border-teal-700 h-20 font-serif rounded-xl p-1 w-36" id="dv" onClick={dvProgram}>DV Program</button>
</div>
<div className="mt-1 flex justify-center text-2xl">
<button className=" bg-teal-400 border-2 border-teal-600 mr-1 h-20 font-serif  rounded-xl p-1 w-36" id="psy" onClick={psychProgram}>Psych Program</button>

    <button className=" bg-teal-600 border-2 border-teal-700 h-20 font-serif rounded-xl p-1 w-36 text-2xl" id="advocacy" onClick={advocacyProgram}>Advocacy Program</button>
</div>

<div className="mt-1 flex justify-center text-2xl">
<button className=" bg-[rgb(221,163,112)] border-2 border-slate-400  font-serif mr-1 h-20 rounded-xl p-1 w-36" id="fact" onClick={factSheet}>Fact Sheet</button>
    <button className=" bg-[rgb(166,153,120)] border-2 border-slate-400 font-serif  mr-1  h-20 rounded-xl p-1 w-36" id="light" onClick={lightbulb}>Lightbulb</button>
    <button className=" bg-[rgb(221,163,112)] border-2 border-slate-400 font-serif h-20 rounded-xl p-1 w-36" id="alt" onClick={altCare}>Alt. Care</button>
</div>
<div>
    <span className="text-xl font-serif text-center w-fit mx-auto mb-1 bg-zinc-400 justify-center flex mt-5 rounded shadow-sm shadow-slate-600  border-2 border-slate-600 ">Description:
</span>
<p className="bg-[rgb(149,141,120)] font-serif text-xl p-1 text-center  mx-auto w-fit
">
    <div className="flex flex-col h-12 border-2 items-center justify-center bg-gray-200 rounded-xl  border-gray-400 w-80 mx-auto ">

  
     <textarea className="w-72 overflow-auto flex flex-start p-2   justify-center  border-2 h-10 border-gray-400 " type="textarea" rows="5" cols="50" wrap="hard" value={description} placeHolder="Tell us about your company" onChange={(e) => setDescription(e.target.value)} />
   

  <div ref={messagesEndRef} />

<div>
  </div>

</div>
    </p>

</div>

        
        </>
        )
}
export default Provider3

