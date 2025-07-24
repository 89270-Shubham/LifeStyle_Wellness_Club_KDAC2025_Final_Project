import React,{ useState } from "react"
import { toast } from "react-toastify"
import { loginUser } from "../services/user"
import { useNavigate } from "react-router-dom"

function Login()
{

  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')

  const navigate= useNavigate()

  const onLogin =async() =>
  {
       if(email.length==0)
       {
        toast.warn("Please entered the email")
       }
       else if(password.length==0)
       {
        toast.warn("Please enter password")
       }
       else{
           const result =await loginUser(email, password)
               if(!result)
               {
                toast.error("error while login")
               }
               else{
                if(result['status']== 'success')
                {
                  //persist the login information like token, username etc
                   const { firstName, lastName, token}=result['data']

                   sessionStorage.setItem('firstName', firstName)
                   sessionStorage.setItem('lastName', lastName)
                   sessionStorage.setItem('token', token)
                    
                   console.log('result :', result)
                   toast.success('Welcome to application')
                    
                   navigate('/home')

                }
                 else{
                    toast.error('invalid email or password')
                   }     
             }
       }
   }


return (   
  
  <div className="flex flex-col items-center justify-center h-screen dark">
    <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
      <form className="flex flex-col">
        <input
          placeholder="Email address"
          className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="email"
        />
        <input
          placeholder="Password"
          className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="password"
        />
        <div className="flex items-center justify-between flex-wrap">
          <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
            <input className="mr-2" id="remember-me" type="checkbox" />
            Remember me
          </label>
          <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">
            Forgot password?
          </a>
        </div>
        <p className="text-white mt-4">
          Don't have an account?{" "}
          <a className="text-sm text-blue-500 hover:underline" href="/register">
            Signup
          </a>
        </p>
        <button
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);
};

export default Login;