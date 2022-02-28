import { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import StadiumCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import GetStadiumsAction from "../../../../State/actions/stadiums/inventory";
import useUsdPrice from "../../../../hooks/useUsdPrice";
import { CorrectHexChain } from "../../../../constants/chain";
import { Web3Context } from "../../../../context/Web3Context";
import EmptyAssets from "../Empty";
import LoadingAssets from "../Loading";

const Stadiums = () => {
  const dispatch = useDispatch();
  const { stadiums, error, fetching } = useSelector(
    (state: any) => state.STADIUM_INVENTORY
  );

  const { user }: any = useContext(Web3Context);

  const { usdPrice } = useUsdPrice();

  useEffect(() => {
    if (!user || !CorrectHexChain) return;

    const unsubscribe = () => {
      dispatch(GetStadiumsAction(user, CorrectHexChain, "asc"));
    };

    return unsubscribe();
  }, [user, CorrectHexChain]);

  if (fetching) {
    return <LoadingAssets />;
  }

  if (error) {
    return <EmptyAssets title="An error has ocurred" />;
  }

  if (stadiums && stadiums.length === 0) {
    return <EmptyAssets title="You don't have any assets in this category" />;
  }

  return (
    <>
      <Grid style={{ marginTop: 40, minHeight: 400 }}>
        {stadiums.map((stadium, index) => (
          <Grid.Column
            computer={4}
            mobile={8}
            tablet={8}
            key={parseInt(stadium.tokenId) || index}
          >
            <StadiumCard stadium={stadium} usdPrice={usdPrice} price={null} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default Stadiums;
