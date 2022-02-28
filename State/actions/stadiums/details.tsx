import { Moralis } from "moralis";
import axios from "axios";
import { StadiumContract } from "../../../constants/contracts";
import { baseURI } from "../../../constants/baseURI";

export function GetStadiumsDetailsAction(chain, id) {
  return async (dispatch) => {
    try {
      const { result }: any = await Moralis.Web3API.token.getTokenIdOwners({
        address: StadiumContract,
        token_id: id,
        chain,
      });

      const owner = result[0].owner_of;
      const tokenId = result[0].token_id;
      const response = await axios.get(`${baseURI}${Number(tokenId)}.json`);

      const data = { ...response.data, owner };

      dispatch(GetDetailsSuccess(data));
    } catch (error) {
      dispatch(GetDetailsError());
    }
  };
}

const GetDetailsSuccess = (payload) => ({
  type: "GET_STADIUMS_DETAILS_SUCCESS",
  payload,
});

const GetDetailsError = () => ({
  type: "GET_STADIUMS_DETAILS_ERROR",
});

export function ClearStadiumDataStateAction() {
  return async (dispatch) => {
    dispatch(ClearState());
  };
}

const ClearState = () => ({
  type: "CLEAR_STADIUM_DETAILS",
});
