import { getUserSession } from '~/lib/user/getUserSession';
import { Route } from './+types/route';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getUserSession(request);

  return session;
};

export default function Home({}: Route.ComponentProps) {
  return <section className="w-full">
    {
      Array.from({length: 1000}, (_, k) => {
        return <h1 key={k}>Heading: {k}</h1>
      })
    }
  </section>;
}
