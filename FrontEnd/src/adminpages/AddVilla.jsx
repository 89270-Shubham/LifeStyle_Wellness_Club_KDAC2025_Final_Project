import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../admincontext/MyContext";
import { addVilla, getAllVillas } from "../services/villaservice";

function AddVilla() {
  const { villas, setVillas } = useContext(myContext);
  const navigate = useNavigate();

  // Use keys that match AddVillaDto/backend
  const [form, setForm] = useState({
    name: "",
    location: "",
    rentPerNight:0,
    numberOfBedrooms:0,
    numberOfBathrooms:0,
    capacity:0,
    details: "",
    avatar: null
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  // Controlled inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setForm((p) => ({ ...p, [name]: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const validate = () => {
    const temp = {};
    if (!form.name || !form.name.trim()) temp.name = "Villa name is required";
    if (!form.location || !form.location.trim()) temp.location = "Location is required";
    if (!form.rentPerNight || Number(form.rentPerNight) <= 0) temp.rentPerNight = "Enter a valid rent";
    if (!form.numberOfBedrooms || Number(form.numberOfBedrooms) <= 0) temp.numberOfBedrooms = "Enter bedrooms count";
    if (!form.numberOfBathrooms || Number(form.numberOfBathrooms) <= 0) temp.numberOfBathrooms = "Enter bathrooms count";
    if (!form.capacity || Number(form.capacity) <= 0) temp.capacity = "Enter capacity";
    if (!form.details || !form.details.trim()) temp.details = "Details are required";
    // avatar optional — remove comment if you require it:
    // if (!form.avatar) temp.avatar = "Please upload a villa picture";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Make it async and await API calls
  const handleAddVilla = async () => {
    if (!validate()) return;

    const payload = {
      name: form.name,
      location: form.location,
      rentPerNight: Number(form.rentPerNight),
      numberOfBedrooms: Number(form.numberOfBedrooms),
      numberOfBathrooms: Number(form.numberOfBathrooms),
      capacity: Number(form.capacity),
      details: form.details
    };

    try {
      // If avatar exists, addVillaSmart will send multipart, otherwise JSON
      await addVilla(payload, form.avatar);

      // refetch list and update context
      const updated = await getAllVillas();
      setVillas(updated);

      navigate("/villalist");
    } catch (err) {
      console.error("Error adding villa:", err);
      if (err.response) {
        alert(`Add failed: ${err.response.status} - ${JSON.stringify(err.response.data)}`);
      } else {
        alert("Failed to add villa. See console.");
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-yellow-50 to-white p-4">
      <div className="bg-white/90 rounded-lg shadow-lg p-6 w-full max-w-md border border-purple-200">
        <h2 className="text-3xl font-bold text-center mb-4">ADD VILLAS</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddVilla();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Villa Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded"
              placeholder="Villa name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded"
              placeholder="Location"
            />
            {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Rent per night</label>
            <input
              name="rentPerNight"
              type="number"
              value={form.rentPerNight}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded"
              placeholder="Rent"
            />
            {errors.rentPerNight && <p className="text-red-500 text-xs">{errors.rentPerNight}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Bedrooms</label>
            <input
              name="numberOfBedrooms"
              type="number"
              value={form.numberOfBedrooms}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded"
              placeholder="Bedrooms"
            />
            {errors.numberOfBedrooms && <p className="text-red-500 text-xs">{errors.numberOfBedrooms}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Bathrooms</label>
            <input
              name="numberOfBathrooms"
              type="number"
              value={form.numberOfBathrooms}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded"
              placeholder="Bathrooms"
            />
            {errors.numberOfBathrooms && <p className="text-red-500 text-xs">{errors.numberOfBathrooms}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Capacity</label>
            <input
              name="capacity"
              type="number"
              value={form.capacity}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded"
              placeholder="Capacity"
            />
            {errors.capacity && <p className="text-red-500 text-xs">{errors.capacity}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Details</label>
            <input
              name="details"
              value={form.details}
              onChange={handleChange}
              className="border px-3 py-2 w-full rounded"
              placeholder="Details"
            />
            {errors.details && <p className="text-red-500 text-xs">{errors.details}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Image (optional)</label>
            <input name="avatar" type="file" accept="image/*" onChange={handleChange} />
            {preview && <img src={preview} alt="preview" className="mt-2 w-full h-40 object-cover rounded" />}
          </div>

          <button type="submit" className="w-full bg-amber-500 py-2 rounded text-black font-semibold">
            Add Villa
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddVilla;
