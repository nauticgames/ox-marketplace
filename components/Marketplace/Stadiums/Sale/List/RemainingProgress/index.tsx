import { useEffect, useState } from "react";
import useTotalRemaining from "../../../../../../hooks/useTotalRemaining";
import setProgressColor from "../../../../../../utils/setProgressColor";
import Progress from "../../../../../UI/Progress";

const RemainingProgress = () => {
  const { totalRemaining } = useTotalRemaining();
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!totalRemaining) return;

    const unsubscribe = () => {
      setColor(setProgressColor(handleRemainingPercent(15000, totalRemaining)));
    };

    return unsubscribe();
  }, [totalRemaining]);

  const handleRemainingPercent = (total = 15000, left: number) => {
    return ((total - left) / total) * 100;
  };

  if (totalRemaining === null) {
    return <Progress width={100} color={"#39df65"} />;
  }

  return (
    <Progress
      width={handleRemainingPercent(15000, totalRemaining)}
      color={color}
      message="Sold out"
    />
  );
};

export default RemainingProgress;
