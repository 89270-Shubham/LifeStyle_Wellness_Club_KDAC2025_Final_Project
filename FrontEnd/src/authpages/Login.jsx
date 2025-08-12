import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../services/user';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const isValidEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

  const validate = () => {
    const err = {};
    if (!email.trim()) err.email = 'Please enter email';
    else if (!isValidEmail(email.trim())) err.email = 'Enter a valid email';

    if (!password) err.password = 'Please enter password';
    else if (password.length < 6) err.password = 'Password must be at least 6 characters';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onLogin = async () => {
    if (!validate()) {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) toast.warn(errors[firstKey]);
      return;
    }

    try {
      const result = await loginUser(email.trim(), password);

      if (!result) {
        toast.error('Error while logging in');
        return;
      }

      if (String(result.status) === '200' || result.status === 200) {
        const { firstName, lastName, userId } = result.data || {};

        sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('lastName', lastName);
        sessionStorage.setItem('id', userId);

        toast.success('Welcome back!');
        navigate('/home');
      } else {
        toast.error('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
        <h2 className="text-center mb-4 text-success">Welcome Back</h2>
        <h5 className="text-center mb-4 text-muted">Login to your account</h5>

        <div className="form">
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="username@test.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="••••••••"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="d-grid mb-3">
            <button onClick={onLogin} className="btn btn-success btn-lg fw-semibold">
              Login
            </button>
          </div>

          <div className="text-center mt-2">
            <span className="text-muted">Don't have an account?</span>{' '}
            <Link to="/register" className="fw-bold text-decoration-none">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
