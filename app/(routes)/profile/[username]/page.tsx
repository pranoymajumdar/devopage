import { headers } from "next/headers";
import Link from "next/link";
import { auth } from "@/server/auth";
import { prisma } from "@/server/prisma";
import {
  LucideCalendarDays,
  LucideEdit,
  LucideLayoutDashboard,
  LucideLink as LucideLinkIcon,
  LucideMapPin,
  LucideMessageSquare,
  LucideUser,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import UserNotFoundPage from "../_components/not-found";
import { NavigationTabs } from "../_components/tabs";

const user = {
  name: "John Doe",
  username: "@johndoe",
  bio: "Full-stack developer | Open source enthusiast | Tech writer",
  location: "Odisha, IN",
  website: "johndoe.dev",
  joinDate: "Joined January 2020",
  avatar: "https://github.com/shadcn.png",
  coverImage:
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop",
  stats: {
    followers: 1234,
    following: 567,
  },
  skills: ["React", "TypeScript", "Node.js", "Python", "AWS"],
  articles: [
    {
      title: "Building Modern Web Applications with Next.js",
      date: "2 days ago",
      readTime: "5 min read",
      likes: 42,
      comments: 18,
      category: "Web Development",
      excerpt:
        "Learn how to build scalable and performant web applications using Next.js and modern web technologies...",
      coverImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "The Future of TypeScript in 2024",
      date: "1 week ago",
      readTime: "8 min read",
      likes: 89,
      comments: 32,
      category: "Programming",
      excerpt:
        "Explore the latest features and best practices in TypeScript that are shaping the future of web development...",
      coverImage:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Getting Started with Rust for System Programming",
      date: "3 weeks ago",
      readTime: "6 min read",
      likes: 55,
      comments: 22,
      category: "System Programming",
      excerpt:
        "Rust is becoming the go-to language for system programming. Here's how to get started...",
      coverImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Mastering React Hooks: A Deep Dive",
      date: "5 days ago",
      readTime: "7 min read",
      likes: 73,
      comments: 19,
      category: "React.js",
      excerpt: "A comprehensive guide to understanding and using React hooks efficiently...",
      coverImage:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Exploring the Power of Golang for Backend Development",
      date: "1 month ago",
      readTime: "9 min read",
      likes: 64,
      comments: 27,
      category: "Backend Development",
      excerpt:
        "Why Golang is gaining popularity in backend development and how you can get started...",
      coverImage:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Understanding Docker and Kubernetes for DevOps",
      date: "2 weeks ago",
      readTime: "10 min read",
      likes: 98,
      comments: 45,
      category: "DevOps",
      excerpt:
        "A beginner-friendly guide to containerization and orchestration with Docker and Kubernetes...",
      coverImage:
        "https://images.unsplash.com/photo-1742063730527-ef243ba6fb50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Design Patterns Every Developer Should Know",
      date: "4 days ago",
      readTime: "12 min read",
      likes: 77,
      comments: 33,
      category: "Software Engineering",
      excerpt:
        "A practical guide to essential design patterns that improve code maintainability and scalability...",
      coverImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Web Performance Optimization Techniques",
      date: "6 days ago",
      readTime: "6 min read",
      likes: 45,
      comments: 12,
      category: "Web Performance",
      excerpt:
        "Learn various techniques to optimize your website for better performance and user experience...",
      coverImage:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Introduction to AI-Powered Web Development",
      date: "3 days ago",
      readTime: "9 min read",
      likes: 112,
      comments: 48,
      category: "AI & Web",
      excerpt:
        "Discover how artificial intelligence is revolutionizing web development and what tools you can use...",
      coverImage:
        "https://images.unsplash.com/photo-1742063730527-ef243ba6fb50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "GraphQL vs REST: Choosing the Right API for Your Project",
      date: "1 week ago",
      readTime: "7 min read",
      likes: 58,
      comments: 21,
      category: "API Development",
      excerpt:
        "A detailed comparison of GraphQL and REST APIs to help you decide which one fits your project best...",
      coverImage:
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop",
    },
  ],

  posts: [
    {
      title: "Just released my new open-source project! 🚀",
      date: "3 days ago",
      likes: 156,
      comments: 23,
      shares: 12,
      content:
        "Excited to share my latest project - a modern UI component library built with React and TypeScript. It includes 50+ accessible components with dark mode support and customizable themes. Check it out and let me know what you think!",
      tags: ["React", "UI Library", "Open Source"],
    },
    {
      title: "Looking for contributors for my React library",
      date: "1 week ago",
      likes: 78,
      comments: 12,
      shares: 5,
      content:
        "We're building something amazing and would love to have more contributors join our community. Whether you're a designer, developer, or documentation writer, there's a place for you on our team. DM me if you're interested!",
      tags: ["React", "Contributors", "Open Source"],
    },
    {
      title: "Just hit 10k stars on GitHub! ⭐",
      date: "2 days ago",
      likes: 220,
      comments: 45,
      shares: 18,
      content:
        "My open-source project just crossed 10,000 stars on GitHub! Thank you all for your support. Excited to see where this goes next.",
      tags: ["GitHub", "Milestone", "Open Source"],
    },
    {
      title: "Best way to learn TypeScript?",
      date: "5 days ago",
      likes: 90,
      comments: 30,
      shares: 7,
      content:
        "I'm diving into TypeScript and would love some recommendations on courses or tutorials. What helped you the most when learning TS?",
      tags: ["TypeScript", "Learning", "Programming"],
    },
    {
      title: "Frontend vs Backend: Which one do you prefer?",
      date: "1 week ago",
      likes: 135,
      comments: 67,
      shares: 20,
      content:
        "Curious to know which side of web development people enjoy the most! Do you prefer frontend, backend, or full-stack development?",
      tags: ["Frontend", "Backend", "Web Development"],
    },
    {
      title: "New blog post: Optimizing React performance",
      date: "3 weeks ago",
      likes: 55,
      comments: 10,
      shares: 6,
      content:
        "I've written a detailed blog post on how to optimize React applications for better performance. Check it out and let me know your thoughts!",
      tags: ["React", "Performance", "Web Dev"],
    },
    {
      title: "Is Golang the future of backend development? 🤔",
      date: "2 weeks ago",
      likes: 80,
      comments: 40,
      shares: 14,
      content:
        "I've been experimenting with Golang for backend projects, and it's been a game-changer. What are your thoughts on using Go for web development?",
      tags: ["Golang", "Backend", "Programming"],
    },
    {
      title: "Dark mode or light mode? 🌙☀️",
      date: "4 days ago",
      likes: 102,
      comments: 50,
      shares: 16,
      content:
        "Let's settle this once and for all: Do you prefer dark mode or light mode when coding? Vote below! 🔥",
      tags: ["Dark Mode", "UI/UX", "Preferences"],
    },
    {
      title: "Best VS Code extensions for developers",
      date: "6 days ago",
      likes: 77,
      comments: 22,
      shares: 9,
      content:
        "Here’s a list of my top VS Code extensions that boost productivity. What are your favorites?",
      tags: ["VS Code", "Tools", "Productivity"],
    },
    {
      title: "How do you stay motivated while coding?",
      date: "1 month ago",
      likes: 200,
      comments: 75,
      shares: 30,
      content:
        "Sometimes coding can be frustrating, especially when you're stuck on a bug. How do you keep yourself motivated?",
      tags: ["Motivation", "Programming", "Coding"],
    },
  ],
};

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const { username } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const profile = await prisma.profile.findFirst({
    where: {
      username: username,
    },
    include: { user: true },
  });
  if (!profile) return <UserNotFoundPage />;

  return (
    <div className="min-h-screen">
      <div className="space-y-8">
        <div className="relative container mx-auto mt-6 px-4">
          <div className="flex flex-col lg:flex-row lg:gap-6">
            <Avatar className="bg-background h-32 w-32 border-4 shadow-md lg:h-28 lg:w-28">
              <AvatarImage
                src={profile.avatar || profile.user.image || ""}
                alt={profile.user.name}
              />
              <AvatarFallback className="text-4xl">{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="mt-4 flex w-full max-w-full flex-col flex-wrap lg:mt-0 lg:text-left">
              <h1 className="text-2xl font-bold lg:text-3xl">{profile.user.name}</h1>
              <p className="text-muted-foreground">{profile.username}</p>

              <div className="mt-2 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-medium">{user.stats.followers}</span>
                  <span className="text-muted-foreground">Followers</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{user.stats.following}</span>
                  <span className="text-muted-foreground">Following</span>
                </div>
              </div>

              <p className="text-muted-foreground mt-2 max-w-2xl">{user.bio}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {user.skills.map((skill) => (
                  <Badge key={skill} className="capitalize" variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-3 flex flex-col space-y-2 text-xs lg:mt-3 lg:flex-row lg:gap-6 lg:space-y-0 lg:text-sm">
                <div className="text-muted-foreground flex items-center gap-2">
                  <LucideMapPin className="h-3.5 w-3.5 flex-shrink-0 lg:h-4 lg:w-4" />
                  <span className="truncate">{user.location}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <LucideLinkIcon className="h-3.5 w-3.5 flex-shrink-0 lg:h-4 lg:w-4" />
                  <Link
                    href={`https://${user.website}`}
                    className="text-primary truncate hover:underline"
                    target="_blank"
                  >
                    {user.website}
                  </Link>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <LucideCalendarDays className="h-3.5 w-3.5 flex-shrink-0 lg:h-4 lg:w-4" />
                  <span className="truncate">{user.joinDate}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex w-full max-w-full flex-wrap gap-3 lg:mt-0 lg:w-fit lg:max-w-fit lg:self-start">
              {session?.user.id === profile.userId ? (
                <>
                  <Button className="flex-1">
                    <LucideEdit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <LucideLayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </>
              ) : (
                <>
                  <Button className="flex-1">
                    <LucideUser className="mr-2 h-4 w-4" />
                    Follow
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <LucideMessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <Separator />
        <div className="container mx-auto px-4">
          <NavigationTabs />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
