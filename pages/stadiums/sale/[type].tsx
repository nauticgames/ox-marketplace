import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import AssetDetails from "../../../components/AssetDetails/AssetDetails";
import SEO from "../../../components/SEO";
import StadiumsPublicSaleDetails from "../../../components/Stadiums/StadiumPublicSaleDetails";
import StadiumsPublicSaleData from "../../../components/Stadiums/StadiumsPublicSaleData";
import Header from "../../../components/UI/Header/Header";

const Type = () => {
  const { query } = useRouter();

  const [stadiumDetails, setStadiumDetails] = useState(null);

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
      <style jsx global>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>

      <SEO />
      <Header />
      <AssetDetails>
        {stadiumDetails && (
          <StadiumsPublicSaleDetails stadiumDetails={stadiumDetails} />
        )}
      </AssetDetails>
    </>
  );
};

export default withRouter(Type);
