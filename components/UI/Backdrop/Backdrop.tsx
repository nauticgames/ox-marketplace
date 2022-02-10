import { useEffect } from "react";
import { useSelector } from "react-redux";
import useWindowSize from "../../../hooks/useWindowsSize";

const Backdrop = () => {
  const { showNav } = useSelector((state) => state.nav);
  const { width } = useWindowSize();

  const isMobile = width < 768;

  useEffect(() => {
    const unsubscribe = () => {
      if (isMobile && showNav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "initial";
      }
    };

    return unsubscribe();
  }, [showNav]);

  return (
    <div
      className={`backdrop ${showNav && isMobile && "backdrop-active"}`}
    ></div>
  );
};

export default Backdrop;
