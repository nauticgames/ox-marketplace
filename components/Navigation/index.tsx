import { INavigationProps } from "../../types/Components";
import StyledNavigation from "./styles";
import Back from "./Buttons/Back";
import Home from "./Buttons/Home";

const Navigation = ({ mt }: INavigationProps) => {
  return (
    <StyledNavigation mt={mt}>
      <Home />
      <Back />
    </StyledNavigation>
  );
};

export default Navigation;
