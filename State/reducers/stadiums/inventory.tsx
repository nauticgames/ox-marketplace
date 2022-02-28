const initialState = {
  stadiums: null,
  error: null,
  fetching: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_STADIUMS_SUCCESS":
      return {
        ...state,
        stadiums: action.payload.stadiums,
        fetching: false,
      };
    case "GET_STADIUMS_ERROR":
      return {
        ...state,
        error: true,
        fetching: false,
      };

    default:
      return state;
  }
}
