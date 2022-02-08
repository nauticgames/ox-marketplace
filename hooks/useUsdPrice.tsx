import { useEffect, useState } from "react";
import { useTokenPrice } from "react-moralis";

const useUsdPrice = () => {
  const [usdPrice, setUsdPrice] = useState(null);
  const { data: formattedData } = useTokenPrice({
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chain: "bsc",
  });

  useEffect(() => {
    const unsubscribe = () => {
      setUsdPrice(formattedData.usdPrice);
    };
    if (formattedData) {
      return unsubscribe();
    }
  }, [formattedData]);

  return { usdPrice };
};

export default useUsdPrice;
