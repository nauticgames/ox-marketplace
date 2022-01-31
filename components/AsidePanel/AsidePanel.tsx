import styled from "styled-components";
import Marketplace from "./Menus/Marketplace/Marketplace";
import useWindowSize from "../../hooks/useWindowsSize";
import Account from "./Menus/Account/Account";

const StyledAsidePanel = styled.aside`
  position: fixed;
  min-width: 240px;
  width: 240px;
  background-color: #fff;
  height: 100vh;
  padding: 100px 0 20px 0;
  transition: min-width 0.2s ease, width 0.2s ease;
`;

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
