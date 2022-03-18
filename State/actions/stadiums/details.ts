import { StadiumContract } from "../../../constants/contracts";
import getTokenIdOwner from "../../../services/getTokenIdOwner";
import getStadiumMetadata from "../../../services/getStadiumMetadata";

export function GetStadiumsDetailsAction(id: string | number) {
  return async (dispatch) => {
    try {
      const { data } = await getTokenIdOwner(StadiumContract, id);

      const result = data.result[0];
      const owner = result.owner_of;


      const metadata = await getStadiumMetadata(id);
      const stadium = { ...metadata, owner };

      return dispatch(GetDetailsSuccess(stadium));
    } catch {
      return dispatch(GetDetailsError());
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
