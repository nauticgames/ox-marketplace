import StadiumCard from "./StadiumCard";
import PublicSaleData from "./PublicSaleData";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import useUsdPrice from "../../../hooks/useUsdPrice";
import useWindowSize from "../../../hooks/useWindowsSize";

const GridContainer = styled.div`
  padding: 3%;
  margin: 40px auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const StadiumList = () => {
  const { usdPrice } = useUsdPrice();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <GridContainer>
      <Grid centered={isMobile}>
        {PublicSaleData.map((stadium) => (
          <Grid.Column key={stadium.name} computer={5} mobile={14} tablet={8}>
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
