/* eslint-disable react/prop-types */

import FeatureArticle from "./FeatureArticle";
import ArticleLayout from "./ArticleLayout";
import BookmarkBtn from "./BookmarkBtn";

export default function News({ articles }) {
  const filteredArticles = articles.filter(
    (article) => article.title !== "[Removed]"
  );
  
  const firstArticle = filteredArticles[0];
  const sidebarArticles = filteredArticles.slice(1, 4); // Next 3 articles for sidebar
  const remainingArticles = filteredArticles.slice(4); // Rest for trendy news

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {firstArticle && <FeatureArticle article={firstArticle} />}
        </div>
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {sidebarArticles.map((article, index) => (
              <div key={index} className="flex space-x-4">
                <img
                  src={article.urlToImage || "/placeholder.svg"}
                  alt={article.title}
                  className="w-30 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">
                        {article.source?.name?.charAt(0) || "N"}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {article.source?.name || "Unknown"}
                    </span>
                    <span className="text-xs text-gray-500">
                      • {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-orange-600 transition-colors"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600 line-clamp-2 flex-1">
                      {article.description}
                    </p>
                    <div className="ml-2 flex-shrink-0">
                      <BookmarkBtn article={article} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ArticleLayout articles={remainingArticles} />
    </main>
  );
}
