// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/people';
import Salary from './components/salary';
import Hiring from './components/hiring';
import Reviews from './components/reviews';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Layout component placed inside Router context
const AppLayout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/login'];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="px-3 py-3">
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
