import { useRouter } from "next/router";
import { useEffect } from "react";
import AsidePanel from "../components/AsidePanel/AsidePanel";
import BasicLayout from "../Layout/BasicLayout";

const Home = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/stadiums");
  }, []);

  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
    </>
  );
};

export default Home;
