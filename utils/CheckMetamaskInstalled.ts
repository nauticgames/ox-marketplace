const CheckMetamaskInstalled = () => {
  const installed =
    typeof window !== "undefined" && typeof window.ethereum !== "undefined";

  return installed;
};

export default CheckMetamaskInstalled;
