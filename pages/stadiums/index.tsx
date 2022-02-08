import AsidePanel from "../../components/AsidePanel/AsidePanel";
import Main from "../../Layout/Main";
import StadiumList from "../../components/Stadiums/PublicSale/StadiumList";
import BasicLayout from "../../Layout/BasicLayout";

const index = () => {
  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
      <Main>
        <StadiumList />
      </Main>
    </>
  );
};

export default index;
