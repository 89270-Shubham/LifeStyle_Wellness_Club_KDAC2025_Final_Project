import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import "tailwindcss";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import MyState from './components/context/data/myState';
// import Layout from './components/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        




      </Routes>
      

        
      
    </Router>
    </MyState>
  )
}

export default App
