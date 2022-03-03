import axios from "axios";
import { StadiumContract } from "../../../constants/contracts";
import { baseURI } from "../../../constants/baseURI";
import { IGetStadiumsProps } from "../../../types/State";
import GetNfts from "../../../services/GetNfts";

interface IResponse {
  result: [];
  total: number;
  page_size: number;
  page: number;
  cursor: string;
  status: string;
}

export default function GetStadiumsAction({
  account,
  order,
  page,
  limitPerPage,
}: IGetStadiumsProps) {
  return async (dispatch) => {
    try {
      dispatch(GetStadiums());

      const { result }: IResponse = await GetNfts(account, StadiumContract);

      if (!result) {
        dispatch(GetStadiumsSuccess(result));
      }

      const ids = [];
      const stadiums = [];

      result.map(({ token_id }) => {
        ids.push(Number(token_id));
      });

      const SortedIds = SortTokenIds(order, ids);

      //initial id to map
      let offset = 1;

      if (ids.length > limitPerPage) {
        if (page > 1) {
          offset = limitPerPage * (page - 1) + 1;
        }
      }

      for (
        let i = offset;
        i <= SortedIds.length && stadiums.length < limitPerPage;
        i++
      ) {
        const index = SortedIds[i - 1];

        try {
          const { data } = await axios.get(`${baseURI}${index}.json`);
          stadiums.push(data);
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
  let sorted = [];

  switch (order) {
    case "asc":
      return (sorted = ids.sort((a, b) => {
        return a - b;
      }));
    case "desc":
      return (sorted = ids.sort((a, b) => {
        return b - a;
      }));
    default:
      return (sorted = ids.sort((a, b) => {
        return a - b;
      }));
  }
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
