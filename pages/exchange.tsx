import AsidePanel from "../components/AsidePanel";
import ComingSoon from "../components/UI/ComingSoon";
import useWindowSize from "../hooks/useWindowsSize";
import BasicLayout from "../Layout/BasicLayout";
import NavigationButtons from "../components/Navigation";

const Exchange = () => {
  const { isMobile } = useWindowSize();

  return (
    <>
      <BasicLayout />
      {isMobile && <AsidePanel type="marketplace" />}
      <NavigationButtons mt={120} path="/stadiums" />
      <ComingSoon width={400} height={400} />
    </>
  );
};

export default Exchange;
