import StadiumCard from "./StadiumCard";
import StadiumsPublicSaleData from "./PublicSaleData";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import useUsdPrice from "../../../hooks/useUsdPrice";

const GridContainer = styled.div`
  padding: 3%;
`;

const StadiumList = () => {
  const { usdPrice } = useUsdPrice();

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
