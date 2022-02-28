import AsidePanel from "../../components/AsidePanel";
import Main from "../../Layout/Main";
import List from "../../components/Marketplace/Stadiums/Sale/List";
import BasicLayout from "../../Layout/BasicLayout";

const index = () => {
  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
      <Main>
        <List />
      </Main>
    </>
  );
};

export default index;
