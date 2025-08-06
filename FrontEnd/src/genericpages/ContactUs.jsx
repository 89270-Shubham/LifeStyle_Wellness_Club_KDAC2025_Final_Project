import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: undefined })); // clear field error on change
  };

  const validate = () => {
    const err = {};
    const nameTrim = (form.name || "").trim();
    const emailTrim = (form.email || "").trim();
    const messageTrim = (form.message || "").trim();

    if (!nameTrim) err.name = "Full name is required";
    else if (!/^[A-Za-z\s]+$/.test(nameTrim)) err.name = "Name can contain only letters and spaces";
    else if (nameTrim.length > 60) err.name = "Name must be at most 60 characters";

    if (!emailTrim) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) err.email = "Enter a valid email address";

    if (!messageTrim) err.message = "Message is required";
    else if (messageTrim.length < 10) err.message = "Message should be at least 10 characters";
    else if (messageTrim.length > 1000) err.message = "Message is too long (max 1000 characters)";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      // show first error as toast for quick feedback
      const firstKey = Object.keys(errors)[0];
      if (firstKey) toast.warn(errors[firstKey]);
      return;
    }

    // TODO: send `form` to backend here (fetch/axios)
    // For now, show success and clear
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
    setErrors({});
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

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><FaUser /></span>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><FaEnvelope /></span>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white"><FaCommentDots /></span>
                        <textarea
                          className={`form-control ${errors.message ? "is-invalid" : ""}`}
                          id="message"
                          name="message"
                          rows="5"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Type your message here"
                        />
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
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
};

export default ContactUs;
