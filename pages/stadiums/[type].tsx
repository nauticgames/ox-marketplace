import { useRouter } from "next/router";
import AssetDetails from "../../components/AssetDetails/AssetDetails";
import SEO from "../../components/SEO";
import StadiumDetails from "../../components/Stadiums/StadiumDetails";
import Header from "../../components/UI/Header/Header";

const type = () => {
  const { query } = useRouter();

  console.log(query);
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
        <StadiumDetails name="Chaos Stadium" nameBackground="#C96825" />
      </AssetDetails>
    </>
  );
};

export default type;
