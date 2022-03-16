import { createContext } from "react";
import useWeb3 from "../hooks/useWeb3";

export const Web3Context = createContext({});

export interface IWeb3Context {
  user?: null | string;
  currentChain?: null | string;
  enabled?: null | boolean;
  switchChain?: () => void;
  login?: () => void;
  signOut?: () => void;
}

const Web3ContextWrapped = ({ children }) => {
  const { switchChain, login, user, signOut } = useWeb3();

  return (
    <Web3Context.Provider value={{ switchChain, login, user, signOut }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextWrapped;
