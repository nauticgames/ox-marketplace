import React, { useEffect } from "react";
import { useRouter, withRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import StadiumDetails from "../../components/Stadiums/StadiumDetails/StadiumDetails";
import AssetDetails from "../../components/AssetDetails/AssetDetails";
import { StyledContainer } from "../../components/Stadiums/StadiumDetails/styles";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../Layout/NavigationButtons";
import { useDispatch, useSelector } from "react-redux";
import { getStadiumsDetailsAction } from "../../redux/actions/stadiumsDetails";
import { useMoralis } from "react-moralis";
import { chainId } from "../../constants/chain";

const Id = () => {
  const {
    query: { id },
  } = useRouter();

  const dispatch = useDispatch();
  const { fetching, error, details } = useSelector(
    (state: any) => state.stadiumsDetails
  );

  const { account } = useMoralis();

  useEffect(() => {
    if (id && chainId) {
      getDetails();
    }
  }, [id, chainId]);

  const getDetails = () => {
    dispatch(getStadiumsDetailsAction(chainId, id));
  };

  if (fetching) {
    return (
      <>
        <BasicLayout />
        <LoadingToken />
      </>
    );
  }
  if (error) {
    return (
      <>
        <BasicLayout />
        <NotFoundMessage />
      </>
    );
  }
  if (details && !error) {
    return (
      <>
        <BasicLayout />
        <NavigationButtons
          mt={120}
          path={account ? "/account/inventory/stadiums" : "/stadiums"}
        />
        <AssetDetails>
          <StadiumDetails details={details} />
        </AssetDetails>
      </>
    );
  }
};

export default withRouter(Id);

const LoadingToken = () => {
  return (
    <StyledContainer>
      <Loader size="big" inline active style={{ marginTop: 300 }} />
    </StyledContainer>
  );
};

const NotFoundMessage = () => {
  return (
    <>
      <NavigationButtons mt={120} path={"/stadiums"} />
      <StyledContainer>
        <h2 className="notfound__message">Token not found</h2>
      </StyledContainer>
    </>
  );
};
