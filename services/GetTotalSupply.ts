import { Moralis } from "moralis";
import { TotalSupplyABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";

const GetTotalSupply = async (address: string) => {
  const totalSupply: any = await Moralis.executeFunction({
    functionName: "totalSupply",
    contractAddress: address,
    abi: [TotalSupplyABI],
    chain: CorrectHexChain,
  });

  return Number(totalSupply);
};

export default GetTotalSupply;
