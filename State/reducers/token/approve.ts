interface InitialState {
  approveFetching: {
    wbnb: boolean;
  };
  approveError: {
    wbnb: boolean;
  };
}

const initialState = {
  approveFetching: {
    wbnb: false,
  },
  approveError: {
    wbnb: false,
  },
};

export default function TokenApproveReducer(
  state: InitialState = initialState,
  action
) {
  switch (action.type) {
    case "TOKEN_APPROVE":
      return {
        ...state,
        approveFetching: action.payload.approveFetching,
      };
    case "TOKEN_APPROVE_SUCCESS":
      return {
        ...state,
        approveFetching: action.payload.approveFetching,
        approveError: action.payload.approveError,
      };
    case "TOKEN_APPROVE_ERROR":
      return {
        ...state,
        approveFetching: action.payload.approveFetching,
        approveError: action.payload.approveError,
      };

    default:
      return state;
  }
}
