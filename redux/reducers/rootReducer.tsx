import { combineReducers } from "redux";
import stadiumsDetails from "./stadiumsDetails";
import stadiumsReducer from "./stadiumsReducer";

export default combineReducers({
  stadiums: stadiumsReducer,
  stadiumsDetails: stadiumsDetails,
});
