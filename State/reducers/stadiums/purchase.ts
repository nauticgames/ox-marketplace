const initialState = {
  fetching: false,
  error: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "STADIUM_PURCHASE":
      return {
        ...state,
        fetching: true,
      };
    case "STADIUM_PURCHASE_SUCCESS":
      return {
        ...state,
        success: true,
        fetching: null,
      };
    case "STADIUM_PURCHASE_ERROR":
      return {
        ...state,
        success: null,
        fetching: null,
        error: true,
      };

    default:
      return state;
  }
}
