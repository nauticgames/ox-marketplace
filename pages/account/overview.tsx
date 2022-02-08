import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Grid } from "semantic-ui-react";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import Main from "../../Layout/Main";
import styled from "styled-components";
import AccountOverview from "../../components/Overview/AccountOverview";
import Rankings from "../../components/Overview/Rankings";
import CommunityTrophys from "../../components/Overview/CommunityTrophys";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../Layout/NavigationButtons";

const StyledContainer = styled.div`
  padding: 3%;
  width: 100%;
  height: 100%;
`;

const Overview = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized, isAuthenticated]);

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
