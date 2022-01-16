import AsidePanel from "../components/AsidePanel/AsidePanel";
import SEO from "../components/SEO";
import Header from "../components/UI/Header/Header";
import Main from "../components/Layout/Main";
import StadiumList from "../components/Stadiums/StadiumList";

const stadiums = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>

      <SEO />
      <Header />
      <AsidePanel />
      <Main>
        <StadiumList />
      </Main>
    </>
  );
};

export default stadiums;
