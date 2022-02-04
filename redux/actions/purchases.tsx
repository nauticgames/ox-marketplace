import * as t from "../types/purchases";

export function setPurchasesAction(payload) {
  return async (dispatch) => {
    dispatch(setPurchases(payload));
  };
}

const setPurchases = (payload) => ({
  type: t.SET_PURCHASES,
  payload,
});
