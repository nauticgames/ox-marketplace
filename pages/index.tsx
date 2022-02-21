import { useEffect } from "react";
import { useRouter } from "next/router";
import AsidePanel from "../components/AsidePanel/AsidePanel";
import BasicLayout from "../Layout/BasicLayout";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = () => {
      router.replace("/stadiums");
    };

    return unsubscribe();
  }, []);

  return (
    <>
      <BasicLayout />
      <AsidePanel type="marketplace" />
    </>
  );
};

export default Home;
