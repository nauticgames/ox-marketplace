import AsidePanel from "../components/AsidePanel/AsidePanel";
import ComingSoon from "../components/UI/ComingSoon/ComingSoon";
import useWindowSize from "../hooks/useWindowsSize";
import BasicLayout from "../Layout/BasicLayout";
import NavigationButtons from "../Layout/NavigationButtons";

const Exchange = () => {
  const { width } = useWindowSize();

  const isMobile = width < 768;

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
