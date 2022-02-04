import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useChain, useMoralis } from "react-moralis";
import { Web3Enabled } from "../../../../context/Web3EnabledContext";

const StyledLoginButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  min-width: 140px;
  height: 40px;
  background: #292929;
  box-shadow: 2px 2px 8px #98989826;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9em;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    &:hover {
      background: #575757;
      transition: background 0.2s ease;
    }
  }
`;

const LoginButton = () => {
  const { authenticate, chainId } = useMoralis();

  const { switchNetwork } = useChain();

  const web3isEnabled = useContext(Web3Enabled);

  const auth = async () => {
    if (web3isEnabled) {
      if (chainId !== "0x4") {
        switchNetwork("0x4").then(() => {
          authenticate({
            chainId: 56,
            signingMessage: "Authenticate",
          });
        });
      } else {
        authenticate({
          chainId: 56,
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
