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

export default function TokenAllowanceReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALLOWANCE":
      return {
        ...state,
        allowanceFetching: action.payload.fetching,
      };
    case "GET_ALLOWANCE_SUCCESS":
      return {
        ...state,
        allowance: action.payload.allowance,
        allowanceFetching: action.payload.fetching,
      };
    case "GET_ALLOWANCE_ERROR":
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
