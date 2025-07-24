import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';
import Events from './pages/Events';
import Villas from './pages/Villas';
import ManageMembers from './pages/ManageMembers';
import Health from './pages/Health';
import ContactUs from './genericpages/ContactUs';
import AboutUs from './genericpages/AboutUs';
import Profile from './pages/Profile';
import Login from './authpages/Login';
import Register from './authpages/Register';
import Buymembership from './pages/Buymembership';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // make sure to import the CSS for react-toastify
import EventDetails from './pages/Eventdetails';
import VillaDetails from './pages/VillaDetails';
import MyEvents from './pages/MyEvents';
import AddEvents from './adminpages/AddEvents';
import AdminLogin from './adminauthpage/AdminLogin';
import Eventlist from './adminpages/Eventlist';
import AddVilla from './adminpages/AddVilla';
import Villalist from './adminpages/Villalist';
import AddDoctor from './adminpages/AddDoctor';
import AdminAboutus from './adminpages/AdminAboutus';
import AdminContactus from './adminpages/AdminContactus';
import UpdateEvent from './adminpages/UpdateEvent';
import UpdateVilla from './adminpages/UpdateVilla';
import Gallery from './adminpages/Gallery';
import MyState from '../src/admincontext/MyState';
import Home from './adminpages/Home';
import AdminRegister from './adminauthpage/AdminRegister';
import { useState } from 'react';
import DoctorForm from './admincomponent/DoctorForm';
import DoctorList from './admincomponent/DoctorList';
import BookingsPage from './adminpages/BookingsPage';
import UsersPage from './adminpages/UsersPage';
import MemberList from './admincomponent/MemberList';
import TransactionsPage from './adminpages/TransactionsPage';


function App() {

  const [doctors, setDoctors] = useState([]);

  return (
    <MyState>
    
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='about-us' element={<AboutUs />} />

          <Route path='home' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='events' element={<Events />} />
            <Route path='myevents' element={<MyEvents />} />
            <Route path='events/:id' element={<EventDetails />} />
            <Route path='villas' element={<Villas />} />
            <Route path='villadetails/:id' element={<VillaDetails />} />
            <Route path='manage-members' element={<ManageMembers />} />
            <Route path='health' element={<Health />} />
            <Route path='profile' element={<Profile />} />
            <Route path='buymembership' element={<Buymembership />} />
          </Route>

          {/* Admin routes */}
          <Route path='/admin' element={<Home />} />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/addevents' element={<AddEvents />} />
          <Route path='/eventlist' element={<Eventlist />} />
          <Route path='/addvilla' element={<AddVilla />} />
          <Route path='/villalist' element={<Villalist />} />
          <Route path='/adddoctor' element={<AddDoctor />} />
          <Route path='/about' element={<AdminAboutus />} />
          <Route path='/contactus' element={<AdminContactus />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/update-event/:id' element={<UpdateEvent />} />
          <Route path='/update-villa/:id' element={<UpdateVilla />} />

          <Route path='/registeradmin' element={<AdminRegister />} />


          {/* Sakshi's Routes  */}

        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/homeadmin" element={<Home />} />
        <Route path="/members" element={<MemberList />} />
        <Route path="/add-doctor" element={<DoctorForm setDoctors={setDoctors} />} />
        <Route path="/doctors" element={<DoctorList doctors={doctors} />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />






        </Routes>

        <ToastContainer />
      
    </MyState>
  );
}

export default App;
