"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type LogoProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white" | "theme";
  withText?: boolean;
  textSize?: "sm" | "md" | "lg";
  withAnimation?: boolean;
};

export default function Logo({
  className,
  size = "lg",
  withText = true,
  textSize = "md",
  withAnimation = false,
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    xs: "h-5 w-auto",
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-12 w-auto",
    xl: "h-16 w-auto",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className={cn("flex items-center gap-2.5", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={withAnimation ? "initial" : false}
        animate={withAnimation ? "animate" : false}
        variants={containerVariants}
        className={cn(sizeClasses[size])}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Modern square with rounded corners */}
          <rect
            x="4"
            y="4"
            width="32"
            height="32"
            rx="8"
            className="fill-muted stroke-muted-foreground/10"
          />

          {/* Main logo shape - stylized "D" */}
          <path
            d="M12 10H20C24.4183 10 28 13.5817 28 18V22C28 26.4183 24.4183 30 20 30H12V10Z"
            className="fill-foreground"
          />

          {/* Inner cutout for the "D" */}
          <path
            d="M16 16H20C21.1046 16 22 16.8954 22 18V22C22 23.1046 21.1046 24 20 24H16V16Z"
            className="fill-muted"
          />

          {/* Accent line */}
          <motion.path
            d="M24 16H28"
            className="stroke-foreground"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              x: isHovered ? [0, 2, 0] : 0,
              transition: { duration: 0.5 },
            }}
          />

          {/* Second accent line */}
          <motion.path
            d="M24 24H28"
            className="stroke-foreground"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              x: isHovered ? [0, 2, 0] : 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
          />

          {/* Third accent line */}
          <motion.path
            d="M24 20H26"
            className="stroke-foreground"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              x: isHovered ? [0, 2, 0] : 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          />
        </svg>
      </motion.div>

      {withText && (
        <div className="flex flex-col">
          <motion.div
            initial={withAnimation ? { opacity: 0 } : false}
            animate={withAnimation ? { opacity: 1 } : false}
            transition={{ duration: 0.3 }}
            className={cn(
              textSizeClasses[textSize],
              "text-foreground",
              montserrat.className,
              "leading-none font-semibold tracking-tight",
            )}
          >
            DevoPage
          </motion.div>
          <motion.div
            initial={withAnimation ? { opacity: 0 } : false}
            animate={withAnimation ? { opacity: 1 } : false}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={cn("text-muted-foreground text-xs", montserrat.className, "font-medium")}
          >
            Developers Platform
          </motion.div>
        </div>
      )}
    </div>
  );
}
