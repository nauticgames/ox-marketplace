import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import GetStadiumsRemaining from "../services/StadiumsRemaining";
import { IStadiumsRemainingProps } from "../types/Components";

const useRemaining = ({ type }: IStadiumsRemainingProps) => {
  const [remaining, setRemaining] = useState(null);
  const { enabled }: any = useContext(Web3Context);

  useEffect(() => {
    if (!enabled) return;
    let mounted = true;

    const unsubscribe = async () => {
      const result = await GetStadiumsRemaining(type);
      if (mounted) setRemaining(result);
    };

    unsubscribe();

    return () => {
      mounted = false;
    };
  }, [enabled]);

  return {
    remaining,
  };
};

export default useRemaining;
