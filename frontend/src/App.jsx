import React from 'react';
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
import AboutUs from './Pages/AboutUs';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { ToastContainer, } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { Context } from './main';
import { useEffect } from 'react';
import Footer from './components/Footer';


const App = () => {

  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

    
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  
  return (
 

   
      
    <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/register" element={< Register/>} />
          <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<AboutUs />} />

          
        </Routes>
        <Footer/>
        <ToastContainer position='top-center'/>
       
      </Router>
  );
}

export default App;

