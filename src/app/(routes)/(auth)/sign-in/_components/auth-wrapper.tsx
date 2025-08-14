import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth/client";
import { LucideArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

export function AuthWrapper({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (sessionData) {
      return router.replace("/");
    }
  }, [router, sessionData]);

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 md:px-6 lg:px-8 xl:px-10">
      <div className="flex">
        <Button variant="outline" onClick={() => router.back()}>
          <LucideArrowLeft />
          Back
        </Button>
      </div>

      {children}
    </main>
  );
}
