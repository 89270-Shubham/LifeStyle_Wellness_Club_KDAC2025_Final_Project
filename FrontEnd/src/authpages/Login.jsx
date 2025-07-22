import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
// import { AuthContext } from '../context/auth.context';
import { loginUser } from '../services/user';





function Login() {


  const navigate = useNavigate();

  // const {setUser} = useContext(AuthContext);

  const [email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const onLogin = async () => {
    if(email.length==0){
      toast.warn("Please enter email")
    }else if(password.length==0){
      toast.warn("Please enter password")
    }else {
      const result= await loginUser(email,password)
      if(!result['status']=='success'){
        const { firstName, lastName, token } = result['data']

          // persist the information in session storage
          // sessionStorage.setItem('firstName', firstName)
          // sessionStorage.setItem('lastName', lastName)
          // sessionStorage.setItem('token', token)

          // set the user details in the AuthContext
          // setUser({
          //   firstName,
          //   lastName,
          // })

          console.log('result: ', result)
          toast.success('Welcome to application')

          // navigate to home screen
          navigate('/home')
        } else {
          toast.error('Invalid email or password')
        }

      // navigate('/home')
      // toast.success("Logged In Successfully")
      }
    
  
  }

  return (
     
       <div className='container'>
      <h2 className='page-header'>Login</h2>

      <div className='form'>
        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Email</label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            type='email'
            className='form-control'
            placeholder='username@test.com'
          />
        </div>

        <div className='mb-3'>
          <label className="form-label d-block fw-bold" htmlFor=''>Password</label>
          <input
            onChange={(e)=>setPassword(e.target.value)}
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
