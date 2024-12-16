import { getUserSession } from '~/lib/user/getUserSession';
import { Route } from './+types/route';
import { Button } from '~/components/ui/button';
import { LucideBolt, LucideGroup, LucideMoreHorizontal, LucideStars } from 'lucide-react';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getUserSession(request);

  return session;
};

export default function Home({}: Route.ComponentProps) {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Button size="sm" variant="secondary">
            <LucideStars />
            <span>Personalized</span>
          </Button>
          <Button size="sm" variant="ghost">
            <LucideBolt />
            <span>For You</span>
          </Button>
          <Button size="sm" variant="ghost">
            <LucideGroup />
            <span>Following</span>
          </Button>
        </div>
        <Button size="icon" variant="outline">
          <LucideMoreHorizontal />
        </Button>
      </div>
    </section>
  );
}
