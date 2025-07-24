import React from "react";

const DoctorList = ({ doctors }) => {
  if (!Array.isArray(doctors) || doctors.length === 0) {
    return <p className="text-center mt-10">No doctors registered.</p>;
  }

  return (
    <div className="p-10 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Registered Doctors</h2>
      <table className="w-full border border-gray-400">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Doctor ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Specialization</th>
            <th className="p-2 border">Phone No</th>
            <th className="p-2 border">Availability</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Qualification</th>
            <th className="p-2 border">Experience</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{doc.doctor_id}</td>
              <td className="p-2 border">{doc.name}</td>
              <td className="p-2 border">{doc.specialization}</td>
              <td className="p-2 border">{doc.phone_no}</td>
              <td className="p-2 border">{doc.availability}</td>
              <td className="p-2 border">{doc.status}</td>
              <td className="p-2 border">{doc.qualification}</td>
              <td className="p-2 border">{doc.years_experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;