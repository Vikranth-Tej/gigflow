// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Normally you'd verify credentials here.
    navigate('/home'); // Navigate to Home after login
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      <div className="d-none d-md-block p-0" style={{ width: '840px' }}>
        <img
          src="/team.jpg"
          alt="team"
          className="img-fluid h-100 w-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="d-flex align-items-center justify-content-center bg-gradient p-4" style={{ width: '600px' }}>
        <div className="w-75">
          <div className="text-center mb-4">
            <img src="https://gigfloww.com/images/logo.png" alt="GigFloww" height="40" />
            <h5 className="mt-3 fw-bold">Welcome Back to Gigfloww</h5>
            <h3 className="fw-bold mt-2">Log In</h3>
            <p className="text-muted">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold text-black">Email</label>
              <input type="email" className="form-control rounded-pill" placeholder="Your email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold text-black">Password</label>
              <input type="password" className="form-control rounded-pill" placeholder="Your password" required />
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill mb-3">
              Log In
            </button>

            <p className="text-center">
              Don’t have an account? <a href="/">Register</a>
            </p>

            <div className="d-flex justify-content-between gap-2 mt-3">
              <button type="button" className="btn btn-outline-secondary w-100 rounded-pill">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="me-2" alt="Google" />
                Login with Google
              </button>
              <button type="button" className="btn btn-dark w-100 rounded-pill">
                <i className="bi bi-apple me-2"></i> Login with Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
