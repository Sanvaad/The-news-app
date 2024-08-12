import { useState } from "react";

import Heading from "../ui/Heading";
import News from "../ui/News";
import Categories from "../ui/Categories";
import { useFetchNews } from "../hooks/useFetchNews";
import { useHandleCategoryClick } from "../hooks/useHandleCategoryClick";

export default function Home() {
  const initialCategory = "financial-post";

  const { articles, error, setArticles, setError } =
    useFetchNews(initialCategory);

  const handleCategoryClick = useHandleCategoryClick(setArticles, setError);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = [
    "abc-news",

    "bbc-news",
    "espn",
    "financial-post",
    "reuters",
    "the-washington-times",
    "usa-today",
  ];

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
    handleCategoryClick(category);
  };

  if (error) {
    return <div>Error: {error}</div>;
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
