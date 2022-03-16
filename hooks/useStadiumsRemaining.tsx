import { useContext, useEffect, useState } from "react";
import { IWeb3Context, Web3Context } from "../context/Web3Context";
import GetStadiumsRemaining from "../services/stadiumsRemaining";
import { IStadiumsRemainingHookProps } from "../types/Components";

const useRemaining = ({ type }: IStadiumsRemainingHookProps) => {
  const [remaining, setRemaining] = useState(null);
  const { web3Provider }: IWeb3Context = useContext(Web3Context);

  useEffect(() => {
    if (!web3Provider) return;
    let mounted = true;

    const unsubscribe = async () => {
      try {
        const result = await GetStadiumsRemaining(type);
        setRemaining(result);
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
    remaining,
  };
};

export default useRemaining;
