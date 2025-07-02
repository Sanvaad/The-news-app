import { Header } from "@/components/header";
import { NewsUpdate } from "@/components/news-update";
import { FeaturedArticle } from "@/components/featured-article";
import { NewsSidebar } from "@/components/news-sidebar";
import { TrendyNews } from "@/components/trendy-news";

// Mock data to match the design
const featuredArticle = {
  id: 1,
  title: "Record-Breaking Performance Propels Team to Dominant Win",
  image: "/placeholder.svg?height=400&width=600",
  category: "Basketball",
  readTime: "40 minutes",
  url: "#",
};

const sidebarNews = [
  {
    id: 1,
    title: "Player X's heroics lead team to victory against rivals",
    author: "John William Smith",
    time: "10 minutes ago",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "In a passionate match against his eternal rival, Player X shows his prowess by scoring read more...",
  },
  {
    id: 2,
    title: "Team sets new scoring high in blowout win",
    author: "Bob Costas",
    time: "8 minutes ago",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "Team scored more points in this game than they ever have before, setting a new record for read more...",
  },
  {
    id: 3,
    title: "NBA players give back in local charity event",
    author: "Stephen A. Smith",
    time: "6 minutes ago",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "The phrase 'give back' implies that the players are showing gratitude or a sense of read more...",
  },
];

const trendyNews = [
  {
    id: 1,
    title: "Key player out indefinitely, team's playoff hopes in jeopardy",
    source: "FIBA News",
    time: "10 minutes ago",
    image: "/placeholder.svg?height=200&width=300",
    category: "Basketball Olympics",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Basketball's rising star a closer look at the league's newest",
    source: "CNN News",
    time: "10 minutes ago",
    image: "/placeholder.svg?height=200&width=300",
    category: "Asian games",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Underdog team stuns fans with surprise win",
    source: "FIBA News",
    time: "10 minutes ago",
    image: "/placeholder.svg?height=200&width=300",
    category: "FIBA Asia Cup",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Star player leads team to victory in intense basketball showdown",
    source: "BCC News",
    time: "10 minutes ago",
    image: "/placeholder.svg?height=200&width=300",
    category: "NBA Global Games",
    readTime: "5 min read",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NewsUpdate />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <FeaturedArticle article={featuredArticle} />
          </div>
          <div className="lg:col-span-1">
            <NewsSidebar articles={sidebarNews} />
          </div>
        </div>

        <TrendyNews articles={trendyNews} />
      </main>
    </div>
  );
}
