export default function NewsLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Main Loading Animation */}
      <div className="relative mb-6">
        {/* Rotating news icons */}
        <div className="relative w-16 h-16">
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
          
          {/* Rotating elements */}
          <div className="absolute inset-0 animate-spin">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-sm rotate-12"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-orange-500 rounded-sm -rotate-12"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-3 bg-red-500 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Text with subtle animation */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Loading News</h3>
        <p className="text-sm text-gray-500 animate-pulse">
          Fetching the latest stories for you...
        </p>
      </div>

      {/* Subtle progress dots */}
      <div className="flex space-x-2 mt-6">
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>

      {/* Shimmer news cards preview */}
      <div className="w-full max-w-4xl mt-12 space-y-6">
        {/* Feature article shimmer */}
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Smaller articles shimmer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}