import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sidebar } from "./_components/sidebar";
import { BottomNavigation } from "./_components/botton-nav";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideTrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Devopage - Developer Social Platform",
  description: "Connect, share, and grow with the developer community",
};

const TRENDING_TAGS = [
  { name: "React", count: "2.1k posts" },
  { name: "TypeScript", count: "1.8k posts" },
  { name: "NextJS", count: "1.2k posts" },
  { name: "Python", count: "987 posts" },
  { name: "WebDev", count: "856 posts" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex md:w-64 lg:w-72">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="bg-background flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
      <div className="hidden h-screen w-80 flex-col gap-4 px-4 py-6 md:flex">
        <Card>
          <CardHeader>
            <h3 className="flex items-center gap-2 font-semibold">
              <LucideTrendingUp className="h-4 w-4" />
              Trending
            </h3>
          </CardHeader>
          <CardContent className="space-y-3">
            {TRENDING_TAGS.map((tag, index) => (
              <div key={index} className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 cursor-pointer"
                >
                  #{tag.name}
                </Badge>
                <span className="text-muted-foreground text-xs">
                  {tag.count}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="flex items-center gap-2 font-semibold">
              <LucideTrendingUp className="h-4 w-4" />
              Trending
            </h3>
          </CardHeader>
          <CardContent className="space-y-3">
            {TRENDING_TAGS.map((tag, index) => (
              <div key={index} className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 cursor-pointer"
                >
                  #{tag.name}
                </Badge>
                <span className="text-muted-foreground text-xs">
                  {tag.count}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <BottomNavigation />
    </div>
  );
}
