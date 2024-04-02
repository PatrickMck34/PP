import React from 'react';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

function Categories () {
    const dispatch = useDispatch()
    const [category, setCategory] = React.useState({
        Legal: false,
        Psychology: false,
        Health: false,
        Crisis: false
    })
    function update(key) {
        document.getElementById(key).style.backgroundColor = "rgb(50,75,50)";
        setCategory({ ...category, [key]: true });
    }
    useEffect(() => {
        dispatch({ type: 'SET_CATEGORY', payload: category });

    }, [category])
    return (
        <div>
 <h1 className="text-5xl justify-center font-serif  flex mt-5">What kind of help do you need?</h1>
            <div className="flex justify-center mt-5">

                <button className=" bg-yellow-700 border-2 border-teal-700 shadow-md shadow-slate-400 mr-1 font-serif rounded-xl p-1 h-20 w-36" id="Legal" onClick={()=>update("Legal")}>Legal</button>
                <button className="bg-slate-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="Psychology" onClick={()=>update("Psychology")}>Psychology</button>
                <button className="bg-teal-600 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="Health" onClick={()=>update("Health")}>Health</button>
                <button className="bg-slate-500/50 shadow-md border-2 border-teal-700 shadow-slate-400 mr-1 h-20 font-serif rounded-xl p-1 w-36" id="Crisis" onClick={()=>update("Crisis")}>Crisis</button>
            </div>

        </div>
    )
}
export default Categories