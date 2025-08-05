import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  if (!event) {
    return <div className="container mt-5">Event not found</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">{event.name}</h2>
      
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <img src="https://www.ariamedispa.com/wp-content/uploads/2023/01/sunrise-yoga-2.jpg" className="img-fluid rounded shadow" alt="Event View 1" />
        </div>
        <div className="col-md-6 mb-3">
          <img src="https://img1.wsimg.com/isteam/stock/7045/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true" className="img-fluid rounded shadow" alt="Event View 2" />
        </div>
        <div className="col-md-6 mb-3">
          <img src="https://oneyogathailand.com/wp-content/uploads/2023/04/meditation-retreat-in-silence-to-cultivate-inner-peace-and-presence-on-koh-phangan-scaled.jpg" className="img-fluid rounded shadow" alt="Event View 3" />
        </div>
        <div className="col-md-6 mb-3">
          <img src="https://hips.hearstapps.com/hmg-prod/images/701/one-change-improve-hiit-workout-preformance-1513345031.jpg?crop=0.848xw:1xh;center,top&resize=1200:*" className="img-fluid rounded shadow" alt="Event View 4" style={{height:300}}/>
        </div>
      </div>

      <div className="mb-3">
        <h5>Name: {event.name}</h5>
        <h6><>Organizer Name:</> {event.organiser_name}</h6>
        <h6><>Event Type:</> {event.event_type}</h6>
        <h6><>Location:</> {event.location}</h6>
        <p className="mt-3">{event.description}</p>
        <h6>Start Date: {event.start_time}</h6>
        <h6><>End Date:</> {event.end_time}</h6>
        <h6><>Fees:</> {event.fee}</h6>
        
      </div>

      <div className="d-flex gap-3">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Back</button>
        <button className="btn btn-success" onClick={() => alert('Booked successfully!')}>Book Now</button>
      </div>
    </div>
  );
};

export default EventDetails;
