import React from "react";
import Chat from "./chat.js"
import {useEffect} from "react"
import { useState } from "react";
import { Link } from "react-router-dom";


function Landing() {
    let msgs = "Hello how can I help you?"
    let japanese = "Konni chiwa! Watashi wa anata no tasukeru koto ga dekimasu ka?'"
    let german = "Wilokommen! Wie kann ich Ihnen helfen?"
    let spanish = 'Yo soy tu amiga virtual. ¿Cómo puedo ayudarte?'
    let lan = german
    
    
    const [language, setLanguage] = useState("Hi, my name is Persephone your virtual friend. How can I help you?  ")
    const German = (e) => {
     
        setLanguage(german)
    }
    const Spanish = (e) => {
 
       setLanguage(spanish)
    }
    const Japanese = (e) => {
    
       setLanguage(japanese)
    }
    useEffect(() => {
        if(1===1) {

    }}, [language])
  return (
  <>
<div className="flex justify-center   mx-auto w-full text-2xl">
  <Link to="/signup">
  <button className=" mt-2 w-36 h-9 mr-1  border-2 border-teal-700 bg-teal-600  rounded-xl text-center text-pink-50  font-['Jomolhari']">Provider</button>
  </Link>
  <Link to="/help2">
  <button className=" mt-2 w-36 h-9 mr-1 border-2 border-teal-700  bg-teal-600  rounded-xl text-center text-pink-50  font-['Jomolhari']">Help</button>
  </Link>
</div>

<div className="flex flex-col w-full">

  <img className=" items-center justify-center  mx-auto" src="https://i.ibb.co/sJ7MhrR/Land.png" alt="Loading Logo" />


  


  
  
  <div className="NeedToTalk mt-4 flex justify-center text-center text-black text-2xl font-normal font-['Khula']">Need To Talk?</div>



  
  


   <Chat language={language}/>
  
<div className="flex flex-row justify-center  w-full  mt-[4em]">

   <button className=" p-[8px] bg-teal-600 mr-4 border-2  border-teal-700   justify-around  mt-8  w-24   flex  rounded-xl h-fit  text-center text-pink-50  font-['Jomolhari']" onClick={German}>German</button>
   <button className=" p-[8px] bg-teal-600 mr-4  border-2 border-teal-700 justify-around mt-8  w-24  flex   rounded-xl h-fit  text-center  text-pink-50   font-['Jomolhari']" onClick={Spanish}>Spanish</button>
   <button className=" p-[8px] bg-teal-600  border-2 border-teal-700  justify-around mt-8  w-24  rounded-xl h-fit flex  text-center  text-pink-50 font-['Jomolhari']" onClick={Japanese}>Japanese</button>
</div>
  </div>

  
   
  </>  
  )
}
  export default Landing