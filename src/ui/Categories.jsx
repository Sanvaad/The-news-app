/* eslint-disable react/prop-types */

export default function Categories({
  categories,
  onCategoryClick,
  selectedCategory,
}) {
  const formatCategoryName = (category) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {formatCategoryName(category)}
          </button>
        ))}
      </div>
    </div>
  );
}
