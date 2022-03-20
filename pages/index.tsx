import { useRouter } from "next/router";
import { useEffect } from "react";
import AsidePanel from "../components/AsidePanel";
import BasicLayout from "../Layout/BasicLayout";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/stadiums");
  }, []);

  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
    </>
  );
};

export default Home;
