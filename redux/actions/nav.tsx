import * as t from "../types/nav";

export function handleNavAction(payload) {
  return async (dispatch) => {
    dispatch(handleNav(payload));
  };
}

const handleNav = (payload) => ({
  type: t.HANDLE_NAV,
  payload,
});
