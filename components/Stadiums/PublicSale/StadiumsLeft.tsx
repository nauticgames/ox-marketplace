// @ts-nocheck
import { useContext, useEffect, useState } from "react";
import { Moralis } from "moralis";
import { stadiumContract } from "../../../constants/contracts";
import { chainId as chain } from "../../../constants/chain";
import stadiumsLeftABI from "../../../abis/stadiumsLeftABI";
import { Web3Enabled } from "../../../context/Web3EnabledContext";

const StadiumsLeft = ({ type }) => {
  const enabled = useContext(Web3Enabled);
  const [left, setLeft] = useState(null);

  const getStadiumsLeft = async () => {
    try {
      // @ts-ignore:next-line
      const result = await Moralis.Web3API.native.runContractFunction({
        address: stadiumContract,
        function_name: "stadiumsLeft",
        chain,
        abi: [stadiumsLeftABI],
        params: { "": String(type) },
      });

      setLeft(parseInt(result));
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    if (enabled) {
      const unsubscribe = () => {
        getStadiumsLeft();
      };

      return unsubscribe();
    }
  }, [enabled]);

  return (
    <div
      className={`stadiums__left ${
        left !== null && left === 0 ? "soldOut" : ""
      }`}
    >
      {left !== null ? (
        left > 0 ? (
          <h2>{left} Left</h2>
        ) : (
          <h2>Sold out</h2>
        )
      ) : (
        <h2>-</h2>
      )}
    </div>
  );
};

export default StadiumsLeft;
