import React, { useState, useEffect } from 'react';

// Same wellnessEvents array
const wellnessEvents = [
  {
    id: 1,
    name: 'Sunrise Yoga & Mindfulness',
    date: '2025-08-10',
    location: 'Beachside Wellness Center',
    description: 'Start your day with a guided yoga session and breathing practices by certified instructors.',
    image: 'https://www.ariamedispa.com/wp-content/uploads/2023/01/sunrise-yoga-2.jpg',
  },
  {
    id: 2,
    name: 'Nutrition & Clean Eating Workshop',
    date: '2025-08-18',
    location: 'Wellness Club Hall A',
    description: 'Learn the science of clean eating and meal planning from holistic nutritionists.',
    image: 'https://img1.wsimg.com/isteam/stock/7045/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
  },
  {
    id: 3,
    name: 'Weekend Meditation Retreat',
    date: '2025-07-10', // Past date
    location: 'Zen Mountains Retreat Center',
    description: 'A 3-day silent meditation retreat focused on self-awareness and inner peace.',
    image: 'https://oneyogathailand.com/wp-content/uploads/2023/04/meditation-retreat-in-silence-to-cultivate-inner-peace-and-presence-on-koh-phangan-scaled.jpg',
  },
  {
    id: 4,
    name: 'HIIT Fitness Bootcamp',
    date: '2025-09-12',
    location: 'Club Gym Zone',
    description: 'High-Intensity Interval Training to boost metabolism and stamina.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/701/one-change-improve-hiit-workout-preformance-1513345031.jpg?crop=0.848xw:1xh;center,top&resize=1200:*',
  },
  {
    id: 5,
    name: 'Aromatherapy & Stress Relief Session',
    date: '2025-07-15', // Past date
    location: 'Zen Spa Room',
    description: 'Explore essential oils and calming techniques to reduce anxiety and improve sleep.',
    image: 'https://www.maplewoodseniorliving.com/wp-content/uploads/2020/06/MSL-blog-post-photo-scaled.jpg',
  },
];

const MyEvents = () => {
  // Simulating enrolled IDs: events 1, 3, 4, 5
  const enrolledEventIds = [1, 3, 4, 5];

  const [enrolledEvents, setEnrolledEvents] = useState([]);

  useEffect(() => {
    const enrolled = wellnessEvents.filter(event => enrolledEventIds.includes(event.id));
    setEnrolledEvents(enrolled);
  }, []);

  const today = new Date();

  const isPastEvent = (date) => new Date(date) < today;

  const handleDelete = (eventId) => {
    const updatedList = enrolledEvents.filter(event => event.id !== eventId);
    setEnrolledEvents(updatedList);
  };

  const upcomingEvents = enrolledEvents.filter(event => !isPastEvent(event.date));
  const pastEvents = enrolledEvents.filter(event => isPastEvent(event.date));

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">My Enrolled Events</h2>

      <section className="mb-5">
        <h4 className="mb-3 text-success">Upcoming Enrolled Events</h4>
        <div className="row">
          {upcomingEvents.length === 0 && <p className="text-muted">No upcoming events enrolled.</p>}
          {upcomingEvents.map(event => (
            <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
              <div className="card h-100 shadow-sm">
                <img src={event.image} alt={event.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{event.name}</h5>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p className="text-muted">{event.description}</p>
                  <button
                    className="btn btn-outline-danger mt-auto"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete Enrollment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <section>
        <h4 className="mb-3 text-secondary">Past Enrolled Events</h4>
        <div className="row">
          {pastEvents.length === 0 && <p className="text-muted">No past events.</p>}
          {pastEvents.map(event => (
            <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
              <div className="card h-100 shadow border-secondary">
                <img src={event.image} alt={event.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p className="text-muted">{event.description}</p>
                  <span className="badge bg-secondary">Completed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyEvents;
