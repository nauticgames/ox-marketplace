import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import GetTokenPrice from "../services/TokenPrice";

const useUsdPrice = () => {
  const [usdPrice, setUsdPrice] = useState(null);
  const { enabled }: any = useContext(Web3Context);

  useEffect(() => {
    if (!enabled) return;

    const unsubscribe = () => {
      GetUsdTokenPrice();
    };

    return unsubscribe();
  }, [enabled]);

  const GetUsdTokenPrice = async () => {
    try {
      const { usdPrice } = await GetTokenPrice(
        "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
      );

      setUsdPrice(usdPrice);
    } catch {
      return;
    }
  };

  return { usdPrice };
};

export default useUsdPrice;
