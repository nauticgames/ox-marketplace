import AsidePanel from "../../../components/AsidePanel";
import Navigation from "../../../components/Navigation";
import useWindowSize from "../../../hooks/useWindowsSize";
import BasicLayout from "../../BasicLayout";

const StadiumsSaleLayout = ({ children }) => {
  const { isMobile } = useWindowSize();

  return (
    <>
      <BasicLayout />
      {isMobile && <AsidePanel type="marketplace" />}
      <Navigation mt={120} path="/stadiums" />
      {children}
    </>
  );
};

export default StadiumsSaleLayout;
