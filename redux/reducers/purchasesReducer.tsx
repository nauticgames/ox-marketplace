import * as t from "../types/purchases";

const initialState = {
  purchases: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.SET_PURCHASES:
      return {
        ...state,
        purchases: action.payload,
      };

    default:
      return state;
  }
}
