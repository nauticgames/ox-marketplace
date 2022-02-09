import AsidePanel from "../../components/AsidePanel/AsidePanel";
import Main from "../../Layout/Main";
import ComingSoon from "../../components/UI/ComingSoon/ComingSoon";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../Layout/NavigationButtons";
import useAuth from "../../hooks/useAuth";

const Claim = () => {
  useAuth();

  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />

      <Main>
        <NavigationButtons mt={40} path="/stadiums" />
        <ComingSoon width={400} height={400} />
      </Main>
    </>
  );
};

export default Claim;
