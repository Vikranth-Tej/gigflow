import React from 'react';
import './Navbar.css';
import { FaBell, FaCog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <a className="navbar-brand text-white fw-bold" href="/#" role="button">
        <img src="/logo192.png" alt="Gigfloww Logo" width="30" className="me-2" />
        GIGFLOWW
      </a>

      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav gap-4">
          <li className="nav-item">
            <a className="nav-link text-white" href="/#" role="button">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/#" role="button">People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/#" role="button">Hiring</a>
          </li>
          <li className="nav-item active-salary">
            <a className="nav-link active text-primary fw-bold" href="/#" role="button">Salary</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/#" role="button">Reviews</a>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center gap-3">
        <FaCog className="text-white fs-5" />
        <div className="position-relative">
          <FaBell className="text-white fs-5" />
          <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle p-1 small">4</span>
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
