import React, { useEffect, useState } from 'react';
import { matchRoutes, useNavigate } from 'react-router-dom';
// import Sidebar from './../components/Sidebar';
import { toast } from 'react-toastify';
import axios from 'axios';
import { config } from '../../config';

const getAllEvents = async () => {

  const url = `${config.serverURL}/events/all`
  const response = await axios.get(url);
  if (response == null) {
    toast.error("No response fron server")
  } else {
    console.log(response.data)
    return response.data
  }
}


const Events = () => {

  useEffect(() => {
    loadAllEvents();


  }, []);

  const loadAllEvents = async () => {
    const result = await getAllEvents()
    if (result == null) {
      toast.error("No events Present")
    } else {
      console.log(result);
      setWellnessEvents(result);
      return result
    }
  }
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [wellnessEvents, setWellnessEvents] = useState([])
  const [enrolled, setEnrolled] = useState([]);
  // setWellnessEvents());

  
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
    navigate(`/home/events/${event.id}`, { state: { event } });
  };

  return (
    <div className="d-flex">
      {/* <Sidebar /> */}
      <div className="container my-4" style={{ marginLeft: '220px' }}>
        <h2 className="text-center mb-4">Events</h2>
        <div className="row">
          {wellnessEvents.map((event) => (
            <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
              <div className="card h-100 shadow-sm">
                <img src={event.image} alt={event.name} className="card-img-top" style={{ height: 250 }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text"><strong>Date:</strong> {event.start_date}</p>
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
    </div>
  );
};

export default Events;
