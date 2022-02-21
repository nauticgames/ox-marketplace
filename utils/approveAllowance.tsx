import { Moralis } from "moralis";
import approveABI from "../abis/approveAllowance";
import { chainId as chain } from "../constants/chain";
import { erc20Contract, stadiumContract } from "../constants/contracts";
import toast from "react-hot-toast";

const approveWbnbAllowance = async (account) => {
  if (!account) {
    return toast.error("Network error, please refresh");
  }

  const options = {
    functionName: "approve",
    contractAddress: erc20Contract,
    chain,
    abi: [approveABI],
    params: {
      guy: stadiumContract,
      wad: Moralis.Units.ETH(30),
    },
  };

  try {
    const tx: any = await Moralis.executeFunction(options);

    await tx.wait();
  } catch (error) {
    return toast.error("Please approve allowance before purchase");
  }
};

export { approveWbnbAllowance };
