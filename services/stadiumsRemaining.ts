import { StadiumsLeftABI } from "../abis";
import httpClient from "../config/axios";
import { CorrectHexChain } from "../constants/chain";
import { StadiumContract } from "../constants/contracts";

const getStadiumsRemaining = async (type) => {
  try {
    const { data } = await httpClient.post(
      `${StadiumContract}/function?chain=${CorrectHexChain}&function_name=stadiumsLeft`,
      {
        abi: [StadiumsLeftABI],
        params: {
          "": String(type),
        },
      }
    );

    return Number(data);
  } catch (error) {
    return null;
  }
};

export default getStadiumsRemaining;
