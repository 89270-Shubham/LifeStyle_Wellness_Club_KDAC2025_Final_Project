import React from 'react';

const CardGrid = () => {
  return (
    <div className="w-full px-4 py-10">
      {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {[
          { title: "Count", subtitle: "No of Bookings" },
          { title: "Count", subtitle: "No of Members" },
          { title: "Count", subtitle: "No of Events" },
          { title: "Count", subtitle: "No of Villas" },
          { title: "Count", subtitle: "No of Revenue" },
          { title: "Count", subtitle: "No of Guests" }
        ].map((card, index) => (
          <div 
            key={index}
            className="w-100 h-60 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 shadow-lg text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold">{card.title}</h2>
                <p className="text-purple-100 mt-1">{card.subtitle}</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-4xl font-bold">0</p>
              <div className="w-full bg-white/20 h-2 rounded-full mt-3">
                <div className="bg-white h-2 rounded-full" style={{ width: `${30 + index * 10}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;