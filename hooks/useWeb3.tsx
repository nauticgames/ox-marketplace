import { useEffect, useState } from "react";
import { Moralis } from "moralis";
import { CorrectChainId } from "../constants/chain";
import { useMoralis } from "react-moralis";
import addNetwork from "../services/addNetwork";

const useWeb3 = () => {
  const [web3Provider, setWeb3Provider] = useState(null);
  const [user, setUser] = useState(null);
  const { logout, authenticate, account, isAuthenticated, web3 } = useMoralis();

  useEffect(() => {
    if (typeof window.ethereum === "undefined") return;
    let mounted = true;

    const unsubscribe = async () => {
      await Moralis.enableWeb3({
        provider: "metamask",
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
    if (typeof window.ethereum === "undefined") return;

    window.ethereum.on("chainChanged", async () => {
      signOut();
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      signOut();
      window.location.reload();
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
    if (!window.ethereum._metamask.isUnlocked()) return;

    if (Number(window.ethereum.networkVersion) !== CorrectChainId) {
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

  const signOut = () => {
    logout();
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
