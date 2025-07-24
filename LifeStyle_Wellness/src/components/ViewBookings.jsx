import React from "react";

const bookings = [
  {
    booking_id: "B001",
    user_id: "U123",
    villa_id: "V01",
    booking_date: "2025-07-15",
    check_in_date: "2025-07-20",
    check_out_date: "2025-07-25",
  },
  {
    booking_id: "B002",
    user_id: "U124",
    villa_id: "V02",
    booking_date: "2025-07-16",
    check_in_date: "2025-07-22",
    check_out_date: "2025-07-27",
  },
  {
    booking_id: "B003",
    user_id: "U125",
    villa_id: "V03",
    booking_date: "2025-07-17",
    check_in_date: "2025-07-24",
    check_out_date: "2025-07-28",
  },
];

function ViewBookings() {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-purple-100 to-purple-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-6 bg-purple-600 text-white">
          <h1 className="text-3xl font-bold">📅 Booking Records</h1>
          <p className="text-sm">Lifestyle Wellness Club Admin Panel</p>
        </div>

        <div className="overflow-x-auto p-6">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-purple-100 text-purple-800 uppercase text-xs">
              <tr>
                <th className="py-3 px-4">Booking ID</th>
                <th className="py-3 px-4">User ID</th>
                <th className="py-3 px-4">Villa ID</th>
                <th className="py-3 px-4">Booking Date</th>
                <th className="py-3 px-4">Check-In</th>
                <th className="py-3 px-4">Check-Out</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr
                  key={booking.booking_id}
                  className="hover:bg-purple-50 transition duration-200"
                >
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {booking.booking_id}
                  </td>
                  <td className="py-3 px-4">{booking.user_id}</td>
                  <td className="py-3 px-4">{booking.villa_id}</td>
                  <td className="py-3 px-4">{booking.booking_date}</td>
                  <td className="py-3 px-4">{booking.check_in_date}</td>
                  <td className="py-3 px-4">{booking.check_out_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewBookings;
