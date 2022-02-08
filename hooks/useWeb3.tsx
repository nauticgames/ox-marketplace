import { useEffect, useState } from "react";
import { Moralis } from "moralis";

const useWeb3 = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isEnabled = typeof window.ethereum !== "undefined";

    console.log(isEnabled);
    if (isEnabled) {
      setEnabled(true);
    } else {
      alert("No tienes metamask");
    }
  }, []);

  return enabled;
};

export default useWeb3;
