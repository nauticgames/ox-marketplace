import { Moralis } from "moralis";
import { BalanceOfABI } from "../abis";
import { StadiumContract, WBNBContract } from "../constants/contracts";
import { CorrectHexChain } from "../constants/chain";
import toast from "react-hot-toast";

const GetWBNBBalance = async (account: string) => {
  try {
    const balance: any = await Moralis.executeFunction({
      functionName: "balanceOf",
      abi: [BalanceOfABI],
      contractAddress: WBNBContract,
      chain: CorrectHexChain,
      params: {
        owner: account,
      },
    });

    const formatBalance = Number(Moralis.Units.FromWei(balance));

    return formatBalance;
  } catch {
    return toast.error("Network error, please refresh");
  }
};

const GetStadiumsBalance = async (account: string) => {
  try {
    const balance: any = await Moralis.executeFunction({
      functionName: "balanceOf",
      abi: [BalanceOfABI],
      contractAddress: StadiumContract,
      chain: CorrectHexChain,
      params: {
        owner: account,
      },
    });

    return Number(balance);
  } catch {
    return null;
  }
};

export { GetWBNBBalance, GetStadiumsBalance };
