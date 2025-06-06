import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaCog } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { label: 'Dashboard', path: '/home' },
    { label: 'People', path: '/people' },
    { label: 'Hiring', path: '/hiring' },
    { label: 'Salary', path: '/salary' },
    { label: 'Reviews', path: '/reviews' },
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      {/* Brand */}
      <Link className="navbar-brand text-white fw-bold" to="/home">
        <img src="/logo192.png" alt="Gigfloww Logo" width="30" className="me-2" />
        GIGFLOWW
      </Link>

      {/* Center Nav Links */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav gap-4">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                className={`nav-link fw-semibold ${
                  location.pathname === link.path ? 'active-link' : 'text-white'
                }`}
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className="d-flex align-items-center gap-3">
        <FaCog className="text-white fs-5" />
        <div className="position-relative">
          <FaBell className="text-white fs-5" />
          <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle p-1 small">
            
          </span>
        </div>
        <img
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt="Profile"
          className="rounded-circle"
          width="35"
          height="35"
        />
      </div>
    </nav>
  );
};

export default Navbar;
