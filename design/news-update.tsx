export function NewsUpdate() {
  const updates = [
    "Underdogs Upset Champions in Nail-Biting Finish",
    "Team A Shuts Down Team B's Offense in Victory",
    "Coach Y's Tactical Genius Secures Victory",
  ];

  return (
    <div className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center space-x-4">
          <span className="text-orange-500 font-semibold whitespace-nowrap">
            New Update:
          </span>
          <div className="flex items-center space-x-8 text-gray-600 text-sm">
            {updates.map((update, index) => (
              <span key={index} className="flex items-center space-x-2">
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
  );
}
