import { Moralis } from "moralis";
import { PurchaseStadiumABI } from "../abis";
import { CorrectHexChain } from "../constants/chain";
import { StadiumContract } from "../constants/contracts";

const purchaseStadium = async (type: number | string) => {
  try {
    const options = {
      functionName: "purchase",
      contractAddress: StadiumContract,
      chain: CorrectHexChain,
      abi: [PurchaseStadiumABI],
      params: {
        _type: type,
      },
    };

    const tx: any = await Moralis.executeFunction(options);

    return tx;
  } catch {
    return;
  }
};

export default purchaseStadium;
