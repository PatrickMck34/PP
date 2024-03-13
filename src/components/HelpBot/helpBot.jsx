import React, { useEffect, useState } from 'react';
import sunflower from '../../resources/sunflower.png';
import './helpBot.css'
function HelpBot ({currentSection}) {
    const [showHelp, setShowHelp] = useState(true);

    const handleImageClick = () => {
      setShowHelp(prevShowHelp => !prevShowHelp);
    };
  
    const getHelpMessage = () => {
      switch (currentSection) {
        case 1:
          return 'The zipcode should load automatically, if not please enter your zipcode then click the next button to continue.';
        case 2:
          return 'Please select the catagories that apply to you. Then click the next button to continue.';
          case 3:
              return 'Finally select the type of help you are looking for. Then click the results button to see your local resources.';
        default:
          return 'General help message...';
      }
    };
    return (
    

    <div className="flex flex-col ">

                
    <div className="flex flex-row p-2">
        {showHelp && (
            <div className=" flex   text-sm font-semibold ">
            <h2 className="text-lg absolute items-center justify-center w-full flex font-semibold sunflower text-teal-600">Persephone</h2>
          </div>
        )}
        <div className="justify-center items-center flex w-full mt-[10%]">

        <img 
          src={sunflower} 
          alt="sunflower" 
          className=" h-36 flex mt-3 justify-center items-center animate-move duration-5000 ease-in-out sunflower "
          onClick={handleImageClick}
          />
          </div>
      {!showHelp && (
          <div className=" flex flex-col w-48 text-sm font-semibold mt-4 ml-2 sunflower">
            <p>{getHelpMessage()}</p>
     
        </div>
      )}
      </div>
    
  

        </div>
    )
}
export default HelpBot;