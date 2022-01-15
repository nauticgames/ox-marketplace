import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const StyledLoginButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  min-width: 130px;
  height: 40px;
  background: #e9e9e9;
  box-shadow: 2px 2px 8px rgba(152, 152, 152, 0.15);
  border-radius: 10px;
  color: #535353;
  font-weight: 500;
  font-size: 0.8em;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const LoginButton = () => {
  return (
    <StyledLoginButton>
      Sign in <Icon icon="logos:metamask-icon" />
    </StyledLoginButton>
  );
};

export default LoginButton;
