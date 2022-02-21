import * as t from "../types/allowance";

interface InitialState {
  allowanceFetching: {
    wbnb: boolean;
  };
  allowance: {
    wbnb: null | number;
  };
  networkError: {
    wbnb: boolean;
  };
}

const initialState = {
  allowanceFetching: {
    wbnb: false,
  },
  allowance: {
    wbnb: null,
  },
  networkError: {
    wbnb: false,
  },
};

export default function (state: InitialState = initialState, action) {
  switch (action.type) {
    case t.GET_ALLOWANCE:
      return {
        ...state,
        allowanceFetching: action.payload.fetching,
      };
    case t.GET_ALLOWANCE_SUCCESS:
      return {
        ...state,
        allowance: action.payload.allowance,
        allowanceFetching: action.payload.fetching,
      };
    case t.GET_ALLOWANCE_ERROR:
      return {
        ...state,
        allowance: action.payload.allowance,
        allowanceFetching: action.payload.fetching,
        networkError: action.payload.networkError,
      };

    default:
      return state;
  }
}
