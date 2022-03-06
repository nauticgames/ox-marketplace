import axios from "axios";
import { baseURI } from "../constants/baseURI";

const getStadiumMetadata = async (id: string | number) => {
  try {
    const { data } = await axios.get(`${baseURI}${id}.json`);

    return data;
  } catch {
    return;
  }
};

export default getStadiumMetadata;
