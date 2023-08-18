import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
  cb?: () => void;
  // wrapperRef: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  cb,
  // wrapperRef,
  triggerRef,
}: UseInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // const wrapperElement = wrapperRef?.current;
    const triggerElement = triggerRef?.current;

    if (cb && triggerElement) {
      const options = {
        // root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          console.log('intersect useInfiniteScroll');
          cb();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [cb, triggerRef]);
};
