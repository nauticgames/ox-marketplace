import StyledGridContainer from "./styles";
import Card from "../Card";
import SaleData from "../Data";
import { Grid, GridColumn } from "semantic-ui-react";
import useUsdPrice from "../../../../../hooks/useUsdPrice";
import RemainingProgress from "./RemainingProgress";
import { Icon } from "@iconify/react";

const List = () => {
  const { usdPrice } = useUsdPrice();

  return (
    <StyledGridContainer>
      <Grid>
        <Grid.Row>
          <GridColumn computer={15} mobile={12} tablet={16}>
            <RemainingProgress />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          {SaleData.map((stadium) => (
            <Grid.Column computer={5} mobile={12} tablet={8} key={stadium.type}>
              <Card
                stadium={stadium}
                usdPrice={usdPrice && (usdPrice * stadium.price).toFixed(2)}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row>
          <GridColumn computer={15} mobile={12} tablet={16}>
            <h2 className="listings__message">
              <Icon icon="ion:pricetags-sharp" color="#bcbcbc" />
              Listings available after public sale
            </h2>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </StyledGridContainer>
  );
};

export default List;
