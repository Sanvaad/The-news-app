import React from "react";
<<<<<<< HEAD
=======
import bookmarkoutline from "../images/bookmarkoutline.svg";
import bookmarkfill from "../images/bookmarkfill.svg";
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
import { useNews } from "../features/news/useNews";

export default function BookmarkBtn({ article }) {
  const { isArticleBookmarked, handleBookmarkToggle } = useNews();
<<<<<<< HEAD
  const isBookmarked = isArticleBookmarked(article.url);

  return (
    <button
      onClick={() => handleBookmarkToggle(article)}
      className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
        isBookmarked 
          ? 'text-orange-500 hover:text-orange-600' 
          : 'text-gray-400 hover:text-orange-500'
      }`}
      title={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
    >
      {isBookmarked ? (
        // Filled bookmark icon
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
      ) : (
        // Outline bookmark icon
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" 
          />
        </svg>
      )}
    </button>
=======

  return (
    <div>
      <button onClick={() => handleBookmarkToggle(article)}>
        {isArticleBookmarked(article.url) ? (
          <img src={bookmarkfill} alt="" className="h-7" />
        ) : (
          <img src={bookmarkoutline} alt="" className="h-7" />
        )}
      </button>
    </div>
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
  );
}
