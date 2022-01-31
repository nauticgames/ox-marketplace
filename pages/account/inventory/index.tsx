import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

const index = () => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized]);

  useEffect(() => {
    router.replace("/account/inventory/stadiums");
  }, []);

  return null;
};

export default index;
