const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(category) {
  const url = `https://newsapi.org/v2/top-headlines?sources=${category}&apiKey=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) throw Error("Failed getting news");

  const data = await res.json();

  return data.articles;
}
