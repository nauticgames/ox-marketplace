import { useEffect, useState } from "react";
import GetTokenPrice from "../services/tokenPrice";
import formatPrice from "../utils/formatPrice";

const useUsdPrice = () => {
  const [usdPrice, setUsdPrice] = useState(null);
  const [formattedPrice, setFormattedPrice] = useState(null);

  useEffect((): any => {
    let mounted = true;

    const unsubscribe = async () => {
      try {
        const price = await GetTokenPrice(
          "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
        );

        if (mounted) {
          setUsdPrice(price);
          setFormattedPrice(formatPrice(price.toFixed(2)));
        }
      } catch {
        return;
      }
    };

    unsubscribe();

    return () => {
      mounted = false;
    };
  }, []);

  return { usdPrice, formattedPrice };
};

export default useUsdPrice;
