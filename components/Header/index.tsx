import Logo from "../UI/Logo";
import StyledHeader from "./styles";
import Nav from "../Nav";
import useWindowSize from "../../hooks/useWindowsSize";
import MenuButton from "../UI/MenuButton";

const Header = () => {
  const { isMobile } = useWindowSize();

  return (
    <StyledHeader>
      <Logo />
      {isMobile && <MenuButton />}
      {!isMobile && <Nav />}
    </StyledHeader>
  );
};

export default Header;
