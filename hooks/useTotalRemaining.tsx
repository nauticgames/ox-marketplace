import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { StadiumContract } from "../constants/contracts";
import GetTotalSupply from "../services/GetTotalSupply";

const useTotalRemaining = () => {
  const [totalRemaining, setTotalRemaining] = useState(null);
  const { enabled }: any = useContext(Web3Context);

  useEffect((): any => {
    if (!enabled) return;
    let mounted = true;

    const unsubscribe = async () => {
      try {
        const result = await GetTotalSupply(StadiumContract);

        if (mounted) setTotalRemaining(result);
      } catch {
        return;
      }
    };

    unsubscribe();

    return () => {
      mounted = false;
    };
  }, [enabled]);

  return {
    totalRemaining,
  };
};

export default useTotalRemaining;
