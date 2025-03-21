"use client";

import { useTheme } from "next-themes";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsContent } from "@/components/ui/tabs";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";

const AppearanceSkeleton = () => {
  return (
    <div className="bg-card space-y-6 rounded-lg p-6">
      {/* Section Container */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" /> {/* Title */}
        <Skeleton className="h-4 w-2/3" /> {/* Subtitle */}
      </div>

      {/* Theme Mode Placeholder */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>

      {/* Additional Settings Placeholder */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/4" /> {/* Title */}
        <Skeleton className="h-4 w-2/3" /> {/* Subtitle */}
      </div>
    </div>
  );
};

export const AppearanceTab = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return <AppearanceSkeleton />;

  return (
    <TabsContent value="appearance" className="mt-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Appearance Settings</CardTitle>
          <CardDescription>Customize how Devopage looks for you.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {/* Theme Selection Section */}
          <div>
            <h3 className="text-lg font-semibold">Theme Mode</h3>
            <p className="text-muted-foreground text-sm">Select your preferred theme mode.</p>
            <div className="mt-4 flex w-fit flex-col items-center gap-4 md:flex-row md:justify-start md:gap-8">
              {/* Light Mode Button */}
              <button
                onClick={() => setTheme("light")}
                className={cn(
                  "w-full max-w-[180px] rounded-lg border p-4 transition-all sm:w-[180px] md:max-w-fit",
                  theme === "light" ? "border-primary scale-105 shadow-lg" : "opacity-50",
                )}
              >
                <svg width="100%" height="auto" viewBox="0 0 160 120">
                  <rect width="160" height="120" rx="10" fill="#f5f5f5" stroke="#ddd" />
                  <rect x="0" y="0" width="40" height="120" fill="#e0e0e0" />
                  <rect x="10" y="20" width="20" height="10" rx="5" fill="#bbb" />
                  <rect x="50" y="20" width="90" height="12" rx="5" fill="#ccc" />
                  <rect x="50" y="40" width="70" height="10" rx="5" fill="#aaa" />
                  <rect x="50" y="60" width="40" height="10" rx="5" fill="#bbb" />
                </svg>
                <p className="mt-2 text-center text-sm">Light Mode</p>
              </button>

              {/* Dark Mode Button */}
              <button
                onClick={() => setTheme("dark")}
                className={cn(
                  "w-full max-w-[180px] rounded-lg border p-4 transition-all sm:w-[180px]",
                  theme === "dark" ? "border-primary scale-105 shadow-lg" : "opacity-50",
                )}
              >
                <svg width="100%" height="auto" viewBox="0 0 160 120">
                  <rect width="160" height="120" rx="10" fill="#222" stroke="#444" />
                  <rect x="0" y="0" width="40" height="120" fill="#333" />
                  <rect x="10" y="20" width="20" height="10" rx="5" fill="#555" />
                  <rect x="50" y="20" width="90" height="12" rx="5" fill="#666" />
                  <rect x="50" y="40" width="70" height="10" rx="5" fill="#777" />
                  <rect x="50" y="60" width="40" height="10" rx="5" fill="#555" />
                </svg>
                <p className="mt-2 text-center text-sm">Dark Mode</p>
              </button>
            </div>
          </div>

          {/* Placeholder for Future Sections */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Additional Settings</h3>
            <p className="text-muted-foreground text-sm">
              More appearance settings will be available here.
            </p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
