import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import Main from "../../components/Layout/Main";
import SEO from "../../components/SEO";
import ComingSoon from "../../components/UI/ComingSoon/ComingSoon";
import Header from "../../components/UI/Header/Header";

const claim = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

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

      <Main>
        <ComingSoon width={400} height={400} />
      </Main>
    </>
  );
};

export default claim;
