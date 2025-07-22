import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Later: send form data to server via API
    setForm({ name: "", email: "", message: "" });
  };

  return (

    <div>
    <Navbar/>
    <div className="container py-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <p className="text-center mb-5">We'd love to hear from you. Send us your questions or feedback.</p>

      <form className="mx-auto" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;

