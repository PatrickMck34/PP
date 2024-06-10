import React, { useContext, useState } from 'react';
import sunflower from '../../resources/sunflower.png'; // adjust the path to match your project structure
import { SunflowerContext } from '../sunflowerContext/sunflowerContext';
function HelpComponent({ currentSection }) {
  const {showTooltips, toggleTooltips} =useContext(SunflowerContext)
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

      <div className="flex mt-[-20%] mb-10 flex-row p-2">
        {showHelp && (
          <div className=" flex  text-sm  font-semibold ">
          
          </div>
        )}
        <img
          src={sunflower}
          alt="sunflower"
          className=" flex  md:mt-16 ml-5 xl:mt-32 lg:h-24 2xl:mt-72 md:h-24 h-24 xl:h-24 "
          onClick={toggleTooltips}
        />
        {!showHelp && (
          <div className=" flex flex-col w-48 text-sm font-semibold mt-4 ml-2 ">
            <p>{getHelpMessage()}</p>

          </div>
        )}
      </div>
    </div>
  );
}

export default HelpComponent;