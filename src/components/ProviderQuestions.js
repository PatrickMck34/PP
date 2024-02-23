import React, { useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom" 
import { CSSTransition } from 'react-transition-group';
import Provider2 from './provider2.js';
import Provider from './provider.js';
import Provider3 from './provider3.js';
import { useDispatch, useSelector } from 'react-redux';
import { createProvider } from '../store/provider.js';



function ProviderQuestions () {
  const history = useNavigate()
  const dispatch = useDispatch()
  const [errors, setErrors] = React.useState(["Please fill out required fields"]);
    const [swipe, setSwipe] = React.useState(false);
    const isProviderValid = useSelector(state => state.providerReducer?.provider1)  
    const [selections, setSelections] = React.useState([]);
    const [currentSection, setCurrentSection] = React.useState(1);
    const provider3 = useSelector(state => state.provider?.provider2)
    const address = useSelector(state => state.provider.address)
    const zipCode = useSelector(state => state.provider.zipCode)
    const name = useSelector(state => state.provider.name)
    const phone = useSelector(state => state.provider.phone)
   
    const Trans = () => {
     setErrors([])
      if(address !== '' && phone !== '' && name !== '' && zipCode !== '' && phone.length === 10 && zipCode.length === 5){
        setCurrentSection((currentSection % 3) + 1);
      } else {
        alert(["Please fill out required fields"])
      }
        
        
      
      };
    const Results = () => {
        
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createProvider(provider3)) 
      history('/provider/list')
    }
    useEffect(()=> {
      setErrors([errors])
    }, [])
   
      return (
        <div >
        
          <div className="relative overflow-hidden h-full w-full">
            <CSSTransition
              in={currentSection === 1 }
              timeout={100}
              classNames="slide"
              unmountOnExit
            >
          <Provider />
            </CSSTransition>
            <CSSTransition
              in={currentSection === 2}
              timeout={200}
              classNames="slide"
              unmountOnExit
            >
            
                <Provider2 />
              
            </CSSTransition>
            <CSSTransition
              in={currentSection === 3}
              timeout={100}
              classNames="slide"
              unmountOnExit
            >
          <Provider3 />
           </CSSTransition>
          </div>
          {currentSection === 3 ? (
            <div>
              <Link to="/provider/list"> 
               <button type="Submit" onClick={handleSubmit} className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl ">Results</button>
               </Link>
              </div>
          ) : (
            <div>
              <button onClick={Trans} type="Submit" className="font-serif  flex justify-center items-center w-60 mx-auto mt-12 px-4 py-2 bg-teal-400 border-2 text-2xl border-slate-400 text-slate-800  rounded-xl">Next</button>
              </div>
          )}
          
        </div>
      );
    }
    

export default ProviderQuestions