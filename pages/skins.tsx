import AsidePanel from "../components/AsidePanel/AsidePanel";
import Main from "../Layout/Main";
import ComingSoon from "../components/UI/ComingSoon/ComingSoon";
import BasicLayout from "../Layout/BasicLayout";

const Skins = () => {
  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
      <Main>
        <ComingSoon width={400} height={400} />
      </Main>
    </>
  );
};

export default Skins;
