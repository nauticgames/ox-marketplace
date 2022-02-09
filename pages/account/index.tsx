import { useEffect } from "react";
import { useRouter } from "next/router";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../Layout/NavigationButtons";
import useAuth from "../../hooks/useAuth";

const Index = () => {
  const router = useRouter();
  useAuth();

  useEffect(() => {
    router.replace("/account/overview");
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
