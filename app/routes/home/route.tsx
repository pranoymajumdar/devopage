import { getUserSession } from '~/lib/user/getUserSession';
import { Route } from './+types/route';


export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getUserSession(request);

  return session;
};
export default function Home({ loaderData }: Route.ComponentProps) {

  return (
    <section>
      Content
    </section>
  );
}
