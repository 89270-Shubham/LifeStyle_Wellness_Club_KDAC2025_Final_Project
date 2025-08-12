
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerUser } from '../services/user';

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  // ----- validators -----
  const isAlphaSpace = (s) => /^[A-Za-z\s]+$/.test(s);
  const isValidEmail = (s) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  const isValidPhone = (s) =>
    /^\d{10}$/.test(s); // allow 10-15 digits
  const isNotFutureDate = (d) => {
    if (!d) return false;
    const input = new Date(d);
    const now = new Date();
    // compare only date (ignore time)
    return input.setHours(0,0,0,0) <= now.setHours(0,0,0,0);
  };

  const validateAll = () => {
    const err = {};

    // First & Last Name
    if (!firstName.trim()) err.firstName = 'First name is required';
    else if (!isAlphaSpace(firstName.trim())) err.firstName = 'First name must contain only letters and spaces';
    if (!lastName.trim()) err.lastName = 'Last name is required';
    else if (!isAlphaSpace(lastName.trim())) err.lastName = 'Last name must contain only letters and spaces';

    // Email
    if (!email.trim()) err.email = 'Email is required';
    else if (!isValidEmail(email.trim())) err.email = 'Enter a valid email';

    // Phone
    if (!phone.trim()) err.phone = 'Phone number is required';
    else if (!isValidPhone(phone.trim())) err.phone = 'Enter a valid phone number (10-15 digits)';

    // DOB
    if (!dob) err.dob = 'Date of birth is required';
    else if (!isNotFutureDate(dob)) err.dob = 'Date of birth cannot be in the future';

    // Address
    if (!address.trim()) err.address = 'Address is required';

    // Gender
    if (!gender) err.gender = 'Please choose gender';

    // Occupation
    if (!occupation.trim()) err.occupation = 'Occupation is required';

    // Passwords
    if (!password) err.password = 'Password is required';
    else if (password.length < 6) err.password = 'Password must be at least 6 characters';
    if (!confirmPassword) err.confirmPassword = 'Please confirm password';
    else if (password !== confirmPassword) err.confirmPassword = 'Passwords do not match';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ----- event handlers -----
  const onRegister = async () => {
    if (!validateAll()) {
      // show first error via toast for quick feedback
      const firstKey = Object.keys(errors)[0];
      if (firstKey) toast.warn(errors[firstKey]);
      else toast.warn('Please fix validation errors');
      return;
    }

    try {
      const result = await registerUser(
        firstName.trim(),
        lastName.trim(),
        email.trim(),
        phone.trim(),
        dob,
        address.trim(),
        gender,
        occupation.trim(),
        password
      );

      // adapt this check to how registerUser responds (true/false or object)
      if (result) {
        toast.success('Registration successful');
        navigate('/');
      } else {
        toast.error('Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      // if server returned validation error, show it
      if (err?.response?.data) {
        toast.error(`Failed: ${JSON.stringify(err.response.data)}`);
      } else {
        toast.error('Registration failed — please try again');
      }
    }
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="text-center mb-4 fw-bold text-success">Registration Page</h2>

              <div className="mb-3">
                <label className="form-label fw-semibold">First Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Date of Birth</label>
                <input
                  type="date"
                  className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                  onChange={(e) => setDob(e.target.value)}
                  value={dob}
                />
                {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Address</label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Occupation</label>
                <input
                  type="text"
                  className={`form-control ${errors.occupation ? 'is-invalid' : ''}`}
                  onChange={(e) => setOccupation(e.target.value)}
                  value={occupation}
                />
                {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Gender</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label">Male</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label">Female</label>
                  </div>

                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      value="Other"
                      checked={gender === 'Other'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>
                {errors.gender && <div className="text-danger small mt-1">{errors.gender}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Already have an account?</span>
                <button type="button" className="btn btn-link text-decoration-none" onClick={onBack}>
                  Login here
                </button>
              </div>

              <button
                type="button"
                className="btn btn-success w-100 rounded-pill fw-semibold"
                onClick={onRegister}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
