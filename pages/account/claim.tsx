import AsidePanel from "../../components/AsidePanel";
import Main from "../../Layout/Main";
import ComingSoon from "../../components/UI/ComingSoon";
import BasicLayout from "../../Layout/BasicLayout";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../components/Navigation";

const Claim = () => {
  useAuth();

  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />

      <Main>
        <Navigation mt={40} path="/stadiums" />
        <ComingSoon width={400} height={400} />
      </Main>
    </>
  );
};

export default Claim;
