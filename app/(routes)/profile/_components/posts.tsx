import React from "react";
import { LucideMessageSquare, LucideShare2, LucideThumbsUp } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

export const PostsTab = () => {
  return (
    <TabsContent
      value="posts"
      className="mt-5 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
    >
      {/* {user.posts.map((post, index) => (
        <Card key={index} className="max-w-full overflow-hidden lg:w-auto lg:max-w-[400px]">
          <CardHeader>
            <div className="mb-3 flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-muted-foreground text-xs">{post.date}</p>
              </div>
            </div>
            <CardTitle className="text-lg">{post.title}</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <p className="text-muted-foreground">{post.content}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex justify-between border-t py-3">
            <div className="mt-auto flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
                <LucideThumbsUp className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
                <LucideMessageSquare className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
              <LucideShare2 className="h-4 w-4" />
              <span>{post.shares}</span>
            </Button>
          </CardFooter>
        </Card>
      ))} */}
    </TabsContent>
  );
};
