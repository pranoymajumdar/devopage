import {
  LucideBell,
  LucideBookmark,
  LucideHash,
  LucideHistory,
  LucideHome,
  LucideMessageCircleMore,
  LucideMoreHorizontal,
  type LucideIcon,
} from 'lucide-react';
import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

type BottomBarLinks = {
  href: string;
  icon: LucideIcon;
};
const BarButton = ({ pathName, href, icon: Icon }: { pathName: string; href: string; icon: LucideIcon }) => {
  return (
    <NavLink
      to={href}
      className={cn(
        buttonVariants({
          variant: pathName === href ? 'secondary' : 'ghost',
          size: 'icon',
          className: pathName === href ? 'text-foreground' : 'text-muted-foreground',
        })
      )}
    >
      <Icon />
    </NavLink>
  );
};

export default function BottomBar() {
  const location = useLocation();
  const links = useMemo<BottomBarLinks[]>(
    () => [
      { href: '/', icon: LucideHome },
      { href: '/topics', icon: LucideHash },
      { href: '/forum', icon: LucideMessageCircleMore },
      { href: '/bookmarks', icon: LucideBookmark },
      { href: '/more', icon: LucideMoreHorizontal },
    ],
    [location.pathname]
  );

  return (
    <section className="md:hidden fixed bottom-0 h-14 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-t w-full">
      <nav className="flex items-center justify-between h-full px-4">
        {links &&
          links.map(({ icon, href }) => {
            return <BarButton key={href} pathName={location.pathname} href={href} icon={icon} />;
          })}
      </nav>
    </section>
  );
}
