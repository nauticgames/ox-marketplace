import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import AssetDetails from "../../../components/AssetDetails/AssetDetails";
import StadiumDetails from "../../../components/Stadiums/PublicSale/StadiumDetails";
import StadiumsPublicSaleData from "../../../components/Stadiums/PublicSale/PublicSaleData";
import BasicLayout from "../../../Layout/BasicLayout";
import NavigationButtons from "../../../Layout/NavigationButtons";
import AsidePanel from "../../../components/AsidePanel/AsidePanel";
import useWindowSize from "../../../hooks/useWindowsSize";

const Type = () => {
  const { query } = useRouter();

  const [stadiumDetails, setStadiumDetails] = useState(null);

  const { width } = useWindowSize();

  const isMobile = width < 768;

  useEffect(() => {
    if (query.type !== "undefined") {
      const details = StadiumsPublicSaleData.find(
        (stadium) => stadium.label === query.type
      );
      details && setStadiumDetails(details);
    }
  }, [query]);

  return (
    <>
      <BasicLayout />
      {isMobile && <AsidePanel type="marketplace" />}
      <NavigationButtons mt={120} path="/stadiums" />
      <AssetDetails>
        {stadiumDetails && <StadiumDetails stadiumDetails={stadiumDetails} />}
      </AssetDetails>
    </>
  );
};

export default withRouter(Type);
