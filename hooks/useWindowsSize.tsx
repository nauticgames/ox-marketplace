import { useEffect, useState } from "react";

const useWindowSize = () => {
  const isSSR = typeof window === "undefined";

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" && window.innerWidth,
    height: typeof window !== "undefined" && window.innerHeight,
  });

  const [isMobile, setIsMobile] = useState(null);

  const changeWindowSize = () => {
    if (isSSR) return;

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    setIsMobile(windowSize?.width < 768);
  }, [windowSize]);

  useEffect(() => {
    if (isSSR) return;

    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, [isSSR]);

  return { windowSize, isMobile };
};

export default useWindowSize;
