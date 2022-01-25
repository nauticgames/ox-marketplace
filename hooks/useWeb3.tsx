import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const useWeb3 = () => {
  const [enabled, setEnabled] = useState(false);
  const { isWeb3Enabled, enableWeb3 } = useMoralis();

  useEffect(() => {
    if (!isWeb3Enabled) {
      enableWeb3(); // I'm not sure what is going on here
      setEnabled(true);
    }
  }, [isWeb3Enabled]);

  return { enabled };
};

export default useWeb3;
