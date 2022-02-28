import AsidePanel from "../components/AsidePanel";
import Main from "../Layout/Main";
import BasicLayout from "../Layout/BasicLayout";
import Info from "../components/Marketplace/Passes";

const Passes = () => {
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

export default Passes;
