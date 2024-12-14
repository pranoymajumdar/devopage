import { getSession } from '~/server/session.server';
import type { UserSession } from '~/types/user';

export const getUserSession = async (request: Request): Promise<UserSession> => {
  const session = await getSession(request.headers.get('Cookie'));
  const userId: UserSession['userId'] = await session.get('userId');
  const userData: UserSession['userData'] = await session.get('userData');

  const isAuthenticated = !!userId;

  return {
    isAuthenticated,
    userId,
    userData,
  };
};
