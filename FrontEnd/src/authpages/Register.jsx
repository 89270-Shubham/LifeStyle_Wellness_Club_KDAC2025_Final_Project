
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const onRegister = () => {
    console.log("Registered")
    navigate("/")
  }

  const onBack = () => {
    navigate(-1)
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Registeration Page</h2>
      <div className='form'>
        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'

          />
        </div>
        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'

          />
        </div>
        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Date Of Birth</label>
          <input
            onChange={(e) => setDob(e.target.value)}
            type='date'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label  className="form-label d-block fw-bold" htmlFor=''>Address</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
      <label className="form-label d-block fw-bold">Gender:</label>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="Male"

          onChange={(e) => setGender(e.target.value)}
        />
        <label className="form-check-label" htmlFor="male">
          Male
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="Female"

          onChange={(e) => setGender(e.target.value)}
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="other"
          value="Other"
          onChange={(e) => setGender(e.target.value)}
        />
        <label className="form-check-label" htmlFor="other">
          Other
        </label>
      </div>
        </div>



        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <div className='mb-3'>
            Already have an account?{' '}
            <button
              onClick={onBack}
              className='btn btn-link'
            >
              Login here
            </button>
          </div>
          <button
            onClick={onRegister}
            className='btn btn-success'
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
