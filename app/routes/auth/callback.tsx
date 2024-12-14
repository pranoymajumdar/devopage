import { redirect } from 'react-router';
import { authenticator } from '~/server/auth.server';
import type { Route } from './+types/callback';
import { commitSession, getSession } from '~/server/session.server';
import { getUser } from '~/lib/user/getUser';

export async function loader({ request }: Route.LoaderArgs) {
  try {
    const auth = await authenticator.authenticate('github', request);
    const session = await getSession();
    session.set('userId', auth.user.id);
    session.set('userData', auth.user);
    return redirect('/', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  } catch (error) {
    return redirect('/auth/login');
  }
}
