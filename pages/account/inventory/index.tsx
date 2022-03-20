import AsidePanel from "../../../components/AsidePanel";
import BasicLayout from "../../../Layout/BasicLayout";
import Main from "../../../Layout/Main";
import NavigationButtons from "../../../components/Navigation";
import ContainerLayout from "../../../Layout/Container";
import Inventory from "../../../components/Account/Inventory";

const Index = () => {
  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />
      <Main>
        <NavigationButtons mt={40} path="/stadiums" />
        <ContainerLayout>
          <Inventory />
        </ContainerLayout>
      </Main>
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/account/inventory/stadiums",
      permanent: true,
    },
  };
}
