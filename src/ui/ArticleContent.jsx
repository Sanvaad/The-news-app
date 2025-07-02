import React from "react";
import BookmarkBtn from "./BookmarkBtn";

export default function ArticleContent({ article }) {
  const getReadTime = () => {
    if (!article.description) return "5 min read";
    const words = article.description.split(' ').length;
    const readTime = Math.ceil(words / 200);
    return `${readTime} min read`;
  };

  const formatCategory = (sourceName) => {
    if (!sourceName) return "News";
    return sourceName.replace(/[-\s]/g, ' ');
  };

  const formatTimeAgo = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <>
      <img
        src={article.urlToImage || "/placeholder.svg"}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium">
              {article.source?.name?.charAt(0) || "N"}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-700">
            {article.source?.name || "Unknown Source"}
          </span>
          <span className="text-xs text-gray-500">
            • {formatTimeAgo(article.publishedAt)}
          </span>
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-orange-600 transition-colors"
        >
          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-3 line-clamp-3">
            {article.title}
          </h3>
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              {formatCategory(article.source?.name)}
            </div>
            <BookmarkBtn article={article} />
          </div>
          <span className="text-xs text-gray-500">
            {getReadTime()}
          </span>
        </div>
      </div>
    </>
  );
}
