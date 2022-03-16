import { createContext } from "react";
import useWeb3 from "../hooks/useWeb3";

export const Web3Context = createContext({});

export interface IWeb3Context {
  user?: string;
  switchChain?: () => void;
  login?: () => void;
  signOut?: () => void;
  web3Provider?: any;
}

const Web3ContextWrapped = ({ children }) => {
  const { switchChain, login, user, signOut, web3Provider } = useWeb3();

  return (
    <Web3Context.Provider
      value={{ switchChain, login, user, signOut, web3Provider }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextWrapped;
