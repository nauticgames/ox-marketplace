import { combineReducers } from "redux";
import navReducer from "./navReducer";
import stadiumsDetails from "./stadiumsDetails";
import stadiumsReducer from "./stadiumsReducer";

export default combineReducers({
  stadiums: stadiumsReducer,
  stadiumsDetails: stadiumsDetails,
  nav: navReducer,
});
