"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Lock, LogIn, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "@/lib/auth-client";

interface NotLoggedInEmptyStateProps {
  title?: string;
  description?: string;
  loginPath?: string;
}

export const NotLoggedInEmptyState = ({
  title = "Authentication Required",
  description = "You need to be logged in to view this page. Please sign in to continue.",
}: NotLoggedInEmptyStateProps) => {
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn.social({
      provider: "github",
      callbackURL: pathName,
    });
  };

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-4 md:my-auto md:min-h-screen">
      <Card className="border-opacity-50 w-full max-w-md shadow-lg">
        <CardHeader className="pb-2 text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-muted rounded-full p-3">
              <Lock className="text-muted-foreground h-10 w-10" />
            </div>
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-center">
          <p>{description}</p>
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4" />
              <span>Secure authentication</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <LogIn className="h-4 w-4" />
              <span>Quick and easy login process</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pt-2 pb-6">
          <Button onClick={handleLogin} disabled={isLoading} className="w-full max-w-xs">
            {isLoading ? "Redirecting..." : "Log In"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
