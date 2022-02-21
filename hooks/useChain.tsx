import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import toast from "react-hot-toast";
import { chainId } from "../constants/chain";

const useChain = () => {
  const [currentChain] = useState(Moralis.chainId);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.ethereum === "undefined")
      return;

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    window.ethereum.removeListener("accountsChanged", () => null);
  }, []);

  const switchChain = async () => {
    try {
      await Moralis.switchNetwork(chainId);
    } catch {
      toast.error("Invalid network, please switch");
    }
  };

  return { currentChain, switchChain };
};

export default useChain;
