import Main from "../components/Layout/Main";
import SEO from "../components/SEO";
import ComingSoon from "../components/UI/ComingSoon/ComingSoon";
import Header from "../components/UI/Header/Header";

const exchange = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>

      <SEO />
      <Header />
      <main style={{ marginTop: 80 }}>
        <ComingSoon width={400} height={400} />
      </main>
    </>
  );
};

export default exchange;
