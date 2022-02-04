import { useEffect, useState } from "react";
import { Moralis } from "moralis";

const useWeb3 = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      Moralis.enableWeb3();
      setEnabled(true);
    } else {
      alert("No tienes metamask");
    }
  }, []);

  return enabled;
};

export default useWeb3;
