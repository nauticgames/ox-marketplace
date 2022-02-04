const useOptions = (optionsParams: any) => {
  const { functionName, contractAddress, abi, chain, params } = optionsParams;

  const options = {
    functionName,
    contractAddress,
    abi: [abi],
    chain: chain,
    params: params,
  };

  return options;
};

export default useOptions;
