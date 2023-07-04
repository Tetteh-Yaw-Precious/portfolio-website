import { useEffect, useState } from "react";

type MediaQueryListEvent = {
  matches: boolean;
};

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

export const useIsSmall = () => useMediaQuery('(min-width: 320px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');