import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import SEO from "../../components/SEO";
import Header from "../../components/UI/Header/Header";

const index = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    router.replace("/account/overview");
  }, []);

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized]);

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
    </>
  );
};

export default index;
