import { useState } from 'react';
import { Button, ButtonProps, buttonVariants } from '~/components/ui/button';
import { NavLink } from 'react-router';
import { cn } from '~/lib/utils';
import type { UserSession } from '~/types/user';
import Authenticated from '~/components/wrappers/authenticated';
import { LucideBell } from 'lucide-react';
import HeaderMenu from './menu';
import Notifications from './notifications';

export default function LeftButtons({ userSession }: { userSession: UserSession }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {userSession.isAuthenticated === false && (
        <NavLink to="/auth/login" className={cn(buttonVariants())}>
          Login
        </NavLink>
      )}
      <Authenticated>
        <Notifications />
        <HeaderMenu />
      </Authenticated>
    </div>
  );
}
