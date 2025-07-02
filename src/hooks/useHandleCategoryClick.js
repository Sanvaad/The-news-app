import { getNews } from "../services/apiNews";

<<<<<<< HEAD
export const useHandleCategoryClick = (setArticles, setError, setIsLoading) => {
  const handleCategoryClick = async (category) => {
    try {
      setIsLoading(true);
      setError(null);
=======
export const useHandleCategoryClick = (setArticles, setError) => {
  const handleCategoryClick = async (category) => {
    try {
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
      const newsData = await getNews(category);
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

  return handleCategoryClick;
};
