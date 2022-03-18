import { useEffect, useState } from "react";
import { StadiumContract } from "../../../../../../constants/contracts";
import useTotalSupply from "../../../../../../hooks/useTotalSupply";
import handleRemainingPercent from "../../../../../../utils/handleRemainingPercent";
import Progress from "../../../../../UI/Progress";
import handleProgressBarColors from "./handleProgressBarColors";

const RemainingProgress = () => {
  const { totalSupply } = useTotalSupply({ contract: StadiumContract });
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!totalSupply) return;
    let mounted = true;

    const unsubscribe = () => {
      if (mounted)
        setColor(
          handleProgressBarColors(handleRemainingPercent(15000, totalSupply))
        );
    };

    unsubscribe();

    return () => {
      mounted = false;
    };
  }, [totalSupply]);

  if (totalSupply === null) {
    return <Progress width={100} color={"#39df65"} />;
  }

  return (
    <Progress
      width={handleRemainingPercent(15000, totalSupply)}
      color={color}
      message="Sold out"
    />
  );
};

export default RemainingProgress;
