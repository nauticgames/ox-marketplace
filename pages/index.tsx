import AsidePanel from "../components/AsidePanel";
import BasicLayout from "../Layout/BasicLayout";

const index = () => {
  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
    </>
  );
};

export default index;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/stadiums",
      permanent: true,
    },
  };
}
