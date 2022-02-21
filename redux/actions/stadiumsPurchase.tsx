import * as t from "../types/stadiumsPurchase";
import { stadiumContract } from "../../constants/contracts";
import { chainId as chain } from "../../constants/chain";
import purchaseStadiumABI from "../../abis/purchaseStadiumABI";
import { Moralis } from "moralis";
import handleRpcErrors from "../../utils/handleRpcErrors";
import toast from "react-hot-toast";

export function stadiumPurchaseAction(type) {
  return async (dispatch) => {
    const options = {
      functionName: "purchase",
      contractAddress: stadiumContract,
      chain,
      abi: [purchaseStadiumABI],
      params: {
        _type: type,
      },
    };

    try {
      dispatch(initPurchase());
      const tx: any = await Moralis.executeFunction(options);

      await tx.wait();
      toast.success("Stadium purchased succesfull");

      dispatch(purchaseSuccess());
    } catch (error) {
      dispatch(purchaseError());
      return handleRpcErrors(error);
    }
  };
}

const initPurchase = () => ({
  type: t.STADIUM_PURCHASE,
});

const purchaseSuccess = () => ({
  type: t.STADIUM_PURCHASE_SUCCESS,
});

const purchaseError = () => ({
  type: t.STADIUM_PURCHASE_ERROR,
});
