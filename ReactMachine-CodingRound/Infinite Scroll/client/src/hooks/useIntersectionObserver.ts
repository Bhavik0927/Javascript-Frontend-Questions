import { useRef, useEffect } from "react";

interface Props {
  onIntersect: () => void;
  enabled: boolean;
}

export const useIntersectionObserver = ({ onIntersect, enabled }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();

  }, [enabled, onIntersect]);

  return ref;
};
