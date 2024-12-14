import { Button } from '~/components/ui/button';

export default function HeaderNav() {
  return (
    <nav className="flex items-center justify-center max-md:hidden">
      <Button variant="ghost">Home</Button>
      <Button variant="ghost">Topics</Button>
      <Button variant="ghost">Hunt</Button>
      <Button variant="ghost" disabled>
        Forum
      </Button>
    </nav>
  );
}
