import { useEffect, useState } from "react";
import GetStadiumsRemaining from "../services/stadiumsRemaining";
import { IStadiumsRemainingHookProps } from "../types/Components";

const useRemaining = ({ type }: IStadiumsRemainingHookProps) => {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    let mounted = true;

    const unsubscribe = async () => {
      const result = await GetStadiumsRemaining(type);
      if (mounted) setRemaining(result);
    };

    unsubscribe();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    remaining,
  };
};

export default useRemaining;
