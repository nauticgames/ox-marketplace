import React, { useContext } from "react";
import { Moralis } from "moralis";
import { Icon } from "@iconify/react";
import { useChain, useMoralis } from "react-moralis";
import { Web3Enabled as Web3Context } from "../../../../context/Web3EnabledContext";
import { StyledLoginButton } from "./styles";
import { id, chainId as chain } from "../../../../constants/chain";

const LoginButton = () => {
  const { authenticate } = useMoralis();
  const { switchNetwork } = useChain();
  const currentChain = Moralis.chainId;

  const Web3Enabled = useContext(Web3Context);

  const auth = async () => {
    try {
      if (Web3Enabled) {
        currentChain === chain
          ? authenticate({
              chainId: id,
              signingMessage: "Authenticate",
            })
          : switchNetwork(chain).then(() => {
              authenticate({
                chainId: id,
                signingMessage: "Authenticate",
              });
            });
      }
    } catch (error) {
      return;
    }
  };

  return (
    <StyledLoginButton onClick={auth}>
      Sign in <Icon icon="logos:metamask-icon" />
    </StyledLoginButton>
  );
};

export default LoginButton;
