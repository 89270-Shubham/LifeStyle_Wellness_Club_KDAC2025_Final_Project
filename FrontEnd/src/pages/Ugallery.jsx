import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from './../../config';

export default function Ugallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.serverURL}/gallery`)
      .then((res) => setGallery(res.data))
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  // Group images by section (Spa, Yoga, etc.)
  const grouped = gallery.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center mt-8 space-y-12">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-gray-700">Our Gallery</h2>

      {Object.keys(grouped).map((section) => (
        <div key={section} className="w-full flex flex-col items-center space-y-6">
          {/* Section Heading */}
          <h3 className="text-2xl font-semibold text-gray-700">{section}</h3>

          {/* Section Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {grouped[section].map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="group relative flex justify-center items-center h-56 w-80 rounded-2xl outline outline-slate-300 -outline-offset-4 hover:rotate-3 transition-transform duration-300">
                  <img
                    src={`${config.serverURL}/gallery/${item.id}/image`}
                    alt={section}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
