import Image from "next/image";
import { LucideCalendarDays, LucideClock, LucideHeart, LucideMessageSquare } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";


export const ArticlesTab = () => {
  return (
    <TabsContent
      value="articles"
      className="mt-5 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
    >
      {/* {user.articles.map((article, index) => (
        <Card key={index} className="max-w-[400px] overflow-hidden p-0 lg:w-auto">
          <div className="relative h-56">
            <Image
              priority
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <Badge className="absolute top-4 left-4 z-10">{article.category}</Badge>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5">
                <LucideCalendarDays className="h-3.5 w-3.5" />
                <span>{article.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <LucideClock className="h-3.5 w-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <CardTitle className="mt-2 mb-3 text-xl">{article.title}</CardTitle>
            <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <LucideHeart className="h-4 w-4 text-rose-500" />
                  <span>{article.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LucideMessageSquare className="h-4 w-4" />
                  <span>{article.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))} */}
    </TabsContent>
  );
};
