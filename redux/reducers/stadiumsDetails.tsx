import * as t from "../types/stadiumsDetails";

const initialState = {
  fetching: true,
  details: null,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.GET_STADIUMS_DETAILS_SUCCESS:
      return {
        ...state,
        fetching: false,
        details: action.payload,
      };

    case t.GET_STADIUMS_DETAILS_ERROR:
      return {
        ...state,
        fetching: false,
        error: true,
      };

    case t.CLEAR_STADIUM_DETAILS:
      return initialState;

    default:
      return state;
  }
}
