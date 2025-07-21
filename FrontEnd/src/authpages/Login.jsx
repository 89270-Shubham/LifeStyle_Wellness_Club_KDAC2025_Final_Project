import React from 'react'
import { Link, useNavigate } from 'react-router-dom'





function Login() {


  const navigate = useNavigate();

  const onLogin = async () => {
    console.log("Logged")
    navigate("/home")
  }

  return (
     
       <div className='container'>
      <h2 className='page-header'>Login</h2>

      <div className='form'>
        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Email</label>
          <input
            
            type='email'
            className='form-control'
            placeholder='username@test.com'
          />
        </div>

        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Password</label>
          <input
           
            type='password'
            className='form-control'
            placeholder='#######'
          />
        </div>
        <div className='mb-3'>
          <div className="form-label d-block fw-bold mb-3">
            Don't have an account yet? <Link to='/register'>Register here</Link>
          </div>
          <button
            onClick={onLogin}
            className='btn btn-success'
          >
            Login
          </button>
        </div>
      </div>
    </div>
    )
}

export default Login
