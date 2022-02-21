import { combineReducers } from "redux";
import allowance from "./allowance";
import approve from "./approve";
import navReducer from "./navReducer";
import stadiumsDetails from "./stadiumsDetails";
import stadiumsPurchase from "./stadiumsPurchase";
import stadiumsReducer from "./stadiumsReducer";

export default combineReducers({
  stadiums: stadiumsReducer,
  stadiumsDetails,
  stadiumPurchase: stadiumsPurchase,
  nav: navReducer,
  allowance,
  approve,
});
