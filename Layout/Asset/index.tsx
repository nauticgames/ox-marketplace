import AsidePanel from "../../components/AsidePanel";
import Navigation from "../../components/Navigation";
import useWindowSize from "../../hooks/useWindowsSize";
import BasicLayout from "../BasicLayout";

const AssetLayout = ({ children }) => {
  const { isMobile } = useWindowSize();

  return (
    <>
      <BasicLayout />
      <main>
        {isMobile && <AsidePanel type="marketplace" />}
        <Navigation mt={120} />
        {children}
      </main>
    </>
  );
};

export default AssetLayout;
