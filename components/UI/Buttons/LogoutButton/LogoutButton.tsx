import { Icon } from "@iconify/react";
import { useMoralis } from "react-moralis";
import { StyledLogoutButton } from "./styles";

const LogoutButton = () => {
  const { logout } = useMoralis();

  const logoutFunction = () => {
    logout();
  };

  return (
    <StyledLogoutButton onClick={logoutFunction}>
      <Icon icon="fe:logout" color="white" />
    </StyledLogoutButton>
  );
};

export default LogoutButton;
