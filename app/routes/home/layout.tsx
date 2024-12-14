import { Outlet } from 'react-router';
import RightSidebar from './components/right-sidebar';
import Container from '~/components/wrappers/container';

export default function HomeLayout() {
  return (
    <Container as="main" className="flex gap-5 py-3">
      <Outlet />
      <RightSidebar />
    </Container>
  );
}
