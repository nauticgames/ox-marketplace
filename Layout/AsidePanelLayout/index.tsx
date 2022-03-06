import Nav from "../../components/Nav";
import useWindowSize from "../../hooks/useWindowsSize";
import { IAsidePanelLayoutProps } from "../../types/Layout";
import StyledAsidePanel from "./styles";

const AsidePanelLayout = ({ showNav, children }: IAsidePanelLayoutProps) => {
  const { isMobile } = useWindowSize();

  return (
    <StyledAsidePanel showNav={showNav}>
      {children}
      {isMobile !== null && isMobile && <Nav />}
    </StyledAsidePanel>
  );
};

export default AsidePanelLayout;
