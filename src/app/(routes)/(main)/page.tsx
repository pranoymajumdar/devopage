import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
  Code2,
  GitBranch,
  Star,
  Eye,
  ExternalLink,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";

const MOCK_POSTS = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      username: "@sarahdev",
      avatar: "/api/placeholder/40/40",
      verified: true,
    },
    content:
      "Just deployed my first Next.js 14 app with the new App Router! The developer experience is incredible. Server components make everything so much faster. 🚀",
    timestamp: "2h ago",
    likes: 142,
    comments: 23,
    shares: 8,
    tags: ["NextJS", "React", "WebDev"],
    type: "text",
  },
  {
    id: 2,
    author: {
      name: "Alex Rodriguez",
      username: "@alexcodes",
      avatar: "/api/placeholder/40/40",
    },
    content:
      "Working on a new open-source project - a lightweight state management library for React. Would love to get some feedback from the community!",
    timestamp: "4h ago",
    likes: 89,
    comments: 15,
    shares: 12,
    tags: ["OpenSource", "React", "StateManagement"],
    type: "project",
    project: {
      name: "react-simple-state",
      description: "Lightweight state management for React applications",
      language: "TypeScript",
      stars: 156,
      url: "https://github.com/alexcodes/react-simple-state",
    },
  },
  {
    id: 3,
    author: {
      name: "DevTech Weekly",
      username: "@devtechweekly",
      avatar: "/api/placeholder/40/40",
      verified: true,
    },
    content:
      "🔥 This Week in Tech:\n\n• Bun 1.0 released - faster than Node.js\n• GitHub Copilot Chat goes GA\n• Vercel announces v0 - AI for UI generation\n• New CSS features in Chrome 118\n\nWhat caught your attention this week?",
    timestamp: "6h ago",
    likes: 267,
    comments: 45,
    shares: 34,
    tags: ["WeeklyNews", "WebDev", "AI", "CSS"],
    type: "news",
  },
  {
    id: 4,
    author: {
      name: "Maya Patel",
      username: "@mayacodes",
      avatar: "/api/placeholder/40/40",
    },
    content:
      "const fibonacci = (n) => n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2);\n\n// Optimized with memoization\nconst fibMemo = (n, memo = {}) => {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  return memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);\n};\n\nThe power of memoization! 📈",
    timestamp: "8h ago",
    likes: 178,
    comments: 29,
    shares: 15,
    tags: ["JavaScript", "Algorithms", "Performance"],
    type: "code",
  },
];

const TRENDING_TAGS = [
  { name: "React", count: "2.1k posts" },
  { name: "TypeScript", count: "1.8k posts" },
  { name: "NextJS", count: "1.2k posts" },
  { name: "Python", count: "987 posts" },
  { name: "WebDev", count: "856 posts" },
];

const SUGGESTED_DEVS = [
  {
    name: "John Doe",
    username: "@johndoe",
    followers: "15k",
    avatar: "/api/placeholder/32/32",
  },
  {
    name: "Jane Smith",
    username: "@janesmith",
    followers: "12k",
    avatar: "/api/placeholder/32/32",
  },
  {
    name: "Mike Johnson",
    username: "@mikejs",
    followers: "8.5k",
    avatar: "/api/placeholder/32/32",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="space-y-6 lg:col-span-2">
        {/* Feed Posts */}
        {MOCK_POSTS.map((post) => (
          <Card key={post.id} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{post.author.name}</h4>
                      {post.author.verified && (
                        <Badge variant="secondary" className="text-xs">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {post.author.username} · {post.timestamp}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              {/* Post Content */}
              <div className="space-y-4">
                <p
                  className={`${post.type === "code" ? "bg-muted rounded-lg p-3 font-mono text-sm" : ""}`}
                >
                  {post.content}
                </p>

                {/* Project Card for project posts */}
                {post.type === "project" && post.project && (
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h5 className="flex items-center gap-2 font-semibold">
                            <GitBranch className="h-4 w-4" />
                            {post.project.name}
                          </h5>
                          <p className="text-muted-foreground text-sm">
                            {post.project.description}
                          </p>
                          <div className="text-muted-foreground flex items-center gap-4 text-xs">
                            <span>{post.project.language}</span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {post.project.stars}
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-red-500"
                  >
                    <Heart className="mr-1 h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-blue-500"
                  >
                    <MessageCircle className="mr-1 h-4 w-4" />
                    {post.comments}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-green-500"
                  >
                    <Share className="mr-1 h-4 w-4" />
                    {post.shares}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-yellow-500"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="w-full">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
}
