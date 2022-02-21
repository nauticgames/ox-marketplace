import * as t from "../types/approve";

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

export default function (state: InitialState = initialState, action) {
  switch (action.type) {
    case t.TOKEN_APPROVE:
      return {
        ...state,
        approveFetching: action.payload.approveFetching,
      };
    case t.TOKEN_APPROVE_SUCCESS:
      return {
        ...state,
        approveFetching: action.payload.approveFetching,
        approveError: action.payload.approveError,
      };
    case t.TOKEN_APPROVE_ERROR:
      return {
        ...state,
        approveFetching: action.payload.approveFetching,
        approveError: action.payload.approveError,
      };

    default:
      return state;
  }
}
