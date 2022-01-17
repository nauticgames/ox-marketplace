import React from "react";
import styled from "styled-components";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import Logo from "../Logo/Logo";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 9000;
  top: 0;
  width: 100%;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo source="/assets/img/logo.png" />
      <LoginButton />
    </StyledHeader>
  );
};

export default Header;
