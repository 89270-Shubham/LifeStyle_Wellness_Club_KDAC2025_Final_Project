import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../admincontext/MyContext";

function AddVilla() {
  const { villas, setVillas } = useContext(myContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    villa_name: "",
    location: "",
    rent: "",
    bedroom: "",
    bathroom: "",
    capacity: "",
    details: "",
    avatar: null
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Validation function
  const validate = () => {
    let tempErrors = {};

    if (!form.villa_name.trim()) tempErrors.villa_name = "Villa name is required";
    if (!form.location.trim()) tempErrors.location = "Location is required";
    if (!form.rent || form.rent <= 0) tempErrors.rent = "Enter a valid rent";
    if (!form.bedroom || form.bedroom <= 0) tempErrors.bedroom = "Enter bedrooms count";
    if (!form.bathroom || form.bathroom <= 0) tempErrors.bathroom = "Enter bathrooms count";
    if (!form.capacity || form.capacity <= 0) tempErrors.capacity = "Enter capacity";
    if (!form.details.trim()) tempErrors.details = "Details are required";
    if (!form.avatar) tempErrors.avatar = "Please upload a villa picture";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle Add
  const handleAddVilla = () => {
    if (!validate()) return;

    const newVilla = {
      ...form,
      id: Date.now(),
      avatar: URL.createObjectURL(form.avatar) // convert to previewable URL
    };
    setVillas([...villas, newVilla]);
    navigate("/villalist");
  };

  return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-yellow-50 to-white p-4">
      <div className="flex items-center justify-center my-3 bg-white/90 backdrop-blur-md rounded-lg shadow-lg shadow-black-300 p-6 w-full max-w-md border border-purple-200">
        <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight mb-2">ADD VILLAS</h2>

          <form className="mt-5 space-y-4">
            {/* Villa Name */}
            <div>
              <label>Villa Name</label>
              <input
                type="text"
                name="villa_name"
                value={form.name}
                onChange={handleChange}
                placeholder="Villa Name"
                className="border px-3 py-2 w-full rounded"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Location */}
            <div>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location"
                className="border px-3 py-2 w-full rounded"
              />
              {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
            </div>

            {/* Rent */}
            <div>
              <label>Rent per night</label>
              <input
                type="number"
                name="rent"
                value={form.rentPerNight}
                onChange={handleChange}
                placeholder="Enter rent"
                className="border px-3 py-2 w-full rounded"
              />
              {errors.rent && <p className="text-red-500 text-xs">{errors.rent}</p>}
            </div>

            {/* Bedrooms */}
            <div>
              <label>Number of Bedrooms</label>
              <input
                type="number"
                name="bedroom"
                value={form.numberOfBedrooms}
                onChange={handleChange}
                placeholder="Bedrooms"
                className="border px-3 py-2 w-full rounded"
              />
              {errors.numberOfBedrooms && <p className="text-red-500 text-xs">{errors.numberOfBedrooms}</p>}
            </div>

            {/* Bathrooms */}
            <div>
              <label>Number of Bathrooms</label>
              <input
                type="number"
                name="bathroom"
                value={form.numberOfBathrooms}
                onChange={handleChange}
                placeholder="Bathrooms"
                className="border px-3 py-2 w-full rounded"
              />
              {errors.numberOfBathrooms && <p className="text-red-500 text-xs">{errors.numberOfBathrooms}</p>}
            </div>

            {/* Capacity */}
            <div>
              <label>Capacity / Max guests</label>
              <input
                type="number"
                name="capacity"
                value={form.capacity}
                onChange={handleChange}
                placeholder="Guests"
                className="border px-3 py-2 w-full rounded"
              />
              {errors.capacity && <p className="text-red-500 text-xs">{errors.capacity}</p>}
            </div>

            {/* Details */}
            <div>
              <label>Details</label>
              <input
                type="text"
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Details"
                className="border px-3 py-2 w-full rounded"
              />
              {errors.details && <p className="text-red-500 text-xs">{errors.details}</p>}
            </div>

            {/* Image */}
            <div>
              <label>Villa Picture</label>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                className="file-input w-full max-w-xs"
              />
              {errors.avatar && <p className="text-red-500 text-xs">{errors.avatar}</p>}
            </div>

            <div>
              <button
                type="button"
                onClick={handleAddVilla}
                className="bg-amber-500 px-3.5 py-2.5 rounded w-full font-semibold hover:bg-amber-300"
              >
                Add Villa
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddVilla;
