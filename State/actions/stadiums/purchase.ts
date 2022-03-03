import { Moralis } from "moralis";
import { StadiumContract } from "../../../constants/contracts";
import { CorrectHexChain } from "../../../constants/chain";
import { PurchaseStadiumABI } from "../../../abis";
import HandleRPCErrors from "../../../utils/HandleRPCErrors";
import toast from "react-hot-toast";

export function StadiumPurchaseAction(type) {
  return async (dispatch) => {
    const options = {
      functionName: "purchase",
      contractAddress: StadiumContract,
      chain: CorrectHexChain,
      abi: [PurchaseStadiumABI],
      params: {
        _type: type,
      },
    };

    try {
      dispatch(InitPurchase());
      const tx: any = await Moralis.executeFunction(options);

      await tx.wait();
      toast.success("Stadium purchased succesfull");

      dispatch(PurchaseSuccess());
    } catch (error) {
      dispatch(PurchaseError());
      return HandleRPCErrors(error);
    }
  };
}

const InitPurchase = () => ({
  type: "STADIUM_PURCHASE",
});

const PurchaseSuccess = () => ({
  type: "STADIUM_PURCHASE_SUCCESS",
});

const PurchaseError = () => ({
  type: "STADIUM_PURCHASE_ERROR",
});
