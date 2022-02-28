import { Moralis } from "moralis";
import { StadiumsLeftABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";
import { StadiumContract } from "../constants/contracts";

const GetStadiumsRemaining = async (type) => {
  try {
    const result = await Moralis.Web3API.native.runContractFunction({
      function_name: "stadiumsLeft",
      address: StadiumContract,
      chain: CorrectHexChain,
      abi: [StadiumsLeftABI],
      params: { "": String(type) },
    });

    return Number(result);
  } catch (error) {
    return null;
  }
};

export default GetStadiumsRemaining;
