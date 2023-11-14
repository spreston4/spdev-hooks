import { useEffect, useState, RefObject } from "react";

export interface UseOnScreenArgs {
  ref: RefObject<HTMLElement>;
  rootMargin?: string;
}

const useOnScreen = ({ ref, rootMargin = "0px" }: UseOnScreenArgs): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);
  return isVisible;
};

export default useOnScreen;
