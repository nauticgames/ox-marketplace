import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import AssetDetails from "../../../components/AssetDetails";
import Details from "../../../components/Marketplace/Stadiums/Sale/Details";
import SaleData from "../../../components/Marketplace/Stadiums/Sale/Data";
import BasicLayout from "../../../Layout/BasicLayout";
import NavigationButtons from "../../../components/Navigation";
import AsidePanel from "../../../components/AsidePanel";
import useWindowSize from "../../../hooks/useWindowsSize";
import AssetNotFound from "../../../components/AssetDetails/NotFound";
import LoadingAsset from "../../../components/AssetDetails/Loading";

const Type = () => {
  const { query } = useRouter();

  const [stadiumData, setStadiumData] = useState(null);
  const [error, setError] = useState(false);

  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (!query.type) return;

    const data = SaleData.find((stadium) => stadium.name === query.type);

    data ? setStadiumData(data) : setError(true);
  }, [query]);

  if (!query.type) {
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
      <NavigationButtons mt={120} path="/stadiums" />
      <AssetDetails>
        {stadiumData && <Details data={stadiumData} />}
      </AssetDetails>
    </>
  );
};

export default withRouter(Type);
