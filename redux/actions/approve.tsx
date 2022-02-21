import * as t from "../types/approve";
import { Moralis } from "moralis";
import toast from "react-hot-toast";
import approveABI from "../../abis/approveAllowance";
import { chainId as chain } from "../../constants/chain";
import { erc20Contract, stadiumContract } from "../../constants/contracts";
import { getWbnbAllowanceAction } from "./allowance";

export function approveWbnbAction(account) {
  return async (dispatch) => {
    if (!account) {
      dispatch(approveWbnbError());
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
      dispatch(approveWbnb());
      const tx: any = await Moralis.executeFunction(options);

      await tx.wait();

      await dispatch(getWbnbAllowanceAction(account));
      await dispatch(approveWbnbSuccess());
    } catch (error) {
      dispatch(approveWbnbError());
      return toast.error("Please approve allowance before purchase");
    }
  };
}

const approveWbnb = () => ({
  type: t.TOKEN_APPROVE,
  payload: {
    approveFetching: {
      wbnb: true,
    },
  },
});

const approveWbnbSuccess = () => ({
  type: t.TOKEN_APPROVE_SUCCESS,
  payload: {
    approveFetching: {
      wbnb: false,
    },
    approveError: {
      wbnb: false,
    },
  },
});

const approveWbnbError = () => ({
  type: t.TOKEN_APPROVE_ERROR,
  payload: {
    approveFetching: {
      wbnb: false,
    },
    approveError: {
      wbnb: true,
    },
  },
});
