



import React, { useState } from 'react';

const wellnessEvents = [
  {
    id: 1,
    name: 'Sunrise Yoga & Mindfulness',
    date: '2025-08-10',
    location: 'Beachside Wellness Center',
    description: 'Start your day with a guided yoga session and breathing practices by certified instructors.',
  },
  {
    id: 2,
    name: 'Nutrition & Clean Eating Workshop',
    date: '2025-08-18',
    location: 'Wellness Club Hall A',
    description: 'Learn the science of clean eating and meal planning from holistic nutritionists.',
  },
  {
    id: 3,
    name: 'Weekend Meditation Retreat',
    date: '2025-09-05',
    location: 'Zen Mountains Retreat Center',
    description: 'A 3-day silent meditation retreat focused on self-awareness and inner peace.',
  },
  {
    id: 4,
    name: 'HIIT Fitness Bootcamp',
    date: '2025-09-12',
    location: 'Club Gym Zone',
    description: 'High-Intensity Interval Training to boost metabolism and stamina.',
  },
  {
    id: 5,
    name: 'Aromatherapy & Stress Relief Session',
    date: '2025-09-20',
    location: 'Zen Spa Room',
    description: 'Explore essential oils and calming techniques to reduce anxiety and improve sleep.',
  },
];

const Events = () => {
   const [wishlist, setWishlist] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  const handleAddToWishlist = (eventId) => {
    if (!wishlist.includes(eventId)) {
      setWishlist([...wishlist, eventId]);
      alert('Added to wishlist!');
    } else {
      alert('Already in wishlist!');
    }
  };

  const handleEnroll = (eventId) => {
    if (!enrolled.includes(eventId)) {
      setEnrolled([...enrolled, eventId]);
      alert('Successfully enrolled!');
    } else {
      alert('Already enrolled!');
    }
  };

  const handleDetails = (event) => {
    alert(`Details:\n\n${event.name}\nDate: ${event.date}\nLocation: ${event.location}\n\n${event.description}`);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Events</h2>
      <div className="row">
        {wellnessEvents.map((event) => (
          <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text"><strong>Date:</strong> {event.date}</p>
                <p className="card-text"><strong>Location:</strong> {event.location}</p>
                <p className="card-text text-muted">{event.description}</p>
                <div className="mt-auto">
                  <button onClick={() => handleDetails(event)} className="btn btn-outline-primary btn-sm me-2">Details</button>
                  <button onClick={() => handleAddToWishlist(event.id)} className="btn btn-outline-warning btn-sm me-2">Wishlist</button>
                  <button onClick={() => handleEnroll(event.id)} className="btn btn-success btn-sm">Enroll</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;