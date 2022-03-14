import { Icon } from "@iconify/react";
import { useContext } from "react";
import { IWeb3Context, Web3Context } from "../../../../context/Web3Context";
import { StyledLogoutButton } from "./styles";

const LogoutButton = () => {
  const { signOut }: IWeb3Context = useContext(Web3Context);

  return (
    <StyledLogoutButton onClick={signOut}>
      <Icon icon="fe:logout" color="white" />
    </StyledLogoutButton>
  );
};

export default LogoutButton;
