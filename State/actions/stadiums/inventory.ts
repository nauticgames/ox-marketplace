import axios from "axios";
import { baseURI } from "../../../constants/baseURI";
import { getTokensByOwner } from "../../../services/getNFTs";
import getStadiumMetadata from "../../../services/getStadiumMetadata";
import { IGetStadiumsProps } from "../../../types/State";

interface IResponse {
  result: [];
  total: number;
  page_size: number;
  page: number;
  cursor: string;
  status: string;
  balance: number;
}

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

      //initial id to search
      let offset = 0;

      if (balance > limitPerPage) {
        page > 1 && (offset = limitPerPage * (page - 1));
      }

      if (!balance) {
        dispatch(GetStadiumsSuccess([]));
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
