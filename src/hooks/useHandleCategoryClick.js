import { getNews } from "../services/apiNews";

export const useHandleCategoryClick = (setArticles, setError, setIsLoading) => {
  const handleCategoryClick = async (category) => {
    try {
      setIsLoading(true);
      setError(null);
      const newsData = await getNews(category);
      setArticles(newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return handleCategoryClick;
};
