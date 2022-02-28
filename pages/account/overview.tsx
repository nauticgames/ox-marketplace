import { Grid } from "semantic-ui-react";
import AsidePanel from "../../components/AsidePanel";
import Main from "../../Layout/Main";
import styled from "styled-components";
import AccountOverview from "../../components/Account/Overview";
import Rankings from "../../components/Account/Overview/Rankings/Rankings";
import CommunityTrophys from "../../components/Account/Overview/Trophys/CommunityTrophys";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../components/Navigation";
import useAuth from "../../hooks/useAuth";

const StyledContainer = styled.div`
  padding: 3%;
  width: 100%;
  height: 100%;
`;

const Overview = () => {
  useAuth();

  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />

      <Main>
        <NavigationButtons mt={40} path="/stadiums" />
        <StyledContainer>
          <Grid stackable>
            <Grid.Column mobile={16} computer={16} tablet={16}>
              <AccountOverview />
            </Grid.Column>
            <Grid.Column mobile={16} computer={8} tablet={8}>
              <Rankings />
            </Grid.Column>
            <Grid.Column mobile={16} computer={8} tablet={8}>
              <CommunityTrophys />
            </Grid.Column>
          </Grid>
        </StyledContainer>
      </Main>
    </>
  );
};

export default Overview;
