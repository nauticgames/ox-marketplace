import React from "react";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import Logo from "../Logo/Logo";
import { useMoralis } from "react-moralis";
import AccountButton from "../Buttons/AccountButton/AccountButton";
import ExchangeButton from "../Buttons/ExchangeButton/ExchangeButton";
import LunyBalances from "../LunyBalances/LunyBalances";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import { StyledHeader } from "./styles";

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
