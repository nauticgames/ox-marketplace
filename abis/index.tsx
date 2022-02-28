export const BalanceOfABI = {
  inputs: [
    {
      internalType: "address",
      name: "owner",
      type: "address",
    },
  ],
  name: "balanceOf",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
};

export const WBNBAllowanceABI = {
  constant: true,
  inputs: [
    { name: "", type: "address" },
    { name: "", type: "address" },
  ],
  name: "allowance",
  outputs: [{ name: "", type: "uint256" }],
  payable: false,
  stateMutability: "view",
  type: "function",
};

export const ApproveABI = {
  constant: false,
  inputs: [
    { name: "guy", type: "address" },
    { name: "wad", type: "uint256" },
  ],
  name: "approve",
  outputs: [{ name: "", type: "bool" }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function",
};

export const PurchaseStadiumABI = {
  inputs: [
    {
      internalType: "uint8",
      name: "_type",
      type: "uint8",
    },
  ],
  name: "purchase",
  outputs: [
    {
      internalType: "bool",
      name: "",
      type: "bool",
    },
  ],
  stateMutability: "nonpayable",
  type: "function",
};

export const StadiumsLeftABI = {
  inputs: [
    {
      internalType: "uint8",
      name: "",
      type: "uint8",
    },
  ],
  name: "stadiumsLeft",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
};

export const TotalSupplyABI = {
  inputs: [],
  name: "totalSupply",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  stateMutability: "view",
  type: "function",
};
