import React, { useContext } from 'react';
import myContext from './context/data/myContext';
import { useNavigate } from 'react-router-dom';

function Eventlist() {
    const navigate = useNavigate();
  const { mode, events } = useContext(myContext);

  const handleEdit = (eventId) => {
    navigate(`/update-event/${eventId}`)
    // Navigate to edit page or open modal here
  };

  const handleDelete = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      alert(`Delete clicked for event ID: ${eventId}`);
      // Call your delete API / update state here
    }
  };

  return (
    <div className='container mx-auto px-4 max-w-7xl my-5'>
      <h2 className="text-4xl font-bold text-purple-700 text-center mb-6">List of Events</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
          <thead style={{ background: mode === 'dark' ? 'white' : 'rgb(30, 41, 59)' }} className="text-xs">
            <tr>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">S.No</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">Event Image</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">Event Name</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">Date</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">Start Time</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">End Time</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">Venue</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3">Organizer Name</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3 text-center">Edit</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-4 py-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {events && events.map((event, index) => (
              <tr key={event.id} className="border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">
                  <img className='w-16 rounded-lg' src={event.avatar} alt="event" />
                </td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-4 py-4">{event.event_name}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-4 py-4">{event.date}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-4 py-4">{event.time_start}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-4 py-4">{event.time_end}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-4 py-4">{event.venue}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-4 py-4">{event.organizer}</td>
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => handleEdit(event.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-xs shadow"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs shadow"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Eventlist;
