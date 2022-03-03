import { Moralis } from "moralis";

const GetTokenPrice = async (address: string) => {
  try {
    const result = await Moralis.Web3API.token.getTokenPrice({
      address,
      chain: "0x38",
      exchange: "pancakeswap-v2",
    });

    return result;
  } catch {
    return null;
  }
};

export default GetTokenPrice;
