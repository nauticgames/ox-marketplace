import { useMoralis } from "react-moralis";
import { Grid } from "semantic-ui-react";
import AccountButton from "../Buttons/AccountButton/AccountButton";
import ExchangeButton from "../Buttons/ExchangeButton/ExchangeButton";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import LunyBalances from "../LunyBalances/LunyBalances";
import { StyledNav, StyledContainer } from "./style";

const Nav = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <StyledNav>
      {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
    </StyledNav>
  );
};

export default Nav;

const Authenticated = () => {
  return (
    <StyledContainer>
      <Grid.Column className="column-1">
        <LunyBalances />
        <ExchangeButton />
      </Grid.Column>
      <Grid.Column className="column-2">
        <AccountButton />
        <LogoutButton />
      </Grid.Column>
    </StyledContainer>
  );
};

const Unauthenticated = () => {
  return (
    <StyledContainer>
      <LoginButton />
    </StyledContainer>
  );
};
