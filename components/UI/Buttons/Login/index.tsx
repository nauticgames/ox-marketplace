import { useContext } from "react";
import { Icon } from "@iconify/react";
import { StyledLoginButton } from "./styles";
import { IWeb3Context, Web3Context } from "../../../../context/Web3Context";

const LoginButton = () => {
  const { login }: IWeb3Context = useContext(Web3Context);

  return (
    <>
      <StyledLoginButton onClick={login}>
        Sign in <Icon icon="logos:metamask-icon" />
      </StyledLoginButton>
    </>
  );
};

export default LoginButton;
