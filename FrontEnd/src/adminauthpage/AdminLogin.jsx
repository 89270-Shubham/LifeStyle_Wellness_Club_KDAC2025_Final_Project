import React,{ useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { loginAdmin } from "../services/admin"

function AdminLogin()
{

  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')

  const navigate= useNavigate()

  const onLogin = async (e) => {
    e.preventDefault() // ✅ Prevent default form submission

    if (email.length === 0) {
      toast.warn("Please enter the email")
    } else if (password.length === 0) {
      toast.warn("Please enter password")
    } else {
      try {
        const result = await loginAdmin(email, password)
        console.log(result)

        if (!result) {
          toast.error("Error while logging in")
        } else if (result.status === 200) {
          const { adminName, email } = result.data

          sessionStorage.setItem('adminName', adminName)
          sessionStorage.setItem('email', email)

          toast.success('Welcome to the application')
          navigate('/homeadmin')
        } else {
          toast.error('Invalid email or password')
        }
      } catch (error) {
        console.error('Login error:', error)
        toast.error('Something went wrong')
      }
    }
  }

return (   
  
 <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
  <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>

    <form className="flex flex-col" onSubmit={onLogin}>
      <input
        type="email"
        placeholder="Email address"
        className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex items-center justify-between flex-wrap text-sm text-gray-200 mb-2">
        <label htmlFor="remember-me" className="cursor-pointer">
          <input id="remember-me" type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-blue-500 hover:underline">
          Forgot password?
        </a>
      </div>

      <p className="text-white mt-4 text-sm">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Signup
        </a>
      </p>

      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-indigo-600 hover:to-blue-600 transition"
      >
        Login
      </button>
    </form>
  </div>
</div>

);
};

export default AdminLogin;