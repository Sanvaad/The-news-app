/* eslint-disable react/prop-types */
import ArticleContent from "./ArticleContent";

export default function ArticleLayout({ articles }) {
  const filteredArticles = articles.filter(
    (article) => article.title !== "[Removed]"
  );

  if (filteredArticles.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Trendy news</h2>
        <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600 font-medium transition-colors">
          <span>See more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <ArticleContent article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
