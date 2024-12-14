import { type ReactNode } from 'react';
import { useLoaderData } from 'react-router';
import type { UserSession } from '~/types/user';

export default function Authenticated({ children }: { children: ReactNode }) {
  const { userSession }: { userSession: UserSession } = useLoaderData();
  if (userSession.isAuthenticated) {
    return children;
  }
}
