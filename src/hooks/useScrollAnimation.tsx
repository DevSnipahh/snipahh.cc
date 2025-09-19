import { useEffect, useRef } from 'react';

export function useScrollAnimation(animationClass = 'fade-in') {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Add the animation class initially
    element.classList.add(animationClass);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animationClass]);

  return ref;
}