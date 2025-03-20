import { LucideBookOpen, LucideList, LucideVote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArticlesTab } from "./articles";
import { PostsTab } from "./posts";

export const NavigationTabs = () => {
  return (
    <Tabs defaultValue="articles" className="container mx-auto mb-8 px-4">
      <TabsList className="bg-secondary dark:bg-secondary/20 mx-auto w-full lg:mx-0 lg:w-[400px]">
        <TabsTrigger value="articles">
          <LucideBookOpen size={16} className="-ms-0.5 me-1.5 opacity-60" />
          Articles
          <Badge variant="secondary">2</Badge>
        </TabsTrigger>
        <TabsTrigger value="posts">
          <LucideList size={16} className="-ms-0.5 me-1.5 opacity-60" />
          Posts
          <Badge variant="secondary">5</Badge>
        </TabsTrigger>
        <TabsTrigger value="polls" disabled>
          <LucideVote size={16} className="-ms-0.5 me-1.5 opacity-60" />
          Polls
          <Badge variant="secondary">0</Badge>
        </TabsTrigger>
      </TabsList>
      <ArticlesTab />
      <PostsTab />
    </Tabs>
  );
};
