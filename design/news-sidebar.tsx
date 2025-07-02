import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  author: string;
  time: string;
  image: string;
  excerpt: string;
}

interface NewsSidebarProps {
  articles: NewsItem[];
}

export function NewsSidebar({ articles }: NewsSidebarProps) {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <div key={article.id} className="flex space-x-4">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={120}
            height={80}
            className="w-30 h-20 object-cover rounded-lg flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="text-xs">
                  {article.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-900">
                {article.author}
              </span>
              <span className="text-xs text-gray-500">• {article.time}</span>
            </div>

            <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
              {article.title}
            </h3>

            <p className="text-xs text-gray-600 line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
