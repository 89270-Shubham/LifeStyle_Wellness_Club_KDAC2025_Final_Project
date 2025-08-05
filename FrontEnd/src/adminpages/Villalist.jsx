import React, { useContext, useState, useEffect } from 'react';
import myContext from '../admincontext/MyContext';
import { useNavigate } from 'react-router-dom';
import { getAllVillas , deleteVilla } from '../services/villaservice';

function Villalist() {
    const navigate = useNavigate();
  const context = useContext(myContext);
  const { mode } = context; // make sure villas is available in context

  //services
  const [villas, setVillas]  = useState([])
  async function fetchData()
    {
      const data = await getAllVillas()
      setVillas(data)
    }


  useEffect(() =>{

    fetchData()
  }, [])
 
      
  const handleEdit = (villa) => {
    navigate(`/update-villa/${villa.id}`, {state:{villa}});
    // You can add navigation or open a modal here
  };

  const handleDelete = async (villaId) => {
    if (window.confirm('Are you sure you want to delete this villa?')) {
      try {
        await deleteVilla(villaId)
        alert('villa deleted successfully');

        const updateVillas = await getAllVillas();
        setVillas(updateVillas)
      }catch (error)
      {
        console.error('Error deleting villa', error)
      
      alert(`Delete clicked for villa ID: ${villaId}`);
      // Call delete API or update context here
    }
  }
  }

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
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{villa.name}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{villa.location}</td>
                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">{villa.rentPerNight}</td>
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
