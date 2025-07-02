<<<<<<< HEAD
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
=======
const API_KEY = "e2a4bb6c0368486287a97821cf7bda4c";
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

export async function getNews(category) {
  const url = `https://newsapi.org/v2/top-headlines?sources=${category}&apiKey=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) throw Error("Failed getting news");

  const data = await res.json();

  return data.articles;
}
