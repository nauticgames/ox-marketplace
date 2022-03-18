import httpClient from "../config/axios";
import { CorrectHexChain } from "../constants/chain";

const getTokenIdOwner = async (address: string, id: number | string) => {
  const url = `/nft/${address}/${id}/owners?chain=${CorrectHexChain}&format=decimal`;

  try {
    const result = await httpClient.get(url);

    return result;
  } catch {
    return null;
  }
};

export default getTokenIdOwner;
