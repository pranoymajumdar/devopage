import { getSession, sessionStorage } from '~/server/session.server';
import { Route } from './+types/logout';
import { redirect } from 'react-router';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
};
