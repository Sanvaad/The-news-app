import { useState } from "react";

import Heading from "../ui/Heading";
import News from "../ui/News";
import NewsLoader from "../ui/NewsLoader";
import Categories from "../ui/Categories";
import { useFetchNews } from "../hooks/useFetchNews";
import { useHandleCategoryClick } from "../hooks/useHandleCategoryClick";

export default function Home() {
  const initialCategory = "financial-post";

  const { articles, error, isLoading, setArticles, setError, setIsLoading } =
    useFetchNews(initialCategory);

  const handleCategoryClick = useHandleCategoryClick(setArticles, setError, setIsLoading);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = [
    "abc-news",

    "bbc-news",
    "espn",
    "financial-post",

    "usa-today",
  ];

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
    handleCategoryClick(category);
  };

  if (error) {
    return (
      <>
        <Heading />
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={onCategoryClick}
        />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-red-600">Error: {error}</div>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Heading />
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={onCategoryClick}
        />
        <NewsLoader />
      </>
    );
  }

  return (
    <>
      <Heading />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={onCategoryClick}
      />
      <News articles={articles} />
    </>
  );
}
