/* eslint-disable react/prop-types */
import BookmarkBtn from "./BookmarkBtn";

<<<<<<< HEAD
export default function FeatureArticle({ article }) {
  if (!article || article.title === "[Removed]") {
    return null;
  }

  const formatCategory = (sourceName) => {
    if (!sourceName) return "News";
    return sourceName.replace(/[-\s]/g, ' ').toUpperCase();
  };

  const getReadTime = () => {
    if (!article.description) return "5 min read";
    const words = article.description.split(' ').length;
    const readTime = Math.ceil(words / 200); // Average reading speed
    return `${readTime} min read`;
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black text-white">
      <img
        src={article.urlToImage || "/placeholder.svg"}
        alt={article.title}
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {formatCategory(article.source?.name)}
            </div>
            <div className="flex items-center space-x-1 text-white/80 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{getReadTime()}</span>
            </div>
          </div>
          <BookmarkBtn article={article} />
        </div>

        <a 
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-orange-300 transition-colors"
        >
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            {article.title}
          </h1>
        </a>

        {article.description && (
          <p className="text-white/90 text-sm mt-3 line-clamp-2">
            {article.description}
          </p>
        )}

        {article.author && (
          <div className="flex items-center mt-4 pt-4 border-t border-white/20">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-medium">
                {article.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{article.author}</p>
              <p className="text-xs text-white/70">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
=======
export default function FeatureArticle({ firstArticle }) {
  if (!firstArticle) {
    return null;
  }

  if (firstArticle.title === "[`Removed`]") {
    return;
  }
  return (
    <div className="flex gap-14 mb- max-laptop:flex-col w-[85vw] mx-auto">
      <img
        src={firstArticle.urlToImage}
        alt=""
        className="h-[30rem] w-[50rem] rounded-[20px] max-tablet:w-[40rem] max-tablet:h-[20rem]"
      />

      <div>
        <div className="flex justify-between">
          <span className="text-[#737b84] ">{firstArticle.source.name}</span>

          <BookmarkBtn article={firstArticle} />
        </div>
        <a href={firstArticle.url} className="text-[1.7rem] mt-[1rem]">
          {firstArticle.title}
        </a>
        <p className="text-[1rem] text-[#737b84] mt-[1rem] mb-[2rem]">
          {firstArticle.description}
        </p>
        <span className="text-[#ba181b] ">{firstArticle.author}</span>
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2
      </div>
    </div>
  );
}
