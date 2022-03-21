import AsidePanel from "../../../components/AsidePanel";
import Inventory from "../../../components/Account/Inventory";
import Main from "../../../Layout/Main";
import BasicLayout from "../../../Layout/BasicLayout";
import NavigationButtons from "../../../components/Navigation";
import useAuth from "../../../hooks/useAuth";
import ContainerLayout from "../../../Layout/Container";

const Stadiums = () => {
  useAuth();

  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />
      <Main>
        <NavigationButtons mt={40} />
        <ContainerLayout>
          <Inventory />
        </ContainerLayout>
      </Main>
    </>
  );
};

export default Stadiums;

export async function getServerSideProps(ctx) {
  const { page } = ctx.query;

  if (typeof page === "undefined") {
    return {
      redirect: {
        destination: "/account/inventory/stadiums/?page=1",
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}
