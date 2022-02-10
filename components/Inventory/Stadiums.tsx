import { useEffect } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { useMoralis } from "react-moralis";
import StadiumCard from "./StadiumCard";
import { StyledContainer, EmptyAssetsTitle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import getStadiumsAction from "../../redux/actions/stadiums";
import useUsdPrice from "../../hooks/useUsdPrice";
import { chainId } from "../../constants/chain";

const Stadiums = () => {
  const { account } = useMoralis();
  const dispatch = useDispatch();
  const { stadiums, error, fetching } = useSelector(
    (state: any) => state.stadiums
  );

  const { usdPrice } = useUsdPrice();

  useEffect(() => {
    const unsubscribe = () => {
      dispatch(getStadiumsAction(account, chainId, "asc"));
    };

    if (account && chainId) {
      return unsubscribe();
    }
  }, [account, chainId]);

  if (fetching) {
    return <LoadingAssets />;
  }
  if (error) {
    return <EmptyAssets title="An error has ocurred" />;
  }
  if (stadiums && !stadiums.length) {
    return <EmptyAssets title="You don't have any assets in this category" />;
  }
  if (stadiums && stadiums.length > 0) {
    return (
      <>
        <Grid style={{ marginTop: 40, minHeight: 300 }} centered>
          {stadiums.map((stadium, index) => (
            <Grid.Column
              computer={4}
              mobile={12}
              tablet={8}
              key={parseInt(stadium.tokenId) || index}
              stretched
            >
              <StadiumCard stadium={stadium} usdPrice={usdPrice} price={null} />
            </Grid.Column>
          ))}
        </Grid>
      </>
    );
  }
};

export default Stadiums;

const EmptyAssets = ({ title }) => {
  return (
    <StyledContainer fluid>
      <EmptyAssetsTitle>{title}</EmptyAssetsTitle>
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
