import { useState, type ReactNode } from 'react';
import { cn } from '~/lib/utils';
import LeftButtons from './left-buttons';
import HeaderSearch from './search';
import { UserSession } from '~/types/user';
import HeaderNav from './nav';
import { useLoaderData } from 'react-router';
import { Button, ButtonProps } from '~/components/ui/button';
import Container from '~/components/wrappers/container';

const HamburgerMenu = (props: ButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Button
      className="group sm:hidden"
      variant="outline"
      size="icon"
      onClick={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      {...props}
    >
      <svg
        className="pointer-events-none"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12L20 12"
          className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
        />
        <path
          d="M4 12H20"
          className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
        />
        <path
          d="M4 12H20"
          className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
        />
      </svg>
    </Button>
  );
};

const HeaderSection = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('flex items-center justify-center gap-3', className)}>{children}</div>;
};

export const Header = () => {
  const { userSession }: { userSession: UserSession } = useLoaderData();
  return (
    <header className="h-14 mx-auto border-b sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex items-center justify-between gap-3 h-full">
        <HeaderSection>
          <HamburgerMenu />
          <h2 className="text-2xl font-semibold max-sm:hidden">Devopage</h2>
          <HeaderNav />
        </HeaderSection>

        <HeaderSection className="max-sm:w-full">
          <HeaderSearch />
          <LeftButtons userSession={userSession} />
        </HeaderSection>
      </Container>
    </header>
  );
};
