import { useContext, useEffect } from "react";
import { useRouter, withRouter } from "next/router";
import Details from "../../components/Marketplace/Stadiums/Details";
import AssetDetails from "../../components/AssetDetails";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearStadiumDataStateAction,
  GetStadiumsDetailsAction,
} from "../../State/actions/stadiums/details";
import { CorrectHexChain } from "../../constants/chain";
import AsidePanel from "../../components/AsidePanel";
import useWindowSize from "../../hooks/useWindowsSize";
import AssetNotFound from "../../components/AssetDetails/NotFound";
import LoadingAsset from "../../components/AssetDetails/Loading";
import { Web3Context } from "../../context/Web3Context";

const Id = () => {
  const {
    query: { id },
  } = useRouter();

  const dispatch = useDispatch();

  const { fetching, error, data } = useSelector(
    (state: any) => state.STADIUM_DETAILS
  );

  const { isMobile } = useWindowSize();

  const { user }: any = useContext(Web3Context);

  useEffect(() => {
    const unsubscribe = () => {
      dispatch(ClearStadiumDataStateAction());
    };

    return unsubscribe();
  }, []);

  useEffect(() => {
    if (!id || !CorrectHexChain) return;

    const unsubscribe = () => {
      dispatch(GetStadiumsDetailsAction(CorrectHexChain, id));
    };

    return unsubscribe();
  }, [id, CorrectHexChain]);

  if (fetching) {
    return (
      <>
        <BasicLayout />
        {isMobile && <AsidePanel type="marketplace" />}
        <NavigationButtons mt={120} path="/stadiums" />
        <LoadingAsset />
      </>
    );
  }

  if (error) {
    return (
      <>
        <BasicLayout />
        {isMobile && <AsidePanel type="marketplace" />}
        <NavigationButtons mt={120} path="/stadiums" />
        <AssetNotFound />
      </>
    );
  }

  return (
    <>
      <BasicLayout />
      {isMobile && <AsidePanel type="marketplace" />}
      <NavigationButtons
        mt={120}
        path={user ? "/account/inventory/stadiums" : "/stadiums"}
      />
      <AssetDetails>
        <Details data={data} />
      </AssetDetails>
    </>
  );
};

export default withRouter(Id);
