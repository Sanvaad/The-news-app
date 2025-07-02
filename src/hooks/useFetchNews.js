import { useState, useEffect } from "react";
import { getNews } from "../services/apiNews";

export const useFetchNews = (initialCategory) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

  useEffect(() => {
    const fetchInitialNews = async () => {
      try {
<<<<<<< HEAD
        setIsLoading(true);
        setError(null);
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
        const newsData = await getNews(initialCategory);
        setArticles(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
<<<<<<< HEAD
      } finally {
        setIsLoading(false);
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
      }
    };

    fetchInitialNews();
  }, [initialCategory]);

<<<<<<< HEAD
  return { articles, error, isLoading, setArticles, setError, setIsLoading };
=======
  return { articles, error, setArticles, setError };
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
};
