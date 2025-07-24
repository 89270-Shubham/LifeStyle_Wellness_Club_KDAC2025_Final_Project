import React, { useState, useEffect } from "react";

import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import AppNavbar from "../admincomponent/AppNavbar";

export default function AdminContactus() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/lxnwmcazrboqzyud8a0nnjny4mwvqbfz.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <AppNavbar />
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-8">
        <div className="max-w-2xl w-full mx-4 bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Contact Us</h2>
          <p className="text-center text-gray-500 mb-8">
            We'd love to hear from you. Send us your questions, suggestions, or feedback.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <div className="flex items-center border rounded-md shadow-sm bg-white">
                <span className="px-3 text-gray-500">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 outline-none rounded-r-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email Address
              </label>
              <div className="flex items-center border rounded-md shadow-sm bg-white">
                <span className="px-3 text-gray-500">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 outline-none rounded-r-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                Your Message
              </label>
              <div className="flex border rounded-md shadow-sm bg-white">
                <span className="px-3 pt-2 text-gray-500">
                  <FaCommentDots />
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here"
                  className="w-full px-3 py-2 outline-none resize-none rounded-r-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-gray-500 text-sm">
            Need urgent help? Email us directly at{" "}
            <a href="mailto:support@wellnessclub.com" className="text-blue-600 underline">
              support@wellnessclub.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
