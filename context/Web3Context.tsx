import { createContext } from "react";
import useWeb3 from "../hooks/useWeb3";

export const Web3Context = createContext({});

const Web3ContextWrapped = ({ children }) => {
  const { currentChain, enabled, switchChain, login, user, logout } = useWeb3();

  return (
    <Web3Context.Provider
      value={{ currentChain, enabled, switchChain, login, user, logout }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextWrapped;
