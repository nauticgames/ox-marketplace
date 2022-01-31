import AsidePanel from "../components/AsidePanel/AsidePanel";
import SEO from "../components/SEO";
import Header from "../components/UI/Header/Header";
import Main from "../components/Layout/Main";
import ComingSoon from "../components/UI/ComingSoon/ComingSoon";

const passes = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>

      <SEO />
      <Header />
      <AsidePanel type="marketplace" />
      <Main>
        <ComingSoon width={400} height={400} />
      </Main>
    </>
  );
};

export default passes;
