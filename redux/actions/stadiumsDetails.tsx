import * as t from "../types/stadiumsDetails";
import { Moralis } from "moralis";
import axios from "axios";
import { stadiumContract } from "../../constants/contracts";

export function getStadiumsDetailsAction(chain, id) {
  return async (dispatch) => {
    try {
      const { result }: any = await Moralis.Web3API.token.getTokenIdOwners({
        address: stadiumContract,
        token_id: id,
        chain,
      });

      const owner = result[0].owner_of;
      const token_uri = result[0].token_uri;
      const response = await axios.get(token_uri);

      const data = { ...response.data, owner };

      dispatch(getStadiumDetailsSuccess(data));
    } catch (error) {
      dispatch(getStadiumDetailsError());
    }
  };
}

const getStadiumDetailsSuccess = (payload) => ({
  type: t.GET_STADIUMS_DETAILS_SUCCESS,
  payload,
});

const getStadiumDetailsError = () => ({
  type: t.GET_STADIUMS_DETAILS_ERROR,
});

export function clearStadiumDetailsStateAction() {
  return async (dispatch) => {
    dispatch(clearState());
  };
}

const clearState = () => ({
  type: t.CLEAR_STADIUM_DETAILS,
});
