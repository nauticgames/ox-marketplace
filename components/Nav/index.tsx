import { useMoralis } from "react-moralis";
import { Grid } from "semantic-ui-react";
import AccountButton from "../UI/Buttons/Account";
import ExchangeButton from "../UI/Buttons/Exchange";
import LoginButton from "../UI/Buttons/Login";
import LogoutButton from "../UI/Buttons/Logout";
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
      <Grid.Column>
        <ExchangeButton />
      </Grid.Column>
      <Grid.Column>
        <AccountButton />
        <LogoutButton />
      </Grid.Column>
    </StyledContainer>
  );
};

const Unauthenticated = () => {
  return (
    <StyledContainer>
      <Grid.Column>
        <LoginButton />
      </Grid.Column>
    </StyledContainer>
  );
};
