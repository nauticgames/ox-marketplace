import { useEffect } from "react";
import { useRouter } from "next/router";
import AsidePanel from "../../components/AsidePanel";
import BasicLayout from "../../Layout/BasicLayout";
import NavigationButtons from "../../components/Navigation";
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
