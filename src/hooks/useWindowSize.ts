import { useState, useEffect } from "react";

interface WindowSize {
  width?: number;
  height?: number;
}

/**
 * Source for this hook https://usehooks.com/useWindowSize/
 * Sets an event listener for window resize and returns window size as an object.
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
