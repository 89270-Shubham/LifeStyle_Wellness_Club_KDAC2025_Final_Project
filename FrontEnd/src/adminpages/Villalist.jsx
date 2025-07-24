import React, { useContext } from 'react';
import myContext from '../admincontext/MyContext';
import { useNavigate } from 'react-router-dom';

function Villalist() {
    const navigate = useNavigate();
  const context = useContext(myContext);
  const { mode, villas } = context; // make sure villas is available in context

  const handleEdit = (villa) => {
    navigate(`/update-villa/${villa.id}`);
    // You can add navigation or open a modal here
  };

  const handleDelete = (villaId) => {
    if (window.confirm('Are you sure you want to delete this villa?')) {
      alert(`Delete clicked for villa ID: ${villaId}`);
      // Call delete API or update context here
    }
  };

  return (
    <div className='container mx-auto px-4 max-w-7xl my-5'>
      <h2 className="text-4xl font-bold text-amber-700 text-center mb-6">List of Villas</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            style={{
              background: mode === 'dark'
                ? 'white'
                : 'rgb(30, 41, 59)'
            }}
            className="text-xs"
          >
            <tr>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">S.No</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">Villa Image</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">Villa Name</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">Location</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">Rent per night</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3 text-center">Edit</th>
              <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {villas && villas.map((villa, index) => (
              <tr key={villa.id} className="border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <img className='w-16 rounded-lg' src={villa.avatar} alt="villa" />
                </td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{villa.villa_name}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{villa.location}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{villa.rent}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleEdit(villa)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-md text-xs shadow"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(villa.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs shadow"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Villalist;
