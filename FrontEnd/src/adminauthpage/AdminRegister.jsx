import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { registerUser } from '../services/user'
import { useNavigate } from 'react-router-dom'
import { registerAdmin } from '../services/admin'

function Register() {
    const [adminName, setAdminName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

    const onRegister = async () => {
        if (adminName.length === 0) {
            toast.warn('Please enter your name')
        } else if (email.length === 0) {
            toast.warn('Please enter your email')
        } else if (password.length === 0) {
            toast.warn('Please enter a password')
        } else {
            const result = await registerAdmin(adminName, email, password)
            console.log(result);

            if (result==null) {
                toast.error('Error while registering the user')
            } else {
                if (result.status === 200) {
                    toast.success('Successfully registered!')
                    navigate('/login')
                } else {
                    toast.error('Registration failed')
                }
            }
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-5 shadow-lg rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
                <h2 className="text-center mb-4 text-primary">Create Your Admin Account</h2>

                <div className="form-group mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control form-control-lg rounded-3"
                        placeholder="Enter your name"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control form-control-lg rounded-3"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group mb-4">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control form-control-lg rounded-3"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="d-grid mb-3">
                    <button onClick={onRegister} className="btn btn-primary btn-lg rounded-3">
                        Register
                    </button>
                </div>

                <div className="text-center">
                    <span className="text-muted">Already have an account? </span>
                    <button onClick={onBack} className="btn btn-link p-0 m-0 align-baseline">
                        Login here
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
