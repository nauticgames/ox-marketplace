import { Icon } from "@iconify/react";
import { useContext } from "react";
import { Web3Context } from "../../../../context/Web3Context";
import { StyledLogoutButton } from "./styles";

const LogoutButton = () => {
  const { logout }: any = useContext(Web3Context);

  const signOut = async () => {
    await logout();
  };

  return (
    <StyledLogoutButton onClick={signOut}>
      <Icon icon="fe:logout" color="white" />
    </StyledLogoutButton>
  );
};

export default LogoutButton;
