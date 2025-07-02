import React from "react";

export default function Heading() {
  const updates = [
    "Breaking: Major news developments worldwide",
    "Latest updates from trusted sources",
    "Stay informed with real-time news coverage",
  ];

  return (
    <>
      {/* News Update Banner */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 font-semibold whitespace-nowrap">
              New Update:
            </span>
            <div className="flex items-center space-x-8 text-gray-600 text-sm overflow-hidden">
              {updates.map((update, index) => (
                <span key={index} className="flex items-center space-x-2 whitespace-nowrap">
                  <span>{update}</span>
                  {index < updates.length - 1 && (
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}