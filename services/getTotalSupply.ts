import { TotalSupplyABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";
import httpClient from "../config/axios";

const getTotalSupply = async (address: string) => {
  const url = `${address}/function?chain=${CorrectHexChain}&function_name=totalSupply`;

  try {
    const { data } = await httpClient.post(url, {
      abi: [TotalSupplyABI],
    });

    return Number(data);
  } catch {
    return null;
  }
};

export default getTotalSupply;
