//@ts-nocheck
import { Moralis } from "moralis";
import { erc20Contract, stadiumContract } from "../constants/contracts";
import { chainId as chain } from "../constants/chain";

const getWBNBAllowance = async (account: string) => {
  if (!account) return;

  try {
    const { allowance } = await Moralis.Web3API.token.getTokenAllowance({
      address: erc20Contract,
      chain,
      owner_address: account,
      spender_address: stadiumContract,
    });

    return Number(Moralis.Units.FromWei(allowance));
  } catch (error) {
    return;
  }
};

export { getWBNBAllowance };
