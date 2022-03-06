import { useContext } from "react";
import { Icon } from "@iconify/react";
import { StyledLoginButton } from "./styles";
import { Web3Context } from "../../../../context/Web3Context";

const LoginButton = () => {
  const { login }: any = useContext(Web3Context);

  return (
    <StyledLoginButton onClick={login}>
      Sign in <Icon icon="logos:metamask-icon" />
    </StyledLoginButton>
  );
};

export default LoginButton;
