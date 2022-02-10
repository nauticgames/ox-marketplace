import { Moralis } from "moralis";
import { chainId as chain } from "../constants/chain";

const getAllowance = async (address, spender, account) => {
  try {
    const { allowance } = await Moralis.Web3API.token.getTokenAllowance({
      chain,
      address,
      owner_address: account,
      spender_address: spender,
    });

    console.log(allowance);

    const formattedAllowance = Number(Moralis.Units.FromWei(allowance));

    return formattedAllowance;
  } catch {
    return;
  }
};

export default getAllowance;
