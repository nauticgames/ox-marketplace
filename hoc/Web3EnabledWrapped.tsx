import { Web3Enabled } from "../context/Web3EnabledContext";
import useWeb3 from "../hooks/useWeb3";

const Web3EnabledWrapped = ({ children }) => {
  const { enabled } = useWeb3();

  return (
    <Web3Enabled.Provider value={enabled}>{children}</Web3Enabled.Provider>
  );
};

export default Web3EnabledWrapped;
