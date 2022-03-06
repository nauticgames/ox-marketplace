import { Icon } from "@iconify/react";
import { useContext } from "react";
import { Web3Context } from "../../../../context/Web3Context";
import { StyledLogoutButton } from "./styles";

const LogoutButton = () => {
  const { logout }: any = useContext(Web3Context);

  return (
    <StyledLogoutButton onClick={logout}>
      <Icon icon="fe:logout" color="white" />
    </StyledLogoutButton>
  );
};

export default LogoutButton;
