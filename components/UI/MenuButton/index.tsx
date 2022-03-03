import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { HandleNavAction } from "../../../State/actions/nav";
import StyledMenuButton from "./styles";

const MenuButton = () => {
  const dispatch = useDispatch();

  const { showNav } = useSelector((state: any) => state.NAV);

  const handleShowMenu = () => {
    dispatch(HandleNavAction(!showNav));
  };

  return (
    <StyledMenuButton>
      <Icon
        icon={!showNav ? "charm:menu-hamburger" : "codicon:chrome-close"}
        color="#565656"
        onClick={handleShowMenu}
      />
    </StyledMenuButton>
  );
};

export default MenuButton;
