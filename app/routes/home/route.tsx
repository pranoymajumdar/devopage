import { getUserSession } from '~/lib/user/getUserSession';
import { Route } from './+types/route';
import { Button } from '~/components/ui/button';
import { LucideHash, LucideLayout, LucideMoreHorizontal } from 'lucide-react';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getUserSession(request);

  return session;
};
export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Button variant="default">For You</Button>
          <Button variant="secondary">Following</Button>
        </div>

        <Button size='icon' variant='outline'><LucideMoreHorizontal/></Button>
      </div>
    </section>
  );
}
