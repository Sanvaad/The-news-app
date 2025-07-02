import { useState } from "react";

import Heading from "../ui/Heading";
import News from "../ui/News";
<<<<<<< HEAD
import NewsLoader from "../ui/NewsLoader";
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
import Categories from "../ui/Categories";
import { useFetchNews } from "../hooks/useFetchNews";
import { useHandleCategoryClick } from "../hooks/useHandleCategoryClick";

export default function Home() {
  const initialCategory = "financial-post";

<<<<<<< HEAD
  const { articles, error, isLoading, setArticles, setError, setIsLoading } =
    useFetchNews(initialCategory);

  const handleCategoryClick = useHandleCategoryClick(setArticles, setError, setIsLoading);
=======
  const { articles, error, setArticles, setError } =
    useFetchNews(initialCategory);

  const handleCategoryClick = useHandleCategoryClick(setArticles, setError);
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = [
    "abc-news",

    "bbc-news",
    "espn",
    "financial-post",
<<<<<<< HEAD

=======
    "reuters",
    "the-washington-times",
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
    "usa-today",
  ];

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
    handleCategoryClick(category);
  };

  if (error) {
<<<<<<< HEAD
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

=======
    return <div>Error: {error}</div>;
  }
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
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
