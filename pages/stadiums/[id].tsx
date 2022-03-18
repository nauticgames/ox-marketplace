import { useEffect } from "react";
import Details from "../../components/Marketplace/Stadiums/Details";
import AssetDetails from "../../components/AssetDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearStadiumDataStateAction,
  GetStadiumsDetailsAction,
} from "../../State/actions/stadiums/details";
import AssetNotFound from "../../components/AssetDetails/NotFound";
import LoadingAsset from "../../components/AssetDetails/Loading";
import AssetLayout from "../../Layout/Asset";

const Id = ({ id }) => {
  const dispatch = useDispatch();

  const { fetching, error, data } = useSelector(
    (state: any) => state.STADIUM_DETAILS
  );

  useEffect(() => {
    let mounted = true;

    const unsubscribe = () => {
      dispatch(ClearStadiumDataStateAction());
      dispatch(GetStadiumsDetailsAction(id));
    };

    if (mounted) unsubscribe();

    return () => {
      mounted = false;
    };
  }, []);

  if (fetching) {
    return (
      <AssetLayout>
        <LoadingAsset />
      </AssetLayout>
    );
  }

  if (error) {
    return (
      <AssetLayout>
        <AssetNotFound />
      </AssetLayout>
    );
  }

  return (
    <AssetLayout>
      <AssetDetails>
        <Details data={data} />
      </AssetDetails>
    </AssetLayout>
  );
};

export default Id;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  return {
    props: {
      id,
    },
  };
}
