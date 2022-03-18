import { useEffect, useState } from "react";
import getTotalSupply from "../services/getTotalSupply";

interface ITotalSupplyProps {
  contract: string;
}

const useTotalSupply = ({ contract }: ITotalSupplyProps) => {
  const [totalSupply, setTotalSupply] = useState(null);

  useEffect(() => {
    let mounted = true;

    const unsubscribe = async () => {
      const result = await getTotalSupply(contract);
      if (mounted) setTotalSupply(result);
    };

    unsubscribe();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    totalSupply,
  };
};

export default useTotalSupply;
