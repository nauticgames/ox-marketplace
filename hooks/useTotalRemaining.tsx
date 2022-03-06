import { useContext, useEffect, useState } from "react";
import { IWeb3Context, Web3Context } from "../context/Web3Context";
import { StadiumContract } from "../constants/contracts";
import getTotalSupply from "../services/getTotalSupply";

const useTotalRemaining = () => {
  const [totalRemaining, setTotalRemaining] = useState(null);
  const { enabled }: IWeb3Context = useContext(Web3Context);

  useEffect(() => {
    if (!enabled) return;
    let mounted = true;

    const unsubscribe = async () => {
      try {
        const result = await getTotalSupply(StadiumContract);
        setTotalRemaining(result);
      } catch {
        return;
      }
    };

    if (mounted) unsubscribe();

    return () => {
      mounted = false;
    };
  }, [enabled]);

  return {
    totalRemaining,
  };
};

export default useTotalRemaining;
