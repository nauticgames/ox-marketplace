import { StadiumsLeftABI } from "../abis";
import httpClient from "../config/axios";
import { CorrectHexChain } from "../constants/chain";
import { StadiumContract } from "../constants/contracts";

const getStadiumsRemaining = async (type) => {
  const url = `${StadiumContract}/function?chain=${CorrectHexChain}&function_name=stadiumsLeft`;

  try {
    const { data } = await httpClient.post(url, {
      abi: [StadiumsLeftABI],
      params: {
        "": String(type),
      },
    });

    return Number(data);
  } catch {
    return null;
  }
};

export default getStadiumsRemaining;
