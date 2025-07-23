import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "./context/data/myContext";


function AddVilla() {
  const { villas, setVillas } = useContext(myContext);
  const navigate = useNavigate();

  // state for form fields
  const [form, setForm] = useState({
    villa_name: '',
    location: '',
    rent: '',
    bedroom: '',
    bathroom: '',
    capacity: '',
    details: '',
    avatar: null
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? URL.createObjectURL(files[0]) : value
    });
  };

  // handle add villa
  const handleAddVilla = () => {
    const newVilla = {
      ...form,
      id: Date.now() // unique id
    };
    setVillas([...villas, newVilla]);
    navigate('/villalist');
  };

  return (
    <section className="rounded-md p-2 bg-white">
      <div className="flex items-center justify-center my-3">
        <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight mb-2">ADD VILLAS</h2>

          <form className="mt-5 space-y-4">
            <div>
              <label className="text-base font-medium text-gray-900">Villa Name</label>
              <input type="text" name="villa_name" onChange={handleChange} placeholder="Villa Name"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            {/* Repeat for other fields */}
            <div>
              <label className="text-base font-medium text-gray-900">Location</label>
              <input type="text" name="location" onChange={handleChange} placeholder="Location"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">Rent per night</label>
              <input type="number" name="rent" onChange={handleChange} placeholder="Enter rent"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">Number of Bedrooms</label>
              <input type="number" name="bedroom" onChange={handleChange} placeholder="Bedrooms"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">Number of Bathrooms</label>
              <input type="number" name="bathroom" onChange={handleChange} placeholder="Bathrooms"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">Capacity / Max guests</label>
              <input type="number" name="capacity" onChange={handleChange} placeholder="Guests"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">Details</label>
              <input type="text" name="details" onChange={handleChange} placeholder="Details"
                className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-base font-medium text-gray-900">Villa Picture</label>
              <input type="file" name="avatar" onChange={handleChange}
                className="file-input w-full max-w-xs" />
            </div>

            <div>
              <button type="button" onClick={handleAddVilla}
                className="inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-3.5 py-2.5 font-semibold text-black hover:bg-amber-300">
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
