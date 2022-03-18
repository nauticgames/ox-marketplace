const initialState = {
  fetching: true,
  data: null,
  error: false,
};

export default function StadiumDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_STADIUMS_DETAILS_SUCCESS":
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };

    case "GET_STADIUMS_DETAILS_ERROR":
      return {
        ...state,
        fetching: false,
        error: true,
      };

    case "CLEAR_STADIUM_DETAILS":
      return initialState;

    default:
      return state;
  }
}
