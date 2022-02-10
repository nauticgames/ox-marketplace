import Marketplace from "./Menus/Marketplace/Marketplace";
import useWindowSize from "../../hooks/useWindowsSize";
import Account from "./Menus/Account/Account";
import { StyledAsidePanel } from "./styles";
import Nav from "../UI/Nav/Nav";
import { useSelector } from "react-redux";

interface AsidePanelProps {
  type: string;
}

const AsidePanel = ({ type }: AsidePanelProps) => {
  const { width } = useWindowSize();

  //a

  const { showNav } = useSelector((state) => state.nav);

  const isMobile = width < 768;

  switch (type) {
    case "marketplace":
      return (
        <StyledAsidePanel isMobile={isMobile} showNav={showNav}>
          {isMobile && <Nav />}
          <Marketplace />
        </StyledAsidePanel>
      );
    case "account":
      return (
        <>
          <StyledAsidePanel isMobile={isMobile} showNav={showNav}>
            {isMobile && <Nav />}
            <Account />
          </StyledAsidePanel>
        </>
      );
    default:
      return (
        <StyledAsidePanel isMobile={isMobile} showNav={showNav}>
          {isMobile && <Nav />}
          <Marketplace />
        </StyledAsidePanel>
      );
  }
};

export default AsidePanel;
