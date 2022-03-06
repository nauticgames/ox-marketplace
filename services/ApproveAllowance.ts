import { Moralis } from "moralis";
import { ApproveABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";
import { StadiumContract, WBNBContract } from "../constants/contracts";
import toast from "react-hot-toast";

const approveWBNB = async (account) => {
  if (!account) {
    return toast.error("Network error, please refresh");
  }

  const options = {
    functionName: "approve",
    contractAddress: WBNBContract,
    chain: CorrectHexChain,
    abi: [ApproveABI],
    params: {
      guy: StadiumContract,
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

export { approveWBNB };
