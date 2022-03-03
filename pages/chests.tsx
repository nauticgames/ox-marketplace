import AsidePanel from "../components/AsidePanel";
import Main from "../Layout/Main";
import BasicLayout from "../Layout/BasicLayout";
import Info from "../components/Marketplace/Chests";

const Chests = () => {
  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
      <Main>
        <Info />
      </Main>
    </>
  );
};

export default Chests;
