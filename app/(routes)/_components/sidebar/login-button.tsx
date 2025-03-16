"use client";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";

const LoginButton = () => {
  const pathName = usePathname();
  return (
    <Button
      className="w-full"
      size="lg"
      onClick={async () => {
        await signIn.social({
          provider: "github",
          callbackURL: pathName,
        });
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
