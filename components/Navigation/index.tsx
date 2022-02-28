import { INavigationProps } from "../../types/Components";
import StyledNavigation from "./styles";
import Back from "./Buttons/Back";
import Home from "./Buttons/Home";

const Navigation = ({ mt, path }: INavigationProps) => {
  return (
    <StyledNavigation mt={mt} path={path}>
      <Home />
      <Back path={path} />
    </StyledNavigation>
  );
};

export default Navigation;
