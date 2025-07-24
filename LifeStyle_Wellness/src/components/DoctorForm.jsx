// DoctorForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorForm = ({ setDoctors }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    doctor_id: "",
    name: "",
    specialization: "",
    phone_no: "",
    availability: "",
    status: "",
    qualification: "",
    years_experience: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDoctors((prev) => [...prev, formData]); // ✅ Using prop
    navigate("/doctors"); // ✅ Redirect after submit
  };

  return (
    <div className="p-10 bg-white min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-6 rounded-lg shadow-md w-[600px] mx-auto mb-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Doctor</h2>
        {[
          { label: "Doctor ID", name: "doctor_id" },
          { label: "Name", name: "name" },
          { label: "Specialization", name: "specialization" },
          { label: "Phone No", name: "phone_no" },
          { label: "Availability", name: "availability" },
          { label: "Status", name: "status" },
          { label: "Qualification", name: "qualification" },
          { label: "Years of Experience", name: "years_experience" },
        ].map((field) => (
          <div
            className="mb-4 flex justify-between items-center"
            key={field.name}
          >
            <label className="w-40 text-gray-700 font-semibold">
              {field.label}
            </label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="flex-1 ml-4 px-4 py-2 rounded border border-gray-400 focus:outline-none"
              required
            />
          </div>
        ))}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;
