
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerUser } from '../services/user';


function Register() {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [occupation, setOccupation] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onRegister = async () => {

    if (firstName.length == 0) {
      toast.warn('please enter first name')
    } else if (lastName.length == 0) {
      toast.warn('please enter last name')
    } else if (email.length == 0) {
      toast.warn('please enter email')
    } else if (phone.length == 0) {
      toast.warn('please enter phone number')
    }
    else if (dob.length == 0) {
      toast.warn('please enter Date of Birth')
    }

    else if (address.length == 0) {
      toast.warn('please enter Address')
    }
    else if (gender.length == 0) {
      toast.warn('please choose Gender')
    }
    else if (occupation.length == 0) {
      toast.warn('please enter Occupation')
    }

    else if (password.length == 0) {
      toast.warn('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warn('please confirm password')
    } else if (password != confirmPassword) {
      toast.warn('password does not match')
    } else {
      const result = await registerUser(
        firstName,
        lastName,
        email,
        phone,
        dob,
        address,
        gender,
        occupation,
        password
      )
      console.log(result)
      if (result) {
        toast.success('success')
          navigate('/')
      } else {
        toast.error('failed')
       
      }
      // toast.success("Registered User")
      // navigate("/")
    }
  }

  const onBack = () => {
    navigate(-1)
  }

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
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Occupation</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setOccupation(e.target.value)}
                />
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
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Already have an account?</span>
                <button className="btn btn-link text-decoration-none" onClick={onBack}>
                  Login here
                </button>
              </div>

              <button className="btn btn-success w-100 rounded-pill fw-semibold" onClick={onRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
