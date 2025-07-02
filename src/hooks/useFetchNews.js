import { useState, useEffect } from "react";
import { getNews } from "../services/apiNews";

export const useFetchNews = (initialCategory) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitialNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const newsData = await getNews(initialCategory);
        setArticles(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialNews();
  }, [initialCategory]);

  return { articles, error, isLoading, setArticles, setError, setIsLoading };
};
