

import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './layout/Layout'
import Events from './pages/Events'
import Villas from './pages/Villas'
import ManageMembers from './pages/ManageMembers'
import Health from './pages/Health'
import ContactUs from './genericpages/ContactUs'
import AboutUs from './genericpages/AboutUs'
import Profile from './pages/Profile'
import Login from './authpages/Login';
import Register from './authpages/Register';
import Buymembership from './pages/Buymembership'
import {ToastContainer} from 'react-toastify'
import EventDetails from './pages/Eventdetails'
import VillaDetails from './pages/VillaDetails'
import MyEvents from './pages/MyEvents'

function App() {


  return <>

    <Routes>
      <Route
        path='/'
        element={<Login />}
      />

      <Route
        path="register"
        element={<Register />}
      />

      <Route
        path="contact-us"
        element={<ContactUs />}
      />

      <Route
        path="About-us"
        element={<AboutUs />}
      />




      <Route
        path="home"
        element={<Layout />}
      >

        <Route index element={<HomePage />} />
        <Route path="events" element={<Events />} />
        <Route path="myevents" element={<MyEvents />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="villas" element={<Villas />} />
        <Route path="villadetails/:id" element={<VillaDetails />} />
        <Route path="manage-members" element={<ManageMembers />} />
        <Route path="health" element={<Health />} />
        <Route path="profile" element={<Profile />} />
        <Route path="buymembership" element={<Buymembership />} />


      </Route>

    </Routes>
    <ToastContainer/>
  </>
}

export default App


