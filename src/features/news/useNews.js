import { useDispatch, useSelector } from "react-redux";

import { removeArticle, saveArticle } from "./savedArticlesSlice.js";

export const useNews = () => {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.savedArticles.articles);

  const isArticleBookmarked = (url) => {
    return savedArticles.some((article) => article.url === url);
  };

  const handleBookmarkToggle = (article) => {
    if (isArticleBookmarked(article.url)) {
      dispatch(removeArticle(article.url));
    } else {
      dispatch(
        saveArticle({
          url: article.url,
          title: article.title,
          urlToImage: article.urlToImage,
<<<<<<< HEAD
          description: article.description,
          source: article.source,
          author: article.author,
          publishedAt: article.publishedAt,
=======
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
        })
      );
    }
  };

  return {
    savedArticles,
    isArticleBookmarked,
    handleBookmarkToggle,
  };
};
