import Marketplace from "./Menus/Marketplace/Marketplace";
import useWindowSize from "../../hooks/useWindowsSize";
import Account from "./Menus/Account/Account";
import { StyledAsidePanel } from "./styles";
import Nav from "../UI/Nav/Nav";
import { useSelector } from "react-redux";

interface AsidePanelProps {
  type: "marketplace" | "account";
}

const AsidePanel = ({ type }: AsidePanelProps) => {
  const { width } = useWindowSize();

  const { showNav } = useSelector((state: any) => state.nav);

  const isMobile = width < 768;

  switch (type) {
    case "marketplace":
      return (
        <AsidePanelLayout showNav={showNav} isMobile={isMobile}>
          <Marketplace />
        </AsidePanelLayout>
      );
    case "account":
      return (
        <AsidePanelLayout showNav={showNav} isMobile={isMobile}>
          <Account />
        </AsidePanelLayout>
      );

    default:
      <AsidePanelLayout showNav={showNav} isMobile={isMobile}>
        <Marketplace />
      </AsidePanelLayout>;
  }
};

export default AsidePanel;

const AsidePanelLayout = ({ showNav, isMobile, children }) => {
  return (
    <StyledAsidePanel showNav={showNav}>
      {isMobile && <Nav />}
      {children}
    </StyledAsidePanel>
  );
};
