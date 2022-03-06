const handleCheckWeb3Installed = () => {
  const installed =
    typeof window !== "undefined" && typeof window.ethereum !== "undefined";

  return installed;
};

export default handleCheckWeb3Installed;
