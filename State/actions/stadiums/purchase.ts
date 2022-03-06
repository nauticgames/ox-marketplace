import HandleRPCErrors from "../../../utils/HandleRPCErrors";
import toast from "react-hot-toast";
import purchaseStadium from "../../../services/purchaseStadium";

export function StadiumPurchaseAction(type) {
  return async (dispatch) => {
    try {
      dispatch(InitPurchase());

      const tx = await purchaseStadium(type);

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
