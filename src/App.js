import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';


import Landing from "./components/landing.js"
import { useSelector } from 'react-redux';

import * as chatActions from "./store/chatStore.js"
import { useDispatch } from 'react-redux';
import { Results, Questions2, Chat, Submission, Land, ProviderQuestions, Signup } from './imports/importFiles.js';
export default function App() {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  React.useEffect(() => {

  }, [user])
  console.log(App)
  return (
    <Router>


    <Routes>
      {/* <Route path="/chat">
        <Chat />
      </Route> */}
    
      <Route path="/help2" element={<Questions2 />}/>
     
   
  
      <Route path="/provider/list" element={<Submission />}/>
      
    
      <Route path="/provider" element={<ProviderQuestions />}/>
       
    
      <Route path="/results" element={<Results />}/>
       
  
      <Route path="/start" element={<Landing />}/>
       
     
      <Route path="/signup" element={<Signup />}/>
       
   
      <Route path="/" element={<Land />}/>
      
    </Routes>
      </Router>

  )
    }
    