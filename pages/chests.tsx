import AsidePanel from "../components/AsidePanel";
import Main from "../Layout/Main";
import ComingSoon from "../components/UI/ComingSoon";
import BasicLayout from "../Layout/BasicLayout";

const Chests = () => {
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

export default Chests;
