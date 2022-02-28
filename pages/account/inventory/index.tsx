import { useRouter } from "next/router";
import { useEffect } from "react";
import AsidePanel from "../../../components/AsidePanel";
import useAuth from "../../../hooks/useAuth";
import BasicLayout from "../../../Layout/BasicLayout";
import Main from "../../../Layout/Main";
import NavigationButtons from "../../../components/Navigation";

const Index = () => {
  useAuth();
  const router = useRouter();

  useEffect(() => {
    router.replace("/account/inventory/stadiums");
  }, []);

  return (
    <>
      <BasicLayout />
      <AsidePanel type="account" />
      <Main>
        <NavigationButtons mt={40} path="/stadiums" />
      </Main>
    </>
  );
};

export default Index;
