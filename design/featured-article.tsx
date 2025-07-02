import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import Image from "next/image";

interface FeaturedArticleProps {
  article: {
    title: string;
    image: string;
    category: string;
    readTime: string;
    url: string;
  };
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-black text-white">
      <Image
        src={article.image || "/placeholder.svg"}
        alt={article.title}
        width={600}
        height={400}
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
            {article.category}
          </Badge>
          <div className="flex items-center space-x-1 text-white/80 text-sm">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          {article.title}
        </h1>
      </div>
    </div>
  );
}
