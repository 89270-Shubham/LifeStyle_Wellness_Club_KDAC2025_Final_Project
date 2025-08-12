
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VillaDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const villa = state?.villa;

  if (!villa) {
    return (
      <div className="text-center mt-5">
        <h4>No Villa Data Found</h4>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Back to Villas
        </button>
      </div>
    );
  }

  const handleBook = () => {
    alert(`Booking confirmed for: ${villa.name}`);
     navigate(`/home/book`, { state: { villa } });
  };

  return (
    <div>
      {/* Banner Image */}
      <div style={{ height: "400px", overflow: "hidden" }}>
        <img
          src={villa.image}
          alt={villa.name}
          className="w-100"
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>

      {/* Villa Content */}
      <div className="container mt-4 mb-5">
        <div className="row">
          {/* Left: Villa Info */}
          <div className="col-lg-8">
            <h2 className="fw-bold">{villa.name}</h2>
            <p className="text-muted fs-5">{villa.location}</p>
            <p className="fs-6">{villa.description}</p>

            <hr />

            <h5 className="mt-4">What’s Included:</h5>
            <ul>
              <li>Private pool & garden</li>
              <li>24/7 room service</li>
              <li>Free WiFi & Smart TV</li>
              <li>Complimentary breakfast</li>
            </ul>

            <h4 className="text-success mt-4">Price: {villa.price}</h4>
          </div>

          {/* Right: Booking Box */}
          <div className="col-lg-4">
            <div className="card shadow sticky-top" style={{ top: "100px" }}>
              <div className="card-body">
                <h5 className="card-title mb-3">Book This Villa</h5>
                <p className="mb-2"><strong>Villa:</strong> {villa.name}</p>
                <p className="mb-2"><strong>Location:</strong> {villa.location}</p>
                <p className="mb-3"><strong>Price:</strong> <span className="text-success">{villa.price}</span></p>

                <button className="btn btn-success w-100" onClick={handleBook}>
                  Confirm Booking
                </button>

                <button className="btn btn-outline-secondary w-100 mt-2" onClick={() => navigate(-1)}>
                  Back to List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaDetails;
