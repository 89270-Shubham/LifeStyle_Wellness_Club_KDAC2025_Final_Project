import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
      <Navbar />
      <div className="bg-light min-vh-100 d-flex align-items-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5">
                  <h2 className="card-title text-center mb-4 text-primary">Contact Us</h2>
                  <p className="text-center text-muted mb-5">
                    We'd love to hear from you. Send us your questions, suggestions, or feedback.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><FaUser /></span>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><FaEnvelope /></span>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><FaCommentDots /></span>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={form.message}
                          onChange={handleChange}
                          required
                          placeholder="Type your message here"
                        />
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg shadow-sm">
                        Send Message
                      </button>
                    </div>
                  </form>

                  <hr className="my-5" />

                  <div className="text-center text-muted small">
                    Need urgent help? Email us directly at <a href="mailto:support@wellnessclub.com">support@wellnessclub.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

