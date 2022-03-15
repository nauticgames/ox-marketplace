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
  const { logout, authenticate, account, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (!handleCheckWeb3Installed()) return;
    let mounted = true;

    const unsubscribe = async () => {
      await Moralis.enableWeb3();
      setEnabled(true);

      const isUnlocked = window.ethereum._metamask.isUnlocked();

      if (!isUnlocked) logout();
    };

    unsubscribe();

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
    if (!handleCheckWeb3Installed()) return;

    setCurrentChain(window.ethereum.chainId);
  }, [enabled]);

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

  const signOut = async () => {
    try {
      await logout();
    } catch {
      return;
    }
  };

  return {
    enabled,
    currentChain,
    switchChain,
    signOut,
    login,
    user,
  };
};

export default useWeb3;
