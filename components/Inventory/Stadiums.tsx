import { useEffect, useState } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { Moralis } from "moralis";
import { useMoralis, useTokenPrice } from "react-moralis";
import StadiumCard from "./StadiumCard";
import styled from "styled-components";
import axios from "axios";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 100%;
`;

const EmptyAssetsTitle = styled.h2`
  font-size: 1.8em;
  text-align: center;
  font-weight: 600;
  color: rgb(170, 170, 170);
`;

const Stadiums = () => {
  const { account } = useMoralis();

  const stadiumContract = process.env.NEXT_PUBLIC_DEVELOPMENT_STADIUM_CONTRACT;
  const [stadiums, setStadiums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchStadiums, setFetchStadiums] = useState(false);

  const { data: formattedData } = useTokenPrice({
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chain: "bsc",
  });

  useEffect(() => {
    const unsubscribe = () => {
      setLoading(true);
      setFetchStadiums(true);
    };

    if (account) {
      return unsubscribe();
    }
  }, [account]);

  useEffect(() => {
    const unsubscribe = () => {
      if (fetchStadiums) {
        getStadiums();
      }
    };

    return unsubscribe();
  }, [fetchStadiums]);

  const getStadiums = async () => {
    setFetchStadiums(false);

    try {
      const { result }: any = await Moralis.Web3API.account.getNFTs({
        chain: "0x4",
        address: account,
        token_addresses: [stadiumContract],
      });

      let filteredNullMetadata = result.filter(
        (asset) => asset.metadata !== null
      );

      filteredNullMetadata.sort(function (a, b) {
        return parseInt(a.token_id) - parseInt(b.token_id);
      });

      setStadiums(filteredNullMetadata);
      setLoading(false);
    } catch (error) {
      return null;
    }
  };

  if (loading) {
    return <LoadingAssets />;
  } else if (stadiums.length > 0) {
    return (
      <>
        <Grid style={{ marginTop: 40, minHeight: 300 }}>
          {stadiums.map((stadium, index) => (
            <Grid.Column
              computer={4}
              mobile={16}
              tablet={8}
              key={parseInt(stadium.tokenId) || index}
              stretched
            >
              <StadiumCard
                stadium={stadium}
                price={stadium.price && stadium.price}
                usdPrice={formattedData && formattedData.usdPrice}
              />
            </Grid.Column>
          ))}
        </Grid>
      </>
    );
  } else {
    return <EmptyAsset />;
  }
};

export default Stadiums;

const EmptyAsset = () => {
  return (
    <StyledContainer fluid>
      <EmptyAssetsTitle>
        You don't have any assets in this category
      </EmptyAssetsTitle>
    </StyledContainer>
  );
};

const LoadingAssets = () => {
  return (
    <StyledContainer fluid>
      <Loader active inline size="big" />
    </StyledContainer>
  );
};
