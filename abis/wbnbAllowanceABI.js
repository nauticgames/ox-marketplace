const wbnbAllowanceABI = {
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

export default wbnbAllowanceABI;
