import { components } from "moralis/types/generated/web3Api";

export const CorrectHexChain: components["schemas"]["chainList"] =
  process.env.NODE_ENV === "production" ? "0x38" : "0x61";
export const CorrectChainId: number =
  process.env.NODE_ENV === "production" ? 56 : 97;

//0x38-56	Binance Smart Chain Mainnet
//0x61-97	Binance Smart Chain Testnet
