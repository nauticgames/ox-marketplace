import StadiumCard from "./StadiumCard";
import StadiumsPublicSaleData from "./StadiumsPublicSaleData";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTokenPrice } from "react-moralis";
import { Grid } from "semantic-ui-react";

const GridContainer = styled.div`
  padding: 3%;
`;

const StadiumList = () => {
  const [usdPrice, setUsdPrice] = useState(null);
  const { data: formattedData } = useTokenPrice({
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chain: "bsc",
  });

  useEffect(() => {
    const unsubscribe = () => {
      setFormattedUsdPrice(formattedData.usdPrice);
    };

    if (formattedData) {
      return unsubscribe();
    }
  }, [formattedData]);

  const setFormattedUsdPrice = (price) => {
    setUsdPrice(price);
  };

  return (
    <GridContainer>
      <Grid>
        {StadiumsPublicSaleData.map((stadium) => (
          <Grid.Column key={stadium.name} computer={5} mobile={16} tablet={8}>
            <StadiumCard
              stadium={stadium}
              usdPrice={usdPrice ? (usdPrice * stadium.price).toFixed(2) : null}
            />
          </Grid.Column>
        ))}
      </Grid>
    </GridContainer>
  );
};

export default StadiumList;
