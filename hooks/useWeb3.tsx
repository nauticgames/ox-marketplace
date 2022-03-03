import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { CorrectHexChain, CorrectChainId } from "../constants/chain";
import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import CheckMetamaskInstalled from "../utils/CheckMetamaskInstalled";

const useWeb3 = () => {
  const [enabled, setEnabled] = useState(false);
  const [currentChain, setCurrentChain] = useState(null);
  const [user, setUser] = useState(null);
  const { logout, authenticate, account, chainId, isAuthenticated } =
    useMoralis();

  useEffect(() => {
    if (!CheckMetamaskInstalled()) return;

    const unsubscribe = () => {
      Moralis.enableWeb3();
      setEnabled(true);
    };

    return unsubscribe();
  }, [typeof window]);

  useEffect(() => {
    if (!isAuthenticated) {
      return setUser(null);
    }

    setUser(account);
  }, [account, isAuthenticated]);

  useEffect(() => {
    setCurrentChain(chainId);
  }, [chainId]);

  useEffect(() => {
    if (!CheckMetamaskInstalled()) return;

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
      logout();
    });

    window.ethereum.removeListener("chainChanged", () => null);
  }, []);

  useEffect(() => {
    if (!CheckMetamaskInstalled()) return;

    window.ethereum.on("accountsChanged", () => {
      logout();
    });

    window.ethereum.removeListener("accountsChanged", () => null);
  }, []);

  const switchChain = async () => {
    try {
      await Moralis.switchNetwork(CorrectHexChain);
    } catch {
      toast.error("Invalid network, please switch");
    }
  };

  const login = async () => {
    if (!CheckMetamaskInstalled()) return;

    if (!isAuthenticated) {
      try {
        if (Moralis.getChainId() !== CorrectHexChain) {
          await switchChain();
          return;
        }

        await authenticate({
          provider: "metamask",
          chainId: CorrectChainId,
          signingMessage: "Authenticate",
        });
      } catch (error) {
        return;
      }
    }
  };

  return {
    enabled,
    currentChain,
    switchChain,
    logout,
    login,
    user,
  };
};

export default useWeb3;
