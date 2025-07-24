import React from "react";

const users = [
  {
    user_id: "U123",
    email: "john.doe@example.com",
    dob: "1990-05-15",
    gender: "Male",
    phone: "9876543210",
    address: "123 Main Street, Mumbai",
  },
  

  {
    user_id: "U124",
    email: "jane.smith@example.com",
    dob: "1995-08-22",
    gender: "Female",
    phone: "9123456789",
    address: "456 Palm Avenue, Pune",
  },
  {
    user_id: "U125",
    email: "rohan.sharma@example.com",
    dob: "1988-02-10",
    gender: "Male",
    phone: "9988776655",
    address: "789 Garden Rd, Bangalore",
  },
];

function ViewUsers() {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-purple-100 to-purple-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-6 bg-purple-600 text-white">
          <h1 className="text-3xl font-bold">👥 User Records</h1>
          <p className="text-sm">Lifestyle Wellness Club Admin Panel</p>
        </div>

        <div className="overflow-x-auto p-6">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-purple-100 text-purple-800 uppercase text-xs">
              <tr>
                <th className="py-3 px-4">User ID</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">DOB</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.user_id} className="hover:bg-purple-50 transition duration-200">
                  <td className="py-3 px-4 font-medium text-gray-800">{user.user_id}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.dob}</td>
                  <td className="py-3 px-4">{user.gender}</td>
                  <td className="py-3 px-4">{user.phone}</td>
                  <td className="py-3 px-4">{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewUsers;
