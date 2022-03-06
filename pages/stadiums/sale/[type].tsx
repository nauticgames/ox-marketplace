import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import AssetDetails from "../../../components/AssetDetails";
import Details from "../../../components/Marketplace/Stadiums/Sale/Details";
import SaleData from "../../../components/Marketplace/Stadiums/Sale/Data";
import AssetNotFound from "../../../components/AssetDetails/NotFound";
import LoadingAsset from "../../../components/AssetDetails/Loading";
import StadiumsSaleLayout from "../../../Layout/Stadiums/Sale";

const Type = () => {
  const { query } = useRouter();

  const [stadiumData, setStadiumData] = useState(null);

  useEffect(() => {
    if (!query.type) return;

    const data = SaleData.find((stadium) => stadium.name === query.type);

    setStadiumData(data);
  }, [query]);

  if (!query.type) {
    return (
      <>
        <StadiumsSaleLayout>
          <LoadingAsset />
        </StadiumsSaleLayout>
      </>
    );
  }

  if (!stadiumData) {
    return (
      <>
        <StadiumsSaleLayout>
          <AssetNotFound />
        </StadiumsSaleLayout>
      </>
    );
  }

  return (
    <>
      <StadiumsSaleLayout>
        <AssetDetails>
          {stadiumData && (
            <Details data={stadiumData} remaining={query?.remaining || null} />
          )}
        </AssetDetails>
      </StadiumsSaleLayout>
    </>
  );
};

export default withRouter(Type);
