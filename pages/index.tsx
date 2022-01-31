import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/stadiums");
  }, []);

  return null;
};

export default Home;
