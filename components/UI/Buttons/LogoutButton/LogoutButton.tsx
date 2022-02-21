import { Icon } from "@iconify/react";
import { useMoralis } from "react-moralis";
import { StyledLogoutButton } from "./styles";

const LogoutButton = () => {
  const { logout } = useMoralis();

  return (
    <StyledLogoutButton onClick={logout}>
      <Icon icon="fe:logout" color="white" />
    </StyledLogoutButton>
  );
};

export default LogoutButton;
