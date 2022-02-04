import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AsidePanel from "../../../components/AsidePanel/AsidePanel";
import Inventory from "../../../components/Inventory/Inventory";
import Main from "../../../components/Layout/Main";
import SEO from "../../../components/SEO";
import Header from "../../../components/UI/Header/Header";

const Stadiums = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized, isAuthenticated]);

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>

      <SEO />
      <Header />
      <AsidePanel type="account" />

      <Main>
        <Inventory />
      </Main>
    </>
  );
};

export default Stadiums;
