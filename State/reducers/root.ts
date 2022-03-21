import { combineReducers } from "redux";
import NavReducer from "./nav";
import StadiumDetailsReducer from "./stadiums/details";
import StadiumsInventoryReducer from "./stadiums/inventory";
import StadiumsPurchaseReducer from "./stadiums/purchase";
import TokenAllowanceReducer from "./token/allowance";
import TokenApproveReducer from "./token/approve";
import NiceModal from "@ebay/nice-modal-react";

export default combineReducers({
  STADIUM_INVENTORY: StadiumsInventoryReducer,
  STADIUM_DETAILS: StadiumDetailsReducer,
  STADIUM_PURCHASE: StadiumsPurchaseReducer,
  NAV: NavReducer,
  TOKEN_ALLOWANCE: TokenAllowanceReducer,
  TOKEN_APPROVE: TokenApproveReducer,
  __nice_modals: NiceModal.reducer,
});
