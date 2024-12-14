import { getUserSession } from '~/lib/user/getUserSession';
import { Route } from './+types/route';
import { Button } from '~/components/ui/button';
import { LucideHash, LucideLayout } from 'lucide-react';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getUserSession(request);

  return session;
};
export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between max-sm:flex-row-reverse">
        <div className="flex gap-3 items-center">
          <Button variant="default">For You</Button>
          <Button variant="secondary">Following</Button>
        </div>

        <div className="flex gap-3 items-center">
        <Button size="icon" variant="secondary">
            <LucideHash />
          </Button>
          <Button size="icon" variant="secondary">
            <LucideLayout />
          </Button>
        </div>
      </div>
    </section>
  );
}
