import React from "react";
import AsidePanel from "../components/AsidePanel/AsidePanel";
import SEO from "../components/SEO";
import Header from "../components/UI/Header/Header";

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
    </>
  );
};

export default stadiums;
