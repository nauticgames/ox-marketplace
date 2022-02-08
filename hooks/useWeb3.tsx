import { useEffect, useState } from "react";
import { Moralis } from "moralis";

const useWeb3 = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isEnabled = Moralis.isWeb3Enabled();

    if (isEnabled) {
      setEnabled(true);
    } else {
      return alert("No tienes metamask");
    }
  }, []);

  return enabled;
};

export default useWeb3;
