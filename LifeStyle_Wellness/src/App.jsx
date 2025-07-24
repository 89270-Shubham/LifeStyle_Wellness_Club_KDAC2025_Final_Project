import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
     <>
       <Routes>
       {/* <Route
       path='/register'
       element={<Register />}
       /> */}


        {/* <Route
        path='/home'
        element={<Home />
        }
        /> */}

       <Route
       path='/login'
       element={<Login />}
        />

       </Routes>
    
    
{/* 
      <h1 className='text-3xl font-bold'> Hello world </h1> */}

   
    </>
    )
}

export default App
