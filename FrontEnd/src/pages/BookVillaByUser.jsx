import  { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { insertEnrollDetails } from '../services/user';

function BookVillaByUser() {

    const location = useLocation();
    const navigate = useNavigate();
    const villa = location.state?.villa;



    const enrollUserToEvent = async (formData) => {

        const response = await insertEnrollDetails(formData);
         console.log(response)
        if (response.data != null) {
            return response;
        } else {

            return null;
        }
    }


    const [formData, setFormData] = useState({
        user_Id: sessionStorage.getItem("id"),
        villa_Id: villa.id,
        booking_date: '',
        check_in: '',
        check_out: '',
        no_of_guests: '',
        total_amount: '',
    });

    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = enrollUserToEvent(formData);
        console.log(result);
        console.log('Form Submitted:', formData);
        // Add API call or further logic here
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                Enroll User to Event
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">User ID</label>
                    <input
                        type="number"
                        name="user_Id"
                        value={formData.user_Id}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Villa ID</label>
                    <input
                        type="number"
                        name="villa_Id"
                        value={formData.villa_Id}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Booking Date</label>
                    <input
                        type="date"
                        name="booking_date"
                        value={formData.booking_date}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Check-In Time</label>
                    <input
                        type="time"
                        name="check_in"
                        value={formData.check_in}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Check-Out Time</label>
                    <input
                        type="time"
                        name="check_out"
                        value={formData.check_out}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">No. of Guests</label>
                    <input
                        type="number"
                        name="no_of_guests"
                        value={formData.no_of_guests}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Total Amount (₹)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="total_amount"
                        value={formData.total_amount}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    Enroll Now
                </button>
            </form>
        </div>
    );
}

export default BookVillaByUser;
