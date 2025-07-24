import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../admincontext/MyContext";

export default function AddEvents() {
  const { events, setEvents } = useContext(myContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    event_name: '',
    event_details: '',
    date: '',
    time_start: '',
    time_end: '',
    venue: '',
    organizer: '',
    avatar: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? URL.createObjectURL(files[0]) : value
    });
  };

  const handleAddEvent = () => {
    const newEvent = {
      ...form,
      id: Date.now()
    };
    setEvents([...events, newEvent]);
    navigate('/eventlist'); // navigate to event list page
  };

  return (
    <div className="">
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight mb-2">ADD EVENTS</h2>
            <form className="mt-5 space-y-4">
              <div>
                <label className="text-base font-medium text-gray-900">Event Name</label>
                <input type="text" name="event_name" onChange={handleChange} placeholder="Event Name"
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">Event Details</label>
                <input type="text" name="event_details" onChange={handleChange} placeholder="Details"
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">Event Date</label>
                <input type="date" name="date" onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">Start Time</label>
                <input type="time" name="time_start" onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">End Time</label>
                <input type="time" name="time_end" onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">Venue</label>
                <input type="text" name="venue" onChange={handleChange} placeholder="Venue"
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">Organizer Name</label>
                <input type="text" name="organizer" onChange={handleChange} placeholder="Organizer Name"
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-base font-medium text-gray-900">Event Picture</label>
                <input type="file" name="avatar" onChange={handleChange}
                  className="file-input w-full max-w-xs" />
              </div>
              <div>
                <button type="button" onClick={handleAddEvent}
                  className="inline-flex w-full items-center justify-center rounded-md bg-purple-500 px-3.5 py-2.5 font-semibold text-black hover:bg-purple-300">
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
