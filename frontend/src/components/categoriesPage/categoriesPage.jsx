import React, {useState, useContext} from 'react';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import sunflower from "../../resources/sunflower.png"
import { SunflowerContext } from '../sunflowerContext/sunflowerContext';
function Categories () {

    const dispatch = useDispatch()
    const [category, setCategory] = React.useState({
        Legal: false,
        Psychology: false,
        Health: false,
        Crisis: false
    })
    const {showTooltips, toggleTooltips} =useContext(SunflowerContext)


    function update(key) {
        document.getElementById(key).style.backgroundColor = "rgb(50,75,50)";
        setCategory({ ...category, [key]: true });
    }
    useEffect(() => {
        dispatch({ type: 'SET_CATEGORY', payload: category });

    }, [category])
    return (
        <div>
            {/* <img src={sunflower} alt="Sunflower" onClick={toggleTooltips} /> */}
  <h1 className="text-5xl justify-center font-serif flex mt-5">What kind of help do you need?</h1>
      <div className="flex justify-center mt-5">
        <div className="group relative">
          <button className="bg-yellow-700 border-2 border-teal-700 shadow-md shadow-slate-400 mr-1 font-serif rounded-xl p-1 h-20 w-36" id="Legal" onClick={()=>update("Legal")}>Legal
          <div className={`${showTooltips ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 border-2 border-black rounded-xl ml-5 bg-white text-black p-2 shadow-md shadow-slate-600 transition-opacity duration-500`}>Enforcment Resources</div>
          </button>
        </div>
  <div className="group relative">
    <div className="tooltips">

    <button className="bg-slate-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="Psychology" onClick={()=>update("Psychology")}>Psychology
    <div className={`${showTooltips ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 border-2 border-black rounded-xl ml-5 bg-white text-black p-2 shadow-md shadow-slate-600 transition-opacity duration-500`}>Psychological Resources</div>
    </button>
    </div>
                {/* <div className="hidden  group-hover:block absolute top-0 left-0 border-2 border-black rounded-xl ml-5 bg-white text-black p-2  shadow-md shadow-slate-600">Psych Resources</div> */}
  </div>
                
                <div className="group relative transition-delay-500 ">
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="Health" onClick={()=>update("Health")}>Health
                <div className={`${showTooltips ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 border-2 border-black rounded-xl ml-5 bg-white text-black p-2 shadow-md shadow-slate-600 transition-opacity duration-500`}>Healthcare Resources</div>
                </button>
                </div>
                <div className="group relative transition-delay-500 ">
                <button className="bg-slate-500/50 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="Crisis" onClick={()=>update("Crisis")}>Crisis
                <div className={`${showTooltips ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 border-2 border-black rounded-xl ml-5 bg-white text-black p-2 shadow-md shadow-slate-600 transition-opacity duration-500`}>Crisis Resources</div>
                </button>
                </div>
            </div>

        </div>
    )
}
export default Categories