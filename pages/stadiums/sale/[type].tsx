import AssetDetails from "../../../components/AssetDetails";
import Details from "../../../components/Marketplace/Stadiums/Sale/Details";
import SaleData from "../../../components/Marketplace/Stadiums/Sale/Data";
import AssetNotFound from "../../../components/AssetDetails/NotFound";
import AssetLayout from "../../../Layout/Asset";

const Type = ({ data }) => {
  if (!data) {
    return (
      <>
        <AssetLayout>
          <AssetNotFound />
        </AssetLayout>
      </>
    );
  }

  return (
    <>
      <AssetLayout>
        <AssetDetails>
          <Details data={data} />
        </AssetDetails>
      </AssetLayout>
    </>
  );
};

export default Type;

export async function getServerSideProps(ctx) {
  const { type } = ctx.query;

  const data = SaleData.find((stadium) => stadium.name === type);

  return {
    props: {
      data: data || null,
    },
  };
}
