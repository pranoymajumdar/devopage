import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LucideCompass,
  LucideHome,
  LucideMessageCircle,
  LucidePlus,
  LucideUser,
} from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: LucideHome,
    badge: 0,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: LucideCompass,
    badge: 0,
  },
  {
    label: "Create",
    href: "/create",
    icon: LucidePlus,
    badge: 0,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: LucideMessageCircle,
    badge: 3,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: LucideUser,
    badge: 0,
  },
];

export function BottomNavigation() {
  return (
    <div className="bg-secondary/90 supports-[backdrop-filter]:bg-secondary/70 fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-md -translate-x-1/2 rounded-full border backdrop-blur md:hidden">
      <div className="mx-auto grid h-full max-w-md grid-cols-5">
        {navLinks.map((link, index) => {
          if (link.href === "/create") {
            return (
              <Button
                key={link.href}
                className="m-auto rounded-full"
                size="icon"
              >
                <LucidePlus />
              </Button>
            );
          }
          return (
            <button
              key={link.href}
              className={cn(
                "hover:bg-accent group relative inline-flex flex-col items-center justify-center px-5",
                navLinks.length === index + 1 && "rounded-e-full",
                index === 0 && "rounded-s-full",
              )}
            >
              <link.icon className="group-hover:text-primary text-muted-foreground" />
              <span className="sr-only">Home</span>
              {link.badge > 0 && (
                <div className="bg-primary absolute bottom-2 h-1 w-1 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
