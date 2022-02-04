import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { Moralis } from "moralis";
import { Loader } from "semantic-ui-react";
import Header from "../../components/UI/Header/Header";
import styled from "styled-components";
import StadiumDetails from "../../components/Stadiums/StadiumDetails";
import AssetDetails from "../../components/AssetDetails/AssetDetails";
import SEO from "../../components/SEO";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  .notfound__message {
    margin-top: 300px !important;
    color: rgb(180, 180, 180);
    font-weight: 600;
    font-size: 2em;
  }
`;

const Id = () => {
  const {
    query: { id },
  } = useRouter();

  const [stadiumDetails, setStadiumDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const stadiumContract = process.env.NEXT_PUBLIC_DEVELOPMENT_STADIUM_CONTRACT;

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);

  const getDetails = async () => {
    try {
      let details: any = await Moralis.Web3API.token.getTokenIdMetadata({
        chain: "0x4",
        address: stadiumContract,
        token_id: String(id),
      });

      if (!details.metadata) {
        throw new Error("Error: Token not found");
      }

      setStadiumDetails(details);

      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  if (!error && loading) {
    return (
      <>
        <style jsx global>{`
          body {
            background-color: #f5f5f5;
          }
        `}</style>

        <SEO />
        <Header />
        <LoadingToken />
      </>
    );
  }
  if (!loading && error) {
    return (
      <>
        <style jsx global>{`
          body {
            background-color: #f5f5f5;
          }
        `}</style>

        <SEO />
        <Header />
        <NotFoundMessage />
      </>
    );
  }
  if (!loading && !error) {
    return (
      <>
        <style jsx global>{`
          body {
            background-color: #f5f5f5;
          }
        `}</style>

        <SEO />
        <Header />
        {stadiumDetails && (
          <AssetDetails>
            <StadiumDetails
              stadium={stadiumDetails}
              price={stadiumDetails.price && stadiumDetails.price}
            />
          </AssetDetails>
        )}
      </>
    );
  }
};

export default withRouter(Id);

const LoadingToken = () => {
  return (
    <StyledContainer>
      <Loader size="big" inline active style={{ marginTop: 300 }} />
    </StyledContainer>
  );
};

const NotFoundMessage = () => {
  return (
    <StyledContainer>
      <h2 className="notfound__message">Error: Token not found</h2>
    </StyledContainer>
  );
};
