import { authenticator } from '~/server/auth.server';
import { Route } from './+types/login';

export const loader = async ({ request }: Route.LoaderArgs) => {
  return await authenticator.authenticate('github', request);
};
