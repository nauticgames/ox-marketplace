import { Moralis } from "moralis";
import { GetTokensByOwnerABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";
import { StadiumContract } from "../constants/contracts";

const getAllNFTByOwner = async (account, contract, limit, offset) => {
  try {
    const result: any = await Moralis.Web3API.account.getNFTs({
      chain: CorrectHexChain,
      address: account,
      token_addresses: [contract],
      limit,
      offset,
    });

    return result;
  } catch {
    return null;
  }
};

const getTokensByOwner = async (account: string) => {
  try {
    const result: any = await Moralis.executeFunction({
      abi: [GetTokensByOwnerABI],
      contractAddress: StadiumContract,
      functionName: "getTokensByOwner",
      chain: CorrectHexChain,
      params: {
        _owner: account,
      },
    });

    const formattedIds = result.map((id) => Number(id));

    return formattedIds;
  } catch {
    return null;
  }
};

export { getAllNFTByOwner, getTokensByOwner };
