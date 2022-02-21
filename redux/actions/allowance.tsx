import { getWBNBAllowance } from "../../utils/getAllowance";
import * as t from "../types/allowance";

export function getWbnbAllowanceAction(account) {
  return async (dispatch) => {
    if (!account) {
      return dispatch(getWbnbAllowanceError());
    }

    dispatch(getWbnbAllowance());

    try {
      const allowance = await getWBNBAllowance(account);

      dispatch(getWbnbAllowanceSuccess(allowance));
    } catch (error) {
      dispatch(getWbnbAllowanceError());
    }
  };
}

const getWbnbAllowance = () => ({
  type: t.GET_ALLOWANCE,
  payload: {
    fetching: {
      wbnb: true,
    },
  },
});

const getWbnbAllowanceSuccess = (allowance) => ({
  type: t.GET_ALLOWANCE_SUCCESS,
  payload: {
    fetching: {
      wbnb: false,
    },
    allowance: {
      wbnb: allowance,
    },
  },
});

const getWbnbAllowanceError = () => ({
  type: t.GET_ALLOWANCE_ERROR,
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
