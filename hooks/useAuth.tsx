import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

const useAuth = () => {
  const { isInitialized, isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/stadiums");
    }
  }, [isInitialized, isAuthenticated]);
};

export default useAuth;
