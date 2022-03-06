import { useEffect, useState } from "react";
import GetTokenPrice from "../services/tokenPrice";

const useUsdPrice = () => {
  const [usdPrice, setUsdPrice] = useState(null);

  useEffect((): any => {
    let mounted = true;

    const unsubscribe = async () => {
      try {
        const price = await GetTokenPrice(
          "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
        );

        setUsdPrice(price);
      } catch {
        return;
      }
    };

    if (mounted) unsubscribe();

    return () => {
      mounted = false;
    };
  }, []);

  return { usdPrice };
};

export default useUsdPrice;
