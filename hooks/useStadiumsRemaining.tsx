import { useContext, useEffect, useState } from "react";
import { IWeb3Context, Web3Context } from "../context/Web3Context";
import GetStadiumsRemaining from "../services/stadiumsRemaining";
import { IStadiumsRemainingHookProps } from "../types/Components";

const useRemaining = ({ type }: IStadiumsRemainingHookProps) => {
  const [remaining, setRemaining] = useState(null);
  const { enabled }: IWeb3Context = useContext(Web3Context);

  useEffect(() => {
    if (!enabled) return;
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
  }, [enabled]);

  return {
    remaining,
  };
};

export default useRemaining;
