import React from "react";
import Chat from "../chatbot/chat.js"
import { useEffect } from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Landing() {
const history = useNavigate()
  const user = useSelector(state => state.session.user)

  const [language, setLanguage] = useState("Hi, my name is Persephone your virtual friend. How can I help you?  ")

  // useEffect(() => {
  //   if (user) {
  //     history("user/admin/1")

  //   }
  // }, [user])
  return (
    <>
      <div className="flex justify-center   mx-auto w-full text-2xl">
        <Link to="/prolog">
          <button className=" mt-2 w-36 h-9 mr-1  xl:mr-8 border-2 border-teal-700 bg-teal-600  rounded-xl text-center text-pink-50  font-['Jomolhari']">Provider</button>
        </Link>
        <Link to="/helper/intro">
          <button className=" mt-2  w-36  h-9 border-2   border-teal-700  bg-teal-600  rounded-xl text-center text-pink-50  font-['Jomolhari']">Help</button>
        </Link>
      </div>

      <div className="flex flex-col w-full">

        <img className=" items-center justify-center  mx-auto lg:w-[40%] w-[75%] max-w-md 2xl:max-w-2xl" src="https://i.ibb.co/sJ7MhrR/Land.png" alt="Loading Logo" />







        <div className="NeedToTalk mt-4 flex justify-center text-center text-black text-2xl xl:text-5xl  font-normal font-['Khula']">Need To Talk?</div>







        <Chat language={language} />


      </div>



    </>
  )
}
export default Landing