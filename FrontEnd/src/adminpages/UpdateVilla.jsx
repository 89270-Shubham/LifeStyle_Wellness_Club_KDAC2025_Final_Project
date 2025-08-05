import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function UpdateVilla() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const villa = location.state?.villa;

  // const [villa, setVilla] = useState({
  //   name: '',
  //   location: '',
  //   rentpernight: '',
  //   numberofbedrooms: '',
  //   numberofbathrooms: '',
  //   capacity: '',
  //   details: ''
  // });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from backend
    axios.get(`http://localhost:8080/admin/villa/villas/${id}`)
      .then((res) => {
        setVilla(res.data);
        setLoading(false);
        console.log("Fetched villa by ID:", res.data); // 👈 Check in console
      })
      .catch((err) => {
        console.error("Error fetching villa:", err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setVilla({ ...villa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/admin/villa/villas/${id}`, villa)
      .then(() => {
        alert("Villa updated successfully!");
        navigate("/villalist");
      })
      .catch((err) => {
        console.error("Error updating villa:", err);
        alert("Update failed.");
      });
  };

  if (loading) return <div className="text-center mt-10 text-xl">Loading villa data...</div>;

  return (
    <div className="container mx-auto max-w-xl mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Update Villa (ID: {id})</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input type="text" name="name" value={villa.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Villa Name" required />

        <input type="text" name="location" value={villa.location} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Location" required />

        <input type="number" name="rentpernight" value={villa.rentpernight} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Rent per Night" required />

        <input type="number" name="numberofbedrooms" value={villa.numberofbedrooms} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Number of Bedrooms" />

        <input type="number" name="numberofbathrooms" value={villa.numberofbathrooms} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Number of Bathrooms" />

        <input type="number" name="capacity" value={villa.capacity} onChange={handleChange} className="w-full border px-3 py-2 rounded" placeholder="Capacity" />

        <textarea name="details" value={villa.details} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows="3" placeholder="Details" />

        <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Villa</button>
      </form>
    </div>
  );
}
