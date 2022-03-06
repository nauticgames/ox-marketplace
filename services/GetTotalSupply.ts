import { TotalSupplyABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";
import httpClient from "../config/axios";

const getTotalSupply = async (address: string) => {
  try {
    const { data } = await httpClient.post(
      `${address}/function?chain=${CorrectHexChain}&function_name=totalSupply`,
      {
        abi: [TotalSupplyABI],
      }
    );

    return Number(data);
  } catch {
    return null;
  }
};

export default getTotalSupply;
