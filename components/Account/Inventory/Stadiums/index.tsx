import { useContext, useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import StadiumCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import GetStadiumsAction from "../../../../State/actions/stadiums/inventory";
import { IWeb3Context, Web3Context } from "../../../../context/Web3Context";
import EmptyAssets from "../Empty";
import LoadingAssets from "../Loading";
import { useRouter } from "next/router";
import { getStadiumsBalance } from "../../../../services/tokenBalance";
import WithPaginationLayout from "../../../../Layout/WithPaginationLayout";

const Stadiums = () => {
  const { query, push, pathname } = useRouter();

  const dispatch = useDispatch();

  const { stadiums, error, fetching } = useSelector(
    (state: any) => state.STADIUM_INVENTORY
  );

  const { user }: IWeb3Context = useContext(Web3Context);

  const [totalPages, setTotalPages] = useState(1);
  const [limitPerPage] = useState(8);

  useEffect((): any => {
    let mounted = true;

    const unsubscribe = async () => {
      if (!user || fetching || typeof query.page === "undefined") return;

      try {
        const balance = await getStadiumsBalance(user);

        setTotalPages(Math.ceil(balance / limitPerPage));

        dispatch(
          GetStadiumsAction({
            account: user,
            order: "asc",
            page: Number(query.page) < 1 ? 1 : Number(query.page),
            balance,
            limitPerPage,
          })
        );
      } catch {
        return;
      }
    };

    if (mounted) unsubscribe();

    return () => {
      mounted = false;
    };
  }, [user, query.page]);

  const handleChangePage = (activePage: number) => {
    push({ pathname, query: { ...query, page: activePage } });
  };

  if (fetching) {
    return <LoadingAssets />;
  }

  if (error) {
    return <EmptyAssets title="An error has ocurred" />;
  }

  if (stadiums?.length === 0) {
    return <EmptyAssets title="You don't have any assets in this category" />;
  }

  return (
    <WithPaginationLayout
      page={typeof query.page === "undefined" ? 1 : query.page}
      onChange={handleChangePage}
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
            <StadiumCard stadium={stadium} />
          </Grid.Column>
        ))}
      </Grid>
    </WithPaginationLayout>
  );
};

export default Stadiums;
