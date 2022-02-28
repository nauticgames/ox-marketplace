export function HandleNavAction(payload) {
  return async (dispatch) => {
    dispatch(HandleNav(payload));
  };
}

const HandleNav = (payload) => ({
  type: "HANDLE_NAV",
  payload,
});
