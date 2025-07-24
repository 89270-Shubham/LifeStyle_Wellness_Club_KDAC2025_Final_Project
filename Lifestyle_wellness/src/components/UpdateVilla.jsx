import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateVilla() {
  const { id } = useParams();

  // Example villa state
  const [villa, setVilla] = useState({
    name: '',
    location: '',
    rentpernight: '',
    numberofbedrooms:'',
    numberofbathrooms:'',
    capacity:'',
    details: ''
  });

  // In real app, fetch villa details by ID from backend or context
  useEffect(() => {
    // Mock example data load (you can replace this with Axios/fetch call)
    setVilla({
      name: 'Luxury Sea View Villa',
      location: 'Goa',
      rentpernight: '25000',
      numberofbedrooms:'5',
      numberofbathrooms:'5',
      capacity:'12',
      details: 'Spacious villa near beach'
    });
  }, [id]);

  const handleChange = (e) => {
    setVilla({ ...villa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the updated data to backend
    console.log('Updated Villa:', villa);
    alert('Villa updated successfully!');
  };

  return (
    <div className="container mx-auto max-w-xl mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Update Villa (ID: {id})</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Villa Name:</label>
          <input
            type="text"
            name="name"
            value={villa.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Location:</label>
          <input
            type="text"
            name="location"
            value={villa.location}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Rent (per night):</label>
          <input
            type="number"
            name="rentpernight"
            value={villa.rentpernight}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Number of Bedrooms:</label>
          <textarea
            name="numberofbedrooms"
            value={villa.numberofbedrooms}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="3"
          />
        </div>

         <div>
          <label className="block mb-1">Number of Bathrooms:</label>
          <textarea
            name="numberofbathrooms"
            value={villa.numberofbathrooms}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="3"
          />
        </div>

         <div>
          <label className="block mb-1">Capacity:</label>
          <textarea
            name="capacity"
            value={villa.capacity}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="3"
          />
        </div>

         <div>
          <label className="block mb-1">Details:</label>
          <textarea
            name="details"
            value={villa.details}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Villa
        </button>
      </form>
    </div>
  );
}
