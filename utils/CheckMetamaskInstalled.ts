const CheckMetamaskInstalled = () => {
  let installed: boolean;

  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    installed = true;
  } else {
    installed = false;
  }

  return installed;
};

export default CheckMetamaskInstalled;
