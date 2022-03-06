import { Moralis } from "moralis";
import toast from "react-hot-toast";
import { ApproveABI } from "../../../abis";
import { CorrectHexChain } from "../../../constants/chain";
import { StadiumContract, WBNBContract } from "../../../constants/contracts";
import { GetWbnbAllowanceAction } from "./allowance";

export function ApproveWBNBAction(account) {
  return async (dispatch) => {
    if (!account) {
      dispatch(ApproveWBNBError());
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
      dispatch(ApproveWBNB());
      const tx: any = await Moralis.executeFunction(options);

      await tx.wait();

      await dispatch(GetWbnbAllowanceAction(account));
      await dispatch(ApproveWBNBSuccess());
    } catch {
      dispatch(ApproveWBNBError());
      return toast.error("Please approve allowance before purchase");
    }
  };
}

const ApproveWBNB = () => ({
  type: "TOKEN_APPROVE",
  payload: {
    approveFetching: {
      wbnb: true,
    },
  },
});

const ApproveWBNBSuccess = () => ({
  type: "TOKEN_APPROVE_SUCCESS",
  payload: {
    approveFetching: {
      wbnb: false,
    },
    approveError: {
      wbnb: false,
    },
  },
});

const ApproveWBNBError = () => ({
  type: "TOKEN_APPROVE_ERROR",
  payload: {
    approveFetching: {
      wbnb: false,
    },
    approveError: {
      wbnb: true,
    },
  },
});
