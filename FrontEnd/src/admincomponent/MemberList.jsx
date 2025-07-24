import React, { useState } from "react";

const initialMembers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
];

function MemberList() {
  const [members, setMembers] = useState(initialMembers);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this member?");
    if (confirmed) {
      setMembers((prev) => prev.filter((member) => member.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Member Management</h2>

      {members.length === 0 ? (
        <p className="text-gray-500">No members found.</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-300 text-gray-800">
              <th className="p-3 text-left border-b border-gray-400">Name</th>
              <th className="p-3 text-left border-b border-gray-400">Email</th>
              <th className="p-3 text-left border-b border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="bg-gray-100 hover:bg-gray-200">
                <td className="p-3 border-b border-gray-300">{member.name}</td>
                <td className="p-3 border-b border-gray-300">{member.email}</td>
                <td className="p-3 border-b border-gray-300">
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold px-4 py-2 rounded shadow-md transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MemberList;