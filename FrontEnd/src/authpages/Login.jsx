import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
// import { AuthContext } from '../context/auth.context';
import { loginUser } from '../services/user';





function Login() {

  // const { setUser } = useContext(AuthContext)
  const navigate = useNavigate();


  const [email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const onLogin = async () => {
    if(email.length==0){
      toast.warn("Please enter email")
    }else if(password.length==0){
      toast.warn("Please enter password")
    }else {
      const result = await loginUser(email,password)
      
      if (!result) {
        toast.error('Error while login')
      } else {
      if(result.status=='200'){
        const { firstName, lastName, userId } = result['data']

          // persist the information in session storage

          sessionStorage.setItem('firstName', firstName)
          sessionStorage.setItem('lastName', lastName)
          sessionStorage.setItem('id', userId)
          console.log(result['data'])
          // sessionStorage.setItem('token', token)

          // set the user details in the AuthContext
          // setUser({
          //   userId,
          //   firstName,
          //   lastName,
          // })

          
          toast.success('Welcome to application')

          // navigate to home screen
          navigate('/home')
        } else {
          toast.error('Invalid email or password')
        }

      }
      
    }
  
  }

  return (
     
     <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
        <h2 className="text-center mb-4 text-success">Welcome Back</h2>
        <h5 className="text-center mb-4 text-muted">Login to your account</h5>

        <div className="form">
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="username@test.com"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="form-label fw-bold">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="••••••••"
            />
          </div>

          {/* Login Button */}
          <div className="d-grid mb-3">
            <button onClick={onLogin} className="btn btn-success btn-lg fw-semibold">
              Login
            </button>
          </div>

          {/* Link to Register */}
          <div className="text-center mt-2">
            <span className="text-muted">Don't have an account?</span>{' '}
            <Link to="/register" className="fw-bold text-decoration-none">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login
