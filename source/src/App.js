import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserAdmin from './components/userAdmin/userAdmin.jsx';
import Login from './components/login/login.jsx';
import Landing from "./components/landing/landing.js"
import { useSelector } from 'react-redux';
import * as ProvidersActions from "./store/provider.js"
import * as chatActions from "./store/chatStore.js"
import { useDispatch } from 'react-redux';
import Footer from './components/footer/footer.js';
import { Results, ProviderHome,  Prolog, Questions2, HelpBot, Header, AdminApprovals, Admin, AdminHome, Chat, Submission, Land, ProviderQuestions, Signup } from './imports/importFiles.js';
export default function App() {
  const [timeLeft, setTimeLeft] = useState(500); // Time left in seconds
  const [isExtended, setIsExtended] = useState(false);
  const timer = useRef(null);

  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (user) {
      dispatch(ProvidersActions.getProvider(user.id))
    }
  }, [user])

  return (
    <Router>
      <Header />

      <Routes>
        {/* <Route path="/chat">
        <Chat />
      </Route> */}

        <Route path="/help2" element={<Questions2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prolog" element={<Prolog />} />
        <Route path="/admin/listings" element={<Admin />} />
        <Route path="/admin/home" element={<AdminHome />} />

        <Route path="/provider/list" element={<Submission />} />
        <Route path="/admin/approvals" element={<AdminApprovals />} />

        <Route path="/provider" element={<ProviderQuestions />} />


        <Route path="/results" element={<Results />} />
        <Route path='/helper/intro' element={<HelpBot />} />

        <Route path="/start" element={<Landing />} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/user/admin/:userId" element={<UserAdmin />} />

        <Route path="/" element={<Land />} />

      </Routes>
      <Footer />
    </Router>

  )
}
