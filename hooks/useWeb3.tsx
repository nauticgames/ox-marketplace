import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { CorrectChainId } from "../constants/chain";
import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import addNetwork from "../services/addNetwork";

const useWeb3 = () => {
  const [web3Provider, setWeb3Provider] = useState(null);
  const [user, setUser] = useState(null);
  const { logout, authenticate, account, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (typeof window.ethereum === "undefined") return;
    let mounted = true;

    const unsubscribe = async () => {
      await Moralis.enableWeb3({
        chainId: CorrectChainId,
        provider: "metamask",
        anyNetwork: false,
      }).then((provider) => setWeb3Provider(provider));

      if (!window.ethereum._metamask.isUnlocked()) logout();
    };

    unsubscribe();

    return () => {
      mounted = false;
    };
  }, [typeof window]);

  useEffect(() => {
    if (!isAuthenticated) {
      setUser(null);
    }

    setUser(account);
  }, [account, isAuthenticated]);

  useEffect(() => {
    if (!web3Provider) return;

    window.ethereum.on("chainChanged", () => {
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
    if (!web3Provider || isAuthenticated) return;

    const metamaskUnlocked = window.ethereum._metamask.isUnlocked();

    if (!metamaskUnlocked) {
      return toast.error("You need to unlock metamask first");
    }

    if (web3Provider.network.chainId !== CorrectChainId) {
      return switchChain();
    }

    try {
      await authenticate({
        signingMessage: "Authenticate",
        chainId: CorrectChainId,
        provider: "metamask",
      });
    } catch {
      return;
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
    switchChain,
    signOut,
    login,
    user,
    web3Provider,
  };
};

export default useWeb3;
