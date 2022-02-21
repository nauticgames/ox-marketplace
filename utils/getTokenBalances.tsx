import { Moralis } from "moralis";
import balanceOfABI from "../abis/balanceOfABI";
import { erc20Contract } from "../constants/contracts";
import { chainId as chain } from "../constants/chain";

const getWBNBbalance = async (account: string) => {
  try {
    const balance: any = await Moralis.executeFunction({
      functionName: "balanceOf",
      abi: [balanceOfABI],
      contractAddress: erc20Contract,
      chain,
      params: {
        owner: account,
      },
    });

    const formatBalance = Number(Moralis.Units.FromWei(balance));

    return formatBalance;
  } catch (error) {
    console.log(error);
    return;
  }
};

export { getWBNBbalance };
