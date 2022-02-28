import { useContext } from "react";
import { Icon } from "@iconify/react";
import { StyledLoginButton } from "./styles";
import { Web3Context } from "../../../../context/Web3Context";

const LoginButton = () => {
  const { login }: any = useContext(Web3Context);

  const auth = async () => {
    await login();
  };

  return (
    <StyledLoginButton onClick={auth}>
      Sign in <Icon icon="logos:metamask-icon" />
    </StyledLoginButton>
  );
};

export default LoginButton;
