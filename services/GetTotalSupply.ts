import { Moralis } from "moralis";
import { TotalSupplyABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";

const GetTotalSupply = async (address: string) => {
  const totalSupply = await Moralis.Web3API.native.runContractFunction({
    function_name: "totalSupply",
    address,
    abi: [TotalSupplyABI],
    chain: CorrectHexChain,
  });

  return Number(totalSupply);
};

export default GetTotalSupply;
