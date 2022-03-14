import { Moralis } from "moralis";
import { CorrectChainId } from "../constants/chain";

const TESTNET_RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const MAINNET_RPC_URL = "https://bsc-dataseed.binance.org/";
const TESTNET_CHAINNAME = "Binance Smart Chain - Testnet";
const MAINNET_CHAINNAME = "Binance Smart Chain - MAINNET";
const TESTNET_EXPLORER = "https://testnet.bscscan.com/";
const MAINNET_EXPLORER = "https://bscscan.com/";

const RPC_URL =
  process.env.NODE_ENV === "development" ? TESTNET_RPC_URL : MAINNET_RPC_URL;

const EXPLORER_URL =
  process.env.NODE_ENV === "development" ? TESTNET_EXPLORER : MAINNET_EXPLORER;

const CHAINNAME =
  process.env.NODE_ENV === "development"
    ? TESTNET_CHAINNAME
    : MAINNET_CHAINNAME;

const addNetwork = async () => {
  try {
    await Moralis.addNetwork(
      CorrectChainId,
      CHAINNAME,
      "Binance Coin",
      "BNB",
      RPC_URL,
      EXPLORER_URL
    );
  } catch {
    return;
  }
};

export default addNetwork;
