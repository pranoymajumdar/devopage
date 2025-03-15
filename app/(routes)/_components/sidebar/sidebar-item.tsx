import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import type { TSidebarItem } from "../types";

export const SidebarItem = ({ icon: Icon, label, href }: TSidebarItem) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    pathname === href ||
    pathname?.startsWith(`${href}/`) ||
    (pathname === "/" && href === "/");

  return (
    <button
      onClick={() => router.push(href)}
      className={cn(
        "flex items-center w-full gap-x-2 text-sm font-medium transition-all",
        "text-muted-foreground hover:text-foreground/80 active:text-foreground",
        "hover:bg-secondary/40 active:bg-secondary/60",
        isActive && "bg-secondary text-foreground hover:bg-secondary/70"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <div className="px-6 flex gap-x-2 items-center py-4">
        <Icon size={22} />
        <span>{label}</span>
      </div>
      <div
        className={cn(
          "ml-auto h-full w-[3px] bg-foreground opacity-0 transition-opacity",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
