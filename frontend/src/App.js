import React, {useState} from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserAdmin from './components/userAdmin/userAdmin.jsx';
import Login from './components/login/login.jsx';
import Landing from "./components/landing/landing.js"
import { useSelector } from 'react-redux';
import * as ProvidersActions from "./store/provider.js"
import { useDispatch } from 'react-redux';
import Footer from './components/footer/footer.js';
import {SunflowerContext} from './components/sunflowerContext/sunflowerContext.jsx';
import { Results, Prolog, Questions2, HelpBot, Header, Categories, AdminApprovals, Admin, AdminHome, Chat, Submission, Land, ProviderQuestions, Signup } from './imports/importFiles.js';
export default function App() {

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
  

        <Route path="/help2" element={<Questions2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prolog" element={<Prolog />} />
        <Route path="/categories" element={<Categories />} />
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
