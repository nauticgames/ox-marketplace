import * as t from "../types/stadiums";
import { Moralis } from "moralis";
import axios from "axios";
import { stadiumContract } from "../../constants/contracts";

export default function getStadiumsAction(account, chain, order) {
  return async (dispatch) => {
    try {
      const { result }: any = await Moralis.Web3API.account.getNFTs({
        chain,
        address: account,
        token_addresses: [stadiumContract],
      });

      const uris = [];
      const stadiums = [];

      result.map((item) => {
        uris.push(item.token_uri);
      });

      for (const uri of uris) {
        try {
          const { data } = await axios.get(uri);

          stadiums.push(data);
        } catch {
          continue;
        }
      }

      const sortedStadiums = sortMetadata(order, stadiums);

      dispatch(getStadiumsSuccess(sortedStadiums));
    } catch {
      dispatch(getStadiumsError());
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

const getStadiumsSuccess = (stadiums) => ({
  type: t.GET_STADIUMS_SUCCESS,
  payload: {
    stadiums,
  },
});

const getStadiumsError = () => ({
  type: t.GET_STADIUMS_ERROR,
});
