/* eslint-disable react/prop-types */

export default function Categories({
  categories,
  onCategoryClick,
  selectedCategory,
}) {
<<<<<<< HEAD
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
=======
  return (
    <div className="flex justify-center flex-wrap gap-12 w-[85vw] mx-auto mb-20 ">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`inline-block px-5 py-2 rounded-full ${
            selectedCategory === category
              ? "bg-[#c24141] hover:bg-[#c24141ac] text-white"
              : "bg-[#eae7e7] text-black"
          } hover:bg-[#c24141ac] hover:text-[#fff] `}
          onClick={() => onCategoryClick(category)}
        >
          <span className="flex">{category}</span>
        </button>
      ))}
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
    </div>
  );
}
