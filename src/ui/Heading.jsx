import React from "react";

export default function Heading() {
<<<<<<< HEAD
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
=======
  return (
    <>
      <div className="bg-[#eae7e7] py-10  w-[85vw] flex flex-col mx-auto  justify-center mb-10  ">
        <div className="text-center w-[60%] flex flex-col justify-center mx-auto tracking-widest 		">
          <h2 className="text-[1.2rem] text-[#565555 ] ">
            Welcome To Newsmania
          </h2>
          <p className="text-[1.5rem]   ">
            Craft narratives ✍️ that ignite
            <span className="text-red-600"> insipration</span>💡
            <span className="text-red-600"> knowledge 📕</span> and
            <span className="text-red-600"> entertainment</span>🎬
          </p>
        </div>
      </div>
      <h2 className="flex justify-center text-[1.4rem] font-bold tracking-wide mb-10">
        LATEST NEWS 👀
      </h2>
    </>
  );
}
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
