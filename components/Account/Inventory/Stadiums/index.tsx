import { useContext, useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import StadiumCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import GetStadiumsAction from "../../../../State/actions/stadiums/inventory";
import useUsdPrice from "../../../../hooks/useUsdPrice";
import { CorrectHexChain } from "../../../../constants/chain";
import { Web3Context } from "../../../../context/Web3Context";
import EmptyAssets from "../Empty";
import LoadingAssets from "../Loading";
import { useRouter } from "next/router";
import { GetStadiumsBalance } from "../../../../services/TokenBalance";
import WithPaginationLayout from "../../../../Layout/WithPaginationLayout";

const Stadiums = () => {
  const { query, push, pathname } = useRouter();
  const dispatch = useDispatch();
  const { stadiums, error, fetching } = useSelector(
    (state: any) => state.STADIUM_INVENTORY
  );

  const { user }: any = useContext(Web3Context);

  const { usdPrice } = useUsdPrice();

  const [totalPages, setTotalPages] = useState(1);

  useEffect((): any => {
    if (!user) return;

    const unsubscribe = async () => {
      const balance = await GetStadiumsBalance(user);

      setTotalPages(Math.ceil(balance / 12));
    };

    return unsubscribe();
  }, [user]);

  useEffect((): any => {
    if (!user || !CorrectHexChain) return;

    const page = typeof query.page !== "undefined" ? Number(query.page) : 1;

    const unsubscribe = async () => {
      dispatch(
        GetStadiumsAction({
          account: user,
          chain: CorrectHexChain,
          order: "asc",
          page,
        })
      );
    };

    return unsubscribe();
  }, [user, CorrectHexChain, query]);

  const onChange = (activePage) => {
    push({ pathname, query: { page: activePage } });
  };

  if (fetching) {
    return <LoadingAssets />;
  }

  if (error) {
    return <EmptyAssets title="An error has ocurred" />;
  }

  if (stadiums?.length === 0) {
    return (
      <>
        <WithPaginationLayout
          query={query}
          onChange={onChange}
          totalPages={totalPages}
        >
          <EmptyAssets title="You don't have any assets in this category" />
        </WithPaginationLayout>
      </>
    );
  }

  return (
    <>
      <WithPaginationLayout
        query={query}
        onChange={onChange}
        totalPages={totalPages}
      >
        <Grid style={{ marginTop: 40, minHeight: 400 }}>
          {stadiums?.map((stadium, index) => (
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
      </WithPaginationLayout>
    </>
  );
};

export default Stadiums;
