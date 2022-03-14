import { getTokensByOwner } from "../../../services/getNfts";
import getStadiumMetadata from "../../../services/getStadiumMetadata";
import { IGetStadiumsProps } from "../../../types/State";

export default function GetStadiumsAction({
  account,
  order,
  page,
  balance,
  limitPerPage,
}: IGetStadiumsProps) {
  return async (dispatch) => {
    try {
      dispatch(GetStadiums());

      if (balance === 0) {
        return dispatch(GetStadiumsSuccess([]));
      }

      //initial id to search
      let offset = 0;

      if (balance > limitPerPage) {
        page > 1 && (offset = limitPerPage * (page - 1));
      }

      const ids = SortTokenIds(order, await getTokensByOwner(account));

      const stadiums = [];

      //Fetch stadiums metadatas
      for (let i = offset; i < balance && stadiums.length < limitPerPage; i++) {
        try {
          stadiums.push(await getStadiumMetadata(ids[i]));
        } catch {
          continue;
        }
      }

      dispatch(GetStadiumsSuccess(stadiums));
    } catch {
      dispatch(GetStadiumsError());
    }
  };
}

const SortTokenIds = (order: "asc" | "desc", ids: number[]) => {
  return ids.sort((a, b) => {
    return order === "asc" ? a - b : b - a;
  });
};

const GetStadiums = () => ({
  type: "GET_STADIUMS",
});

const GetStadiumsSuccess = (stadiums) => ({
  type: "GET_STADIUMS_SUCCESS",
  payload: {
    stadiums,
  },
});

const GetStadiumsError = () => ({
  type: "GET_STADIUMS_ERROR",
});
