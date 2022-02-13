const chainId: any = process.env.NEXT_PUBLIC_CHAIN_ID;
const id: any = process.env.NODE_ENV === "development" ? 97 : 56;

export { chainId, id };
