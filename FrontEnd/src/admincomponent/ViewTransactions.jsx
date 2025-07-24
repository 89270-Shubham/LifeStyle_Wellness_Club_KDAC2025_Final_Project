import React from "react";

const transactions = [
  {
    transaction_id: "T001",
    user_id: "U123",
    transaction_type: "Booking Payment",
    payment_method: "Credit Card",
    payment_status: "Completed",
    transaction_date: "2025-07-15",
  },
  {
    transaction_id: "T002",
    user_id: "U124",
    transaction_type: "Membership Fee",
    payment_method: "UPI",
    payment_status: "Pending",
    transaction_date: "2025-07-16",
  },
  {
    transaction_id: "T003",
    user_id: "U125",
    transaction_type: "Event Payment",
    payment_method: "Net Banking",
    payment_status: "Failed",
    transaction_date: "2025-07-17",
  },
];

 function ViewTransactions() {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-6 bg-purple-700 text-white">
          <h1 className="text-3xl font-bold">💳 Transactions</h1>
          <p className="text-sm">Lifestyle Wellness Club Admin Panel</p>
        </div>

        <div className="overflow-x-auto p-6">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-purple-100 text-purple-800 uppercase text-xs">
              <tr>
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">User ID</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Payment Method</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.transaction_id} className="hover:bg-purple-50 transition">
                  <td className="py-3 px-4 font-medium text-gray-800">{tx.transaction_id}</td>
                  <td className="py-3 px-4">{tx.user_id}</td>
                  <td className="py-3 px-4">{tx.transaction_type}</td>
                  <td className="py-3 px-4">{tx.payment_method}</td>
                  <td className={`py-3 px-4 font-semibold ${
                    tx.payment_status === "Completed" ? "text-green-600"
                    : tx.payment_status === "Pending" ? "text-yellow-600"
                    : "text-red-600"
                  }`}>
                    {tx.payment_status}
                  </td>
                  <td className="py-3 px-4">{tx.transaction_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewTransactions; 
