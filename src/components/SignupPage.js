// src/components/SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left Image Panel */}
      <div className="d-none d-md-block p-0" style={{ width: '840px' }}>
        <img
          src="/team.jpg" // Make sure team.jpg is in public folder
          alt="Team collaboration"
          className="img-fluid h-100 w-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Right Form Panel */}
      <div className="d-flex align-items-center justify-content-center bg-gradient p-4" style={{ width: '600px' }}>
        <div className="w-75">
          <div className="text-center mb-4">
            <img src="https://gigfloww.com/images/logo.png" alt="GigFloww" height="40" />
            <h5 className="mt-3 fw-bold">Welcome to Gigfloww</h5>
            <h3 className="fw-bold mt-2">Register</h3>
            <p className="text-muted">
              Seamless HR operations start now!
              <br />
              Sign up
            </p>
          </div>

          <form>
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input id="name" type="text" placeholder="Your name" className="form-control rounded-pill mb-3" />

            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input id="email" type="email" placeholder="Your email" className="form-control rounded-pill mb-3" />

            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input id="password" type="password" placeholder="Your password" className="form-control rounded-pill mb-3" />

            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
            <input id="confirmPassword" type="password" placeholder="Reconfirm your password" className="form-control rounded-pill mb-4" />

            <button className="btn btn-primary w-100 rounded-pill mb-3">Register</button>

            <p className="text-center">
              Already on Gigfloww?{' '}
              <Link to="/login" className="text-decoration-none">
                Log in
              </Link>
            </p>

            <div className="d-flex justify-content-between gap-2 mt-3">
              <button type="button" className="btn btn-outline-secondary w-100 rounded-pill">
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  className="me-2"
                  alt="Google"
                />
                Register with Google
              </button>
              <button type="button" className="btn btn-dark w-100 rounded-pill">
                <i className="bi bi-apple me-2"></i> Register with Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
