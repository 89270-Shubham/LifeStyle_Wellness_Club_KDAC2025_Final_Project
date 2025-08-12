import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../admincontext/MyContext";
import { registerEvent } from "../services/adminevent";
import { toast } from "react-toastify";

export default function AddEvents() {
  const { events, setEvents } = useContext(myContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [start_time, setStartTime] = useState('');
  const [end_time, setEndTime] = useState('');
  const [organizer_name, setOrganizerName] = useState('');
  const [event_type, setEventType] = useState('');
  const [fee, setFee] = useState('');
  const [status, setStatus] = useState('');
  const [created_by, setCreatedBy] = useState('');

  // const handleAddEvent = () => {
  //   const newEvent = {
  //     id: Date.now(),
  //     name,
  //     description,
  //     location,
  //     start_time,
  //     end_time,
  //     organizer_name,
  //     event_type,
  //     fee,
  //     status,
  //     created_by
  //   };
  //   setEvents([...events, newEvent]);
  //   navigate('/eventlist');
  // };


     const onBack = () => {
             navigate(-1)
         }
     
         const onAddEvent = async () => {
             if (name.length === 0) {
                 toast.warn('Please enter your name')
             } else if (description.length === 0) {
                 toast.warn('Please enter your email')
             } else if (location.length === 0) {
                 toast.warn('Please enter a loc')
             }else if (start_time.length === 0) {
                 toast.warn('Please enter a st')
             } else if ( end_time.length === 0) {
                 toast.warn('Please enter a et')
             }  else if (organizer_name.length === 0) {
                 toast.warn('Please enter a organizer')
             }  else if (event_type.length === 0) {
                 toast.warn('Please enter a etype')
                }
                else if (fee.length === 0) {
                 toast.warn('Please enter a fee')}
                 else if (status.length === 0) {
                 toast.warn('Please enter a status')
                 }
                 else if (created_by.length === 0) {
                 toast.warn('Please enter a created_by')
                  } else {
                 const result = await registerEvent( name,
                 description,
                 location,
                start_time,
                  end_time,
                  organizer_name,
                  event_type,
                  fee,
                  status,
                  created_by,)
                 console.log(result);
     
                 if (result==null) {
                     toast.error('Error while registering the user')
                 } else {
                     if (result.status === 'success') {
                         toast.success('Successfully registered!')
                        navigate('/eventlist');
                     } else {
                         toast.error('Registration failed')
                     }
                 }
             }
         }
     


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add Event</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Event Name"
            value={name} onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Description"
            value={description} onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Location"
            value={location} onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="datetime-local" placeholder="Start Date & Time"
            value={start_time} onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="datetime-local" placeholder="End Date & Time"
            value={end_time} onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Organizer"
            value={organizer_name} onChange={(e) => setOrganizerName(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Event Type"
            value={event_type} onChange={(e) => setEventType(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="number" placeholder="Fee"
            value={fee} onChange={(e) => setFee(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Status"
            value={status} onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <input type="text" placeholder="Created By"
            value={created_by} onChange={(e) => setCreatedBy(e.target.value)}
            className="w-full p-3 border rounded-md" />

          <button type="button"
            onClick={onAddEvent}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-md transition">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}
