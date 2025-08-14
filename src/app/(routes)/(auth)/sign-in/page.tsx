"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { signIn } from "@/lib/auth/client";
import { LucideGithub, LucideLoader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { AuthWrapper } from "./_components/auth-wrapper";
import { useTransition } from "react";

export default function SignInPage() {
  const [isSignInPending, startSignInTransition] = useTransition();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  return (
    <AuthWrapper>
      <Card className="mx-auto w-full sm:w-[450px]">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Button
              className="w-full after:flex-1"
              disabled={isSignInPending}
              onClick={() =>
                startSignInTransition(async () => {
                  await signIn.social({
                    provider: "github",
                    callbackURL: next,
                  });
                })
              }
            >
              {isSignInPending ? (
                <LucideLoader2 className="animate-spin" />
              ) : (
                <>
                  <span className="pointer-events-none me-2 flex-1">
                    <LucideGithub
                      className="opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                  </span>
                  Login with GitHub
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </AuthWrapper>
  );
}
