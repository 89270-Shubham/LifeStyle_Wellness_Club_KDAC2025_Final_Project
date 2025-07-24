import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const villaData = [
  {
    id: 1,
    name: 'Ocean Breeze Villa',
    location: 'Goa, India',
    price: '₹12,000/night',
    description: 'A beautiful sea-facing villa with a private pool and tropical garden.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Mountain Retreat Villa',
    location: 'Manali, India',
    price: '₹8,500/night',
    description: 'A cozy mountain villa with scenic views, ideal for peaceful vacations.',
    image: 'https://thenattikabeach.com/wp-content/uploads/2022/06/Deluxe-Twin-Villa-Front-Row-Direct-front2.jpg',
  },
  {
    id: 3,
    name: 'Lakeside Serenity Villa',
    location: 'Udaipur, India',
    price: '₹10,000/night',
    description: 'Relax by the lake in a luxurious heritage-style villa with modern amenities.',
    image: 'https://thenattikabeach.com/wp-content/uploads/2022/06/Deluxe-Twin-Villa-Front-Row-Rooms-discover.jpg',
  },
];




function Villas() {


  const navigate = useNavigate();

    const [wishlist, setWishlist] = useState([]);
  const [booked, setBooked] = useState([]);

  const handleDetails = (villa) => {
   navigate(`/home/villadetails/${villa.id}`, {state:{ villa}});
   
  };

  const handleWishlist = (villaId) => {
    if (!wishlist.includes(villaId)) {
      setWishlist([...wishlist, villaId]);
      alert('Saved to wishlist!');
    } else {
      alert('Already in wishlist!');
    }
  };

  const handleBooking = (villaId) => {
    if (!booked.includes(villaId)) {
      setBooked([...booked, villaId]);
      alert('Villa booked successfully!');
    } else {
      alert('Already booked!');
    }
  };

 
   return <>
    <div className="container my-4">
      <h2 className="text-center mb-4">Villas</h2>
      <div className="row">
        {villaData.map((villa) => (
          <div key={villa.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={villa.image}
                className="card-img-top"
                alt={villa.name}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{villa.name}</h5>
                <p className="card-text"><strong>Location:</strong> {villa.location}</p>
                <p className="card-text"><strong>Price:</strong> {villa.price}</p>
                <p className="card-text text-muted">{villa.description}</p>
                <div className="mt-auto d-flex flex-column">
                  <div className="mt-2 d-flex flex-column"> 
                  <button
                    onClick={() => handleDetails(villa)}
                    className="btn btn-outline-primary btn-sm me-2"
                  >
                    See Details
                  </button>
                  </div>
                  <div className="mt-2 d-flex flex-column">
                  <button
                    onClick={() => handleWishlist(villa.id)}
                    className="btn btn-outline-warning btn-sm me-2"
                  >
                    Save to Wishlist
                  </button>
                    </div>
                  <div className="mt-2 d-flex flex-column"> 
                  <button
                    onClick={() => handleBooking(villa.id)}
                    className="btn btn-success btn-sm"
                  >
                    Book Villa
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  
}

export default Villas
