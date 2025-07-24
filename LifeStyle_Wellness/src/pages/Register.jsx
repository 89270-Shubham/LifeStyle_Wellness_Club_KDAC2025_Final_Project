import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Registered User:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex space-x-4 mb-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="bg-gray-700 text-gray-200 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="bg-gray-700 text-gray-200 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              required
            />
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            required
          />
          <input
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            placeholder="Confirm Email"
            className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            required
          />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            required
          />
          <label className="text-sm mb-1 text-gray-300" htmlFor="gender">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="gender"
            required
          >
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label className="text-sm mb-1 text-gray-300" htmlFor="age">
            Date of Birth
          </label>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="bg-gray-700 text-gray-200 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="age"
            type="date"
            required
          />

          <p className="text-white mt-2 text-sm">
            Already have an account?{' '}
            <a className="text-blue-400 hover:underline" href="/login">
              Login
            </a>
          </p>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-indigo-600 hover:to-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
