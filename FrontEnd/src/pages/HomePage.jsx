import React from 'react'
import Navbar from '../components/Navbar'

function HomePage() {



  return (
    <div>
        
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Lifestyle Wellness Club</h1>
          <p className="lead mt-3 mb-4">
            Your path to a healthier, balanced lifestyle begins here.
          </p>
          <a href="/home/buymembership" className="btn btn-success btn-lg">Join Now</a>
        </div>
      </section>

      {/* About Us */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="mb-4">About Us</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            At Lifestyle Wellness Club, we focus on holistic well-being—physical fitness,
            nutrition, and mental clarity. Our expert team ensures every member finds balance and energy.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-5">Our Services</h2>
          <div className="row">
            {["Yoga & Meditation", "Fitness Training", "Nutrition Coaching"].map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{service}</h5>
                    <p className="card-text">Professional programs tailored for your wellness journey.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-5 bg-white text-center" id="join">
        <div className="container">
          <h2 className="mb-5">Membership Plans</h2>
          <div className="row">
            {[
              { title: "Basic", price: "$29/mo" },
              { title: "Standard", price: "$49/mo" },
              { title: "Premium", price: "$79/mo" },
            ].map((plan, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 border-success">
                  <div className="card-body">
                    <h5 className="card-title">{plan.title}</h5>
                    <h6 className="card-subtitle mb-3 text-success">{plan.price}</h6>
                    <a href="/register" className="btn btn-outline-success">Get Started</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-5">What Our Members Say</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p className="fst-italic">
                      "This club transformed my life! The coaches are incredible and the atmosphere is peaceful yet energizing."
                    </p>
                    <footer className="blockquote-footer mt-3">Priya Sharma</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="mb-3">Contact Us</h2>
          <p className="text-muted mb-4">Reach out to us for any questions or feedback.</p>
          <a href="/contact-us" className="btn btn-primary btn-lg">Send Message</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        &copy; 2025 Lifestyle Wellness Club. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage
