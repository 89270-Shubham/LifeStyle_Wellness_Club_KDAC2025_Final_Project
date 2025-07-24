import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light p-3 shadow" style={{ height: '100vh', width: '200px', position: 'fixed' }}>
      <h5 className="mb-4">Event Controls</h5>
      <NavLink className="btn btn-outline-primary mb-2" to="#">Create Event</NavLink>
      <NavLink className="btn btn-outline-secondary mb-2" to="#">View Events</NavLink>
      <NavLink className="btn btn-outline-warning mb-2" to="#">Update Event</NavLink>
      <NavLink className="btn btn-outline-danger" to="#">Delete Event</NavLink>
    </div>
  );
};

export default Sidebar;
