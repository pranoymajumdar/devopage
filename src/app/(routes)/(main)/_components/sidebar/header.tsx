import { Button } from "@/components/ui/button";
import { LucideCode2, LucidePlus } from "lucide-react";

export function SidebarHeader() {
  return (
    <div className="p-4">
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
          <LucideCode2 className="text-primary-foreground h-4 w-4" />
        </div>
        <span className="text-lg font-semibold">Devopage</span>
      </div>

      <Button className="w-full">
        <LucidePlus className="mr-2 h-4 w-4" />
        Create Post
      </Button>
    </div>
  );
}
