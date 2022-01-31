import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import Main from "../../components/Layout/Main";
import SEO from "../../components/SEO";
import Header from "../../components/UI/Header/Header";
import styled from "styled-components";
import AccountOverview from "../../components/Overview/AccountOverview";
import Rankings from "../../components/Overview/Rankings";
import CommunityTrophys from "../../components/Overview/CommunityTrophys";

const StyledContainer = styled.div`
  padding: 3%;
  width: 100%;
  height: 100%;
`;

const overview = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized]);

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>

      <SEO />
      <Header />
      <AsidePanel type="account" />

      <Main>
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

export default overview;
