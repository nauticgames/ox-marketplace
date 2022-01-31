import React from "react";
import styled from "styled-components";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import Logo from "../Logo/Logo";
import { useMoralis } from "react-moralis";
import AccountButton from "../Buttons/AccountButton/AccountButton";
import ExchangeButton from "../Buttons/ExchangeButton/ExchangeButton";
import LunyBalances from "../LunyBalances/LunyBalances";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";

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
  const { isAuthenticated } = useMoralis();

  return (
    <StyledHeader>
      <Logo source="/assets/img/logo.png" />
      {isAuthenticated ? (
        <>
          <div style={{ display: "flex" }}>
            <LunyBalances />
            <ExchangeButton />
            <AccountButton />
            <LogoutButton />
          </div>
        </>
      ) : (
        <LoginButton />
      )}
    </StyledHeader>
  );
};

export default Header;
