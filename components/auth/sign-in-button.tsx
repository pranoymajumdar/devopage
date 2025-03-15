"use client";

import { signInAction } from "@/app/_actions/auth/sign-in";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from "react";

type SignInButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const SignInButton = forwardRef<HTMLButtonElement, SignInButtonProps>(
  ({ children, className, ...props }, ref) => {
    const pathName = usePathname();
    return (
      <button
        ref={ref}
        onClick={() => signInAction(pathName)}
        className={cn(className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SignInButton.displayName = "SignInButton";
