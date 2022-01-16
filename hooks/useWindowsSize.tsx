import { useEffect, useState } from "react";

const useWindowSize = () => {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" && window.innerWidth,
    height: typeof window !== "undefined" && window.innerHeight,
  });

  const changeWindowSize = () => {
    isSSR &&
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    isSSR && window.addEventListener("resize", changeWindowSize);

    return () => {
      isSSR && window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
