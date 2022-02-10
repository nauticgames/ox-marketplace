import AsidePanel from "../components/AsidePanel/AsidePanel";
import ComingSoon from "../components/UI/ComingSoon/ComingSoon";
import useWindowSize from "../hooks/useWindowsSize";
import BasicLayout from "../Layout/BasicLayout";
import Main from "../Layout/Main";
import NavigationButtons from "../Layout/NavigationButtons";

const Exchange = () => {
  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
      <Main>
        <NavigationButtons mt={40} path="/stadiums" />
        <ComingSoon width={400} height={400} />
      </Main>
    </>
  );
};

export default Exchange;
