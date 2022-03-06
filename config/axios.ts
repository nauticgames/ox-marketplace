import axios from "axios";

const httpClient = axios.create({
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_MORALIS_API_KEY,
  },
  baseURL: "https://deep-index.moralis.io/api/v2/",
});

export default httpClient;
