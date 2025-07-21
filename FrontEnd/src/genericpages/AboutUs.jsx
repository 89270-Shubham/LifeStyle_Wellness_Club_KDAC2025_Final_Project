import React from 'react'
import Navbar from '../components/Navbar'

function AboutUs() {
    return (
        <div>
            <Navbar />

            <div className="container py-5">
                <h1 className="text-center mb-4">About Lifestyle Wellness Club</h1>

                {/* Hero Section */}
                <div className="mb-5">
                    <img
                        src="/images/AyurvedicSpa.webp"
                        className="img-fluid rounded shadow"

                        style={{ height: "400px", objectFit: "cover", width: "100%" }}
                        alt="Ayurvedic spa"

                    />
                </div>

                {/* Introduction */}
                <section className="mb-5">
                    <h2>Welcome to the Path of Holistic Healing</h2>
                    <p>
                        At Lifestyle Wellness Club, we are committed to guiding you on your journey toward holistic health through the timeless wisdom of Ayurveda.
                        Our philosophy blends ancient traditions with modern wellness needs — helping your mind, body, and spirit find balance.
                    </p>
                </section>

                {/* Herbal Garden */}
                <section className="mb-5 row align-items-center">
                    <div className="col-md-6">
                        <img
                            src="/images/HerbalGarden.jpg"
                            className="img-fluid rounded shadow"
                            alt="Herbal Garden"
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>Our Herbal Gardens</h3>
                        <p>
                            We cultivate sacred Ayurvedic herbs like Ashwagandha, Brahmi, Tulsi, and Neem — handpicked for our therapies and herbal teas. These herbs are the foundation of our internal healing treatments and detox programs.
                        </p>
                    </div>
                </section>

                {/* Ayurvedic Therapies */}
                <section className="mb-5 row align-items-center flex-md-row-reverse">
                    <div className="col-md-6">
                        <img
                            src="/images/PanchKarma.jpg"
                            className="img-fluid rounded shadow"
                            alt="Ayurvedic Therapy"
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>Therapies We Offer</h3>
                        <ul>
                            <li>🌿 Abhyanga – Warm oil massage to rejuvenate and detoxify</li>
                            <li>🌀 Shirodhara – Oil poured over forehead for stress relief</li>
                            <li>🔥 Panchakarma – Complete detox and body cleansing</li>
                            <li>💧 Swedana – Herbal steam bath for purification</li>
                        </ul>
                    </div>
                </section>

                {/* Wellness Retreat Section */}
                <section className="mb-5 row align-items-center">
                    <div className="col-md-6">
                        <img
                            src="/images/WellnessVilla.jpg"
                            className="img-fluid rounded shadow"
                            alt="Wellness Villa"
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>Our Healing Space</h3>
                        <p>
                            Nestled in nature, our wellness villas offer serene landscapes, yoga zones, meditation decks, and Ayurvedic kitchens. Every corner is crafted to elevate your inner peace and promote natural living.
                        </p>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="mb-5 text-center">
                    <h2>Our Mission</h2>
                    <p>
                        We aim to revive traditional wellness sciences and make them accessible for modern lifestyles.
                        Whether you're on a healing journey or seeking tranquility, we provide personalized programs with compassionate care.
                    </p>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-light p-4 rounded shadow">
                    <h4>Ready to transform your life with Ayurveda?</h4>
                    <p>Join our community today and start your wellness journey.</p>
                    <a href="/register" className="btn btn-success">Join Now</a>
                </section>
            </div>
    
        </div>
    )
}

export default AboutUs
