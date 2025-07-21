
import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const heartRateData = [
  { time: "6 AM", bpm: 65 },
  { time: "9 AM", bpm: 72 },
  { time: "12 PM", bpm: 76 },
  { time: "3 PM", bpm: 85 },
  { time: "6 PM", bpm: 78 },
  { time: "9 PM", bpm: 70 }
];

const exerciseData = [
  { day: "Mon", minutes: 30 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 25 },
  { day: "Thu", minutes: 50 },
  { day: "Fri", minutes: 20 },
  { day: "Sat", minutes: 60 },
  { day: "Sun", minutes: 40 }
];

const sleepData = [
  { name: "Deep", value: 2 },
  { name: "Light", value: 5 },
  { name: "REM", value: 1 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const calorieData = [
  { day: "Mon", intake: 2200, burn: 1800 },
  { day: "Tue", intake: 2100, burn: 2000 },
  { day: "Wed", intake: 2500, burn: 2200 },
  { day: "Thu", intake: 2300, burn: 2100 },
  { day: "Fri", intake: 2400, burn: 2000 }
];

const radarData = [
  { subject: "Stamina", score: 80 },
  { subject: "Strength", score: 70 },
  { subject: "Endurance", score: 65 },
  { subject: "Flexibility", score: 85 },
  { subject: "Cardio", score: 75 }
];


function Health() {
  return (
    

    
     <div className="container mt-4">
      <h2 className="text-center mb-4">🧑Personal Health Dashboard</h2>

      {/* Heart Rate */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h5>Heart Rate (BPM)</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={heartRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bpm" stroke="#ff0000" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Exercise Chart */}
        <div className="col-md-6">
          <h5>Weekly Exercise (mins)</h5>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={exerciseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="minutes" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sleep Pie Chart */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h5>Sleep Cycle</h5>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sleepData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {sleepData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Calories Area Chart */}
        <div className="col-md-6">
          <h5>Calories: Intake vs Burn</h5>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={calorieData}>
              <defs>
                <linearGradient id="colorIntake" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="intake" stroke="#82ca9d" fillOpacity={1} fill="url(#colorIntake)" />
              <Area type="monotone" dataKey="burn" stroke="#8884d8" fillOpacity={1} fill="url(#colorBurn)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Radar Chart */}
      <div className="row">
        <div className="col-md-12">
          <h5>Wellness Metrics</h5>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="User" dataKey="score" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  
  )
}

export default Health
