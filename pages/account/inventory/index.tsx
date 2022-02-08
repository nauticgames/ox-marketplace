import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AsidePanel from "../../../components/AsidePanel/AsidePanel";
import BasicLayout from "../../../Layout/BasicLayout";
import NavigationButtons from "../../../Layout/NavigationButtons";

const Index = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized, isAuthenticated]);

  useEffect(() => {
    router.replace("/account/inventory/stadiums");
  }, []);

  return (
    <>
      <BasicLayout />
      <NavigationButtons mt={40} path="/stadiums" />
      <AsidePanel type="account" />
    </>
  );
};

export default Index;
