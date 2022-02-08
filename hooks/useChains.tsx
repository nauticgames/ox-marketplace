import { useState, useEffect } from "react";

const useChains = () => {
  const [chain, setChain] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const unsubscribe = () => {
      switch (process.env.NODE_ENV) {
        case "development":
          setChain("0x4");
          setId(4);
          break;
        case "production":
          setChain("0x38");
          setId(56);
          break;
        default:
          break;
      }
    };

    return unsubscribe();
  }, []);

  return { chain, id };
};

export default useChains;
