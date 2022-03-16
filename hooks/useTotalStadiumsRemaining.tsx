import { useContext, useEffect, useState } from "react";
import { IWeb3Context, Web3Context } from "../context/Web3Context";
import { StadiumContract } from "../constants/contracts";
import getTotalSupply from "../services/getTotalSupply";

const useTotalRemaining = () => {
  const [totalRemaining, setTotalRemaining] = useState(null);
  const { web3Provider }: IWeb3Context = useContext(Web3Context);

  useEffect(() => {
    if (!web3Provider) return;
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
  }, [web3Provider]);

  return {
    totalRemaining,
  };
};

export default useTotalRemaining;
