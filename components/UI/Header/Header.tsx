import Logo from "../Logo/Logo";
import { StyledHeader } from "./styles";
import Nav from "../Nav/Nav";
import useWindowSize from "../../../hooks/useWindowsSize";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { handleNavAction } from "../../../redux/actions/nav";
import styled from "styled-components";

const Header = () => {
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <StyledHeader>
      <Logo source="/assets/img/logo.png" />
      {isMobile && <BtnMenu />}

      {!isMobile && <Nav />}
    </StyledHeader>
  );
};

export default Header;

const StyledBtnMenu = styled.div`
  svg {
    width: 32px;
    height: 32px;
  }
`;

const BtnMenu = () => {
  const dispatch = useDispatch();

  const { showNav } = useSelector((state: any) => state.nav);

  const handleShowMenu = () => {
    dispatch(handleNavAction(!showNav));
  };

  return (
    <StyledBtnMenu>
      <Icon
        icon={!showNav ? "charm:menu-hamburger" : "codicon:chrome-close"}
        color="#565656"
        onClick={handleShowMenu}
      />
    </StyledBtnMenu>
  );
};
