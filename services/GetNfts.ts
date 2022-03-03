import { Moralis } from "moralis";
import { CorrectHexChain } from "../constants/chain";

const GetNfts = async (account, contract) => {
  try {
    const result: any = await Moralis.Web3API.account.getNFTs({
      chain: CorrectHexChain,
      address: account,
      token_addresses: [contract],
    });

    return result;
  } catch {
    return null;
  }
};

export default GetNfts;
