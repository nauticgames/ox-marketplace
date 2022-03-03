import { Moralis } from "moralis";
import toast from "react-hot-toast";
import { CorrectHexChain } from "../../../constants/chain";
import { StadiumContract, WBNBContract } from "../../../constants/contracts";

export function GetWbnbAllowanceAction(account) {
  return async (dispatch) => {
    if (!account) {
      toast.error("An error has ocurred, please refresh");
      return dispatch(GetWbnbAllowanceError());
    }

    dispatch(GetWbnbAllowance());

    try {
      const { allowance } = await Moralis.Web3API.token.getTokenAllowance({
        address: WBNBContract,
        chain: CorrectHexChain,
        owner_address: account,
        spender_address: StadiumContract,
      });

      const formattedAllowance = Number(Moralis.Units.FromWei(allowance));

      dispatch(GetWbnbAllowanceSuccess(formattedAllowance));
    } catch {
      dispatch(GetWbnbAllowanceError());
      return toast.error("An error has ocurred, please refresh");
    }
  };
}

const GetWbnbAllowance = () => ({
  type: "GET_ALLOWANCE",
  payload: {
    fetching: {
      wbnb: true,
    },
  },
});

const GetWbnbAllowanceSuccess = (allowance) => ({
  type: "GET_ALLOWANCE_SUCCESS",
  payload: {
    fetching: {
      wbnb: false,
    },
    allowance: {
      wbnb: allowance,
    },
  },
});

const GetWbnbAllowanceError = () => ({
  type: "GET_ALLOWANCE_ERROR",
  payload: {
    fetching: {
      wbnb: false,
    },
    networkError: {
      wbnb: true,
    },
    allowance: {
      wbnb: null,
    },
  },
});
