import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateEvent({ existingEvent, onUpdate }) {
    const {id} = useParams();
  // Fill form fields with existing event data
  const [form, setForm] = useState({
    event_name: "",
    date: "",
    time_start: "",
    time_end: "",
    venue: "",
    organizer: ""
  });

  useEffect(() => {
    if (existingEvent) {
      setForm({
        event_name: existingEvent.event_name,
        date: existingEvent.date,
        time_start: existingEvent.time_start,
        time_end: existingEvent.time_end,
        venue: existingEvent.venue,
        organizer: existingEvent.organizer
      });
    }
  }, [existingEvent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the update function or API
    onUpdate(form);
    alert("Event updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Update Event (ID: {id})</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Event Name</label>
          <input
            type="text"
            name="event_name"
            value={form.event_name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Start Time</label>
            <input
              type="time"
              name="time_start"
              value={form.time_start}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">End Time</label>
            <input
              type="time"
              name="time_end"
              value={form.time_end}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Venue</label>
          <input
            type="text"
            name="venue"
            value={form.venue}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Organizer</label>
          <input
            type="text"
            name="organizer"
            value={form.organizer}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-semibold shadow"
          >
            Update Event
          </button>
        </div>
      </form>
    </div>
  );
}


