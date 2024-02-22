import React, {useEffect, useState, useRef} from "react";
import { useSelector } from "react-redux";
import Dialogue from "./dialogue.js"


function Chat({language}) {
    const mess = useSelector((state) => state.chat.allChat)
    const [input, setInput] = useState("");
    const [num, setNum] = useState(0)
    let msgs = Object.values(language)
    const [messages, setMessages] = useState([{sender: 'Persephone', text: language }]);
    const messagesEndRef = useRef(null);
    const [replies, setReplies] = useState("")
    
    
    
    const handleSendMessage = (event) => {
        event.preventDefault();
        setMessages((prevMessages) => [...prevMessages, { sender: 'Guest', text: input }]);
        setInput('');
        
        setTimeout(() => {
          setMessages((prevMessages) => [...prevMessages, { sender: 'Persephone', text: 'This is a response from the AI.' }]);
        }, 1000);
      };
    const timer = () => { 
        setTimeout(() => {setNum(num + 1)}, 500)
    }
    let japanese = "Konni chiwa! Watashi wa anata no tasukeru koto ga dekimasu ka?'"
    let german = "Wilokommen! Wie kann ich Ihnen helfen?"
    let spanish = 'Yo soy tu amiga virtual. ¿Cómo puedo ayudarte?'
    let msg2 = Object.values(Dialogue[2])

  
    


    
  
        useEffect(() => {
           
           ;
        }, [messages])
  return (
    <div>

  <div className="flex flex-col h-56 border-2 bg-gray-200 rounded-xl  border-gray-400 w-80 mx-auto overflow-auto">
    <div className="flex flex-col rounded-xl  p-3">
      {messages.map((message, index) => (
        <div className="w-full  p-1 flex flex-col text-sm" key={index}>
          <div className="text-center h-fit bg-teal-300 rounded-xl p-1 font-semibold text-md text-teal-800 ">
            <span>{message.sender}:</span>
            <span>{message.text}</span>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
    <div>
      </div>

  </div>
    <form onSubmit={handleSendMessage} className="p-3 mx-auto w-80 bg-gray-300 border-2 border-gray-400 rounded-xl mt-1 ">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-72  p-2  border-2 h-8 border-gray-400 " />
      <button type="submit" className="p-2 bg-teal-600 w-72 h-6 border-2  border-gray-400 flex justify-center items-center  rounded relative  text-pink-50 mt-1 font-normal">Submit</button>
    </form>
    </div>
        )
  }
  export default Chat