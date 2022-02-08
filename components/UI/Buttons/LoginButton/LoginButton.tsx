import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { useChain, useMoralis } from "react-moralis";
import { Web3Enabled } from "../../../../context/Web3EnabledContext";
import { StyledLoginButton } from "./styles";
import useChains from "../../../../hooks/useChains";

const LoginButton = () => {
  const { authenticate, chainId } = useMoralis();

  const { switchNetwork } = useChain();
  const { chain, id } = useChains();

  const web3isEnabled = useContext(Web3Enabled);

  const auth = async () => {
    if (web3isEnabled && chain) {
      if (chainId !== chain) {
        switchNetwork(chain).then(() => {
          authenticate({
            chainId: id,
            signingMessage: "Authenticate",
          });
        });
      } else {
        authenticate({
          chainId: id,
          signingMessage: "Authenticate",
        });
      }
    }
  };

  return (
    <StyledLoginButton onClick={auth}>
      Sign in <Icon icon="logos:metamask-icon" />
    </StyledLoginButton>
  );
};

export default LoginButton;
