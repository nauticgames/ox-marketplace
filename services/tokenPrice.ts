import axios from "axios";
import pancakeBaseURI from "../constants/pancakeBaseURI";

const getTokenPrice = async (address: string) => {
  try {
    const {
      data: { data },
    } = await axios.get(`${pancakeBaseURI}${address}`);

    return Number(data.price);
  } catch {
    return null;
  }
};

export default getTokenPrice;
