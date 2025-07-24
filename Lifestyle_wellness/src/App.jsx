import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import "tailwindcss";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyState from './components/context/data/myState';
import Login from './components/Login';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import AddEvents from './components/AddEvents';
import AddVilla from './components/AddVilla';
import AddDoctor from './components/AddDoctor';
import Contactus from './components/Contactus';
import Gallery from './components/Gallery';
import Villalist from './components/Villalist';
import Eventlist from './components/Eventlist';
import UpdateEvent from './components/Updateevent';
import UpdateVilla from './components/UpdateVilla';

// import Layout from './components/Layout';


function App() {
  

  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/addevents" element={<AddEvents />} />
        <Route path="/eventlist" element={<Eventlist />}/>
        <Route path="/addvilla" element={<AddVilla />} />
        <Route path="/villalist" element={<Villalist />}/>
        <Route path="/adddoctor" element={<AddDoctor />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/update-event/:id" element={<UpdateEvent />}/>
        <Route path="/update-villa/:id" element={<UpdateVilla />} />
        

        
        




      </Routes>
      

        
      
    </Router>
    </MyState>
  )
}

export default App
