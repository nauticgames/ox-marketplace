import { combineReducers } from "redux";
import allowance from "./token/allowance";
import approve from "./token/approve";
import nav from "./nav";
import stadiumDetails from "./stadiums/details";
import stadiumPurchase from "./stadiums/purchase";
import stadiumsInventory from "./stadiums/inventory";

export default combineReducers({
  STADIUM_INVENTORY: stadiumsInventory,
  STADIUM_DETAILS: stadiumDetails,
  STADIUM_PURCHASE: stadiumPurchase,
  NAV: nav,
  TOKEN_ALLOWANCE: allowance,
  TOKEN_APPROVE: approve,
});
