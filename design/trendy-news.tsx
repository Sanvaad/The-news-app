import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface TrendyNewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  image: string;
  category: string;
  readTime: string;
}

interface TrendyNewsProps {
  articles: TrendyNewsItem[];
}

export function TrendyNews({ articles }: TrendyNewsProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Trendy news</h2>
        <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600 font-medium">
          <span>See more</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="text-xs">
                    {article.source.split(" ")[0][0]}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">
                  {article.source}
                </span>
                <span className="text-xs text-gray-500">• {article.time}</span>
              </div>

              <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-3 line-clamp-3">
                {article.title}
              </h3>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {article.category}
                </Badge>
                <span className="text-xs text-gray-500">
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
