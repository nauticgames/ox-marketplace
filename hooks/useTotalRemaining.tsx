import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { StadiumContract } from "../constants/contracts";
import GetTotalSupply from "../services/GetTotalSupply";

const useTotalRemaining = () => {
  const [totalRemaining, setTotalRemaining] = useState(null);
  const { enabled }: any = useContext(Web3Context);

  useEffect((): any => {
    if (!enabled) return;

    const unsubscribe = async () => {
      try {
        const result = await GetTotalSupply(StadiumContract);

        setTotalRemaining(result);
      } catch {
        return;
      }
    };

    return unsubscribe();
  }, [enabled]);

  return {
    totalRemaining,
  };
};

export default useTotalRemaining;
