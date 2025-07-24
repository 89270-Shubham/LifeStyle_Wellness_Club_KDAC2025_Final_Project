import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import MemberList from './components/MemberList';
import DoctorForm from './components/DoctorForm';
import DoctorList from './components/DoctorList';
import BookingsPage from './pages/BookingsPage';
import UsersPage from './pages/UsersPage'; //  Ensure file name matches exactly
import TransactionsPage from './pages/TransactionsPage';

function App() {
  const [doctors, setDoctors] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<MemberList />} />
        <Route path="/add-doctor" element={<DoctorForm setDoctors={setDoctors} />} />
        <Route path="/doctors" element={<DoctorList doctors={doctors} />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
