import { Moralis } from "moralis";
import axios from "axios";
import { StadiumContract } from "../../../constants/contracts";
import { baseURI } from "../../../constants/baseURI";
import { IGetStadiumsProps } from "../../../types/State";

export default function GetStadiumsAction({
  account,
  chain,
  order,
  page,
}: IGetStadiumsProps) {
  return async (dispatch) => {
    try {
      dispatch(GetStadiums());

      const limit = 12;

      const offset = page ? limit * (page - 1) : 0;

      const { result }: any = await Moralis.Web3API.account.getNFTs({
        chain,
        address: account,
        token_addresses: [StadiumContract],
        limit,
        offset,
      });

      const ids = [];
      const stadiums = [];

      result.map((item) => {
        ids.push(item.token_id);
      });

      for (const id of ids) {
        try {
          const { data } = await axios.get(`${baseURI}${Number(id)}.json`);

          stadiums.push(data);
        } catch {
          continue;
        }
      }

      const sortedStadiums = sortMetadata(order, stadiums);

      dispatch(GetStadiumsSuccess(sortedStadiums));
    } catch {
      dispatch(GetStadiumsError());
    }
  };
}

const sortMetadata = (order = "asc", items: any) => {
  let sortedItems = [];

  if (order === "asc") {
    sortedItems = items.sort((a, b) => {
      return a.itemId - b.itemId;
    });
  }
  if (order === "desc") {
    sortedItems = items.sort((a, b) => {
      return b.itemId - a.itemId;
    });
  }

  return sortedItems;
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
