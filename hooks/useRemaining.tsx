import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import GetStadiumsRemaining from "../services/StadiumsRemaining";
import { IStadiumsRemainingProps } from "../types/Components";

const useRemaining = ({ type }: IStadiumsRemainingProps) => {
  const [remaining, setRemaining] = useState(null);
  const { enabled }: any = useContext(Web3Context);

  useEffect((): any => {
    if (!enabled) return;

    const unsubscribe = async () => {
      try {
        const result = await GetStadiumsRemaining(type);

        setRemaining(result);
      } catch {
        return;
      }
    };

    return unsubscribe();
  }, [enabled]);

  return {
    remaining,
  };
};

export default useRemaining;
