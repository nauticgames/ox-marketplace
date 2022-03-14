import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { CorrectHexChain, CorrectChainId } from "../constants/chain";
import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import addNetwork from "../services/addNetwork";
import handleCheckWeb3Installed from "../utils/handleCheckWeb3Installed";

const useWeb3 = () => {
  const [enabled, setEnabled] = useState(false);
  const [currentChain, setCurrentChain] = useState(null);
  const [user, setUser] = useState(null);
  const { logout, authenticate, account, chainId, isAuthenticated } =
    useMoralis();

  useEffect(() => {
    if (!handleCheckWeb3Installed()) return;
    let mounted = true;

    const unsubscribe = () => {
      Moralis.enableWeb3();
      setEnabled(true);

      window.ethereum._metamask.isUnlocked().then((active) => {
        !active && logout();
      });
    };

    if (mounted) unsubscribe();

    return () => {
      mounted = false;
    };
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
    if (!handleCheckWeb3Installed()) return;

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
      logout();
    });

    window.ethereum.on("accountsChanged", () => {
      logout();
    });

    window.ethereum.removeListener("chainChanged", () => null);
    window.ethereum.removeListener("accountsChanged", () => null);
  }, []);

  const switchChain = async () => {
    try {
      await Moralis.switchNetwork(CorrectChainId);
    } catch {
      await addNetwork();
    }
  };

  const login = async () => {
    if (!handleCheckWeb3Installed() || !enabled) return;

    if (!isAuthenticated) {
      const isUnlocked = await window.ethereum._metamask.isUnlocked();

      if (!isUnlocked) {
        return toast.error("You need to unlock metamask");
      }

      const currentChain = Moralis.getChainId();

      if (currentChain !== CorrectHexChain) {
        await switchChain();
      } else {
        try {
          await authenticate({
            provider: "metamask",
            chainId: CorrectChainId,
            signingMessage: "Authenticate",
          });
        } catch {
          toast.error("Authenticate error");
        }
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
