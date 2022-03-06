import axios from "axios";

const getTokenPrice = async (address: string) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://api.pancakeswap.info/api/v2/tokens/${address}`
    );

    return Number(data.price);
  } catch {
    return null;
  }
};

export default getTokenPrice;
