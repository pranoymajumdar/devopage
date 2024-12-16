import { Outlet } from 'react-router';
import RightSidebar from './components/right-sidebar';
import Container from '~/components/wrappers/container';
import { Button } from '~/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { LucideArrowLeft, LucideArrowLeftCircle, LucideArrowRight } from 'lucide-react';
import { cn } from '~/lib/utils';

export default function HomeLayout() {
  const filterMenuRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScrollPosition = () => {
    if (filterMenuRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = filterMenuRef.current;

      setCanScrollLeft(scrollLeft > 0); // Left scroll possible
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth); // Right scroll possible
    }
  };

  // Scroll Left Logic
  const scrollLeft = () => {
    if (filterMenuRef.current) {
      filterMenuRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
      setTimeout(checkScrollPosition, 100);
    }
  };

  // Scroll Right Logic
  const scrollRight = () => {
    if (filterMenuRef.current) {
      filterMenuRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
      setTimeout(checkScrollPosition, 100);
    }
  };

  useEffect(() => {
    const container = filterMenuRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <Container as="main" className="flex gap-5 py-5 max-w-screen-xl">
      <section className="relative flex flex-grow flex-col lg:max-w-[calc(100%-400px)] overflow-hidden gap-3">
        <div className="flex items-center">
          {canScrollLeft && (
            <Button variant="ghost" className="absolute left-0 rounded-full" size="icon" onClick={scrollLeft}>
              <LucideArrowLeft />
            </Button>
          )}
          <div
            ref={filterMenuRef}
            className={cn('flex items-center gap-3 overflow-x-scroll hide-scrollbar', {
              'ml-[3rem]': canScrollLeft,
              'mr-[3rem]': canScrollRight,
            })}
          >
            <Button>For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
            <Button variant="secondary">For You</Button>
          </div>
          {canScrollRight && (
            <Button variant="ghost" className="absolute right-0 rounded-full" size="icon" onClick={scrollRight}>
              <LucideArrowRight />
            </Button>
          )}
        </div>
        <Outlet />
      </section>
      <RightSidebar />
    </Container>
  );
}
