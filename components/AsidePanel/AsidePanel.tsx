import Marketplace from "./Menus/Marketplace/Marketplace";
import useWindowSize from "../../hooks/useWindowsSize";
import Account from "./Menus/Account/Account";
import { StyledAsidePanel } from "./styles";

interface AsidePanelProps {
  type: string;
}

const AsidePanel = ({ type }: AsidePanelProps) => {
  const { width } = useWindowSize();

  const isMobile = width < 768;

  if (isMobile) {
    return (
      <>
        <h1>Mobile mode</h1>
      </>
    );
  } else {
    switch (type) {
      case "marketplace":
        return (
          <StyledAsidePanel>
            <Marketplace />
          </StyledAsidePanel>
        );
      case "account":
        return (
          <StyledAsidePanel>
            <Account />
          </StyledAsidePanel>
        );
      default:
        return (
          <StyledAsidePanel>
            <Marketplace />
          </StyledAsidePanel>
        );
    }
  }
};

export default AsidePanel;
