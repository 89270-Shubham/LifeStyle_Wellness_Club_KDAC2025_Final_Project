import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const kpis = [
  { label: "Revenue", value: "$120,000", color: "text-green-600" },
  { label: "Bookings", value: "1,250", color: "text-blue-600" },
  { label: "Members", value: "3,200", color: "text-purple-600" },
  { label: "Doctors", value: "85", color: "text-red-600" },
];

const revenueData = [
  { month: "Jan", revenue: 15000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 20000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 24000 },
  { month: "Jun", revenue: 25000 }
];

const bookingData = [
  { day: "Mon", bookings: 150 },
  { day: "Tue", bookings: 200 },
  { day: "Wed", bookings: 180 },
  { day: "Thu", bookings: 220 },
  { day: "Fri", bookings: 250 },
  { day: "Sat", bookings: 300 },
  { day: "Sun", bookings: 170 }
];

const memberDemographics = [
  { name: "Male", value: 1800 },
  { name: "Female", value: 1300 },
  { name: "Other", value: 100 }
];

const COLORS = ["#0088FE", "#FF69B4", "#FFBB28"];

const doctorStats = [
  { department: "Cardio", count: 20 },
  { department: "Neuro", count: 15 },
  { department: "Ortho", count: 18 },
  { department: "Pediatrics", count: 12 },
  { department: "General", count: 20 }
];

function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">🏥 Admin Dashboard</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-4 text-center">
            <p className="text-sm text-gray-500">{kpi.label}</p>
            <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Revenue Line Chart */}
        <div className="bg-white shadow rounded-xl p-4">
          <h5 className="text-lg font-semibold mb-2">Monthly Revenue</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#4ade80" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Booking Bar Chart */}
        <div className="bg-white shadow rounded-xl p-4">
          <h5 className="text-lg font-semibold mb-2">Weekly Bookings</h5>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Member Pie Chart */}
        <div className="bg-white shadow rounded-xl p-4">
          <h5 className="text-lg font-semibold mb-2">Member Demographics</h5>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={memberDemographics}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {memberDemographics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Doctor Radar Chart */}
        <div className="bg-white shadow rounded-xl p-4">
          <h5 className="text-lg font-semibold mb-2">Doctors by Department</h5>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={doctorStats}>
              <PolarGrid />
              <PolarAngleAxis dataKey="department" />
              <PolarRadiusAxis angle={30} domain={[0, 30]} />
              <Radar name="Doctors" dataKey="count" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
