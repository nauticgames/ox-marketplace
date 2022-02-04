import { combineReducers } from "redux";
import purchasesReducer from "./purchasesReducer";

export default combineReducers({
  purchases: purchasesReducer,
});
