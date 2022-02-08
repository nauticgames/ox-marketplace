import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import Main from "../../Layout/Main";
import ComingSoon from "../../components/UI/ComingSoon/ComingSoon";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../Layout/NavigationButtons";

const Claim = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized, isAuthenticated]);

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
