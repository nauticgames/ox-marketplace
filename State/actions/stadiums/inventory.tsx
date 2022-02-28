import { Moralis } from "moralis";
import axios from "axios";
import { StadiumContract } from "../../../constants/contracts";
import { baseURI } from "../../../constants/baseURI";

export default function GetStadiumsAction(account, chain, order) {
  return async (dispatch) => {
    try {
      const { result }: any = await Moralis.Web3API.account.getNFTs({
        chain,
        address: account,
        token_addresses: [StadiumContract],
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

const GetStadiumsSuccess = (stadiums) => ({
  type: "GET_STADIUMS_SUCCESS",
  payload: {
    stadiums,
  },
});

const GetStadiumsError = () => ({
  type: "GET_STADIUMS_ERROR",
});
