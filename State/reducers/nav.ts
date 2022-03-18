const initialState = {
  showNav: false,
};

export default function NavReducer(state = initialState, action) {
  switch (action.type) {
    case "HANDLE_NAV":
      return {
        ...state,
        showNav: action.payload,
      };

    default:
      return state;
  }
}
