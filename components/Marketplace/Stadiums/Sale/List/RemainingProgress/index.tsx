import { useEffect, useState } from "react";
import useTotalRemaining from "../../../../../../hooks/useTotalRemaining";
import SetProgressColor from "../../../../../../utils/SetProgressColor";
import Progress from "../../../../../UI/Progress";

const RemainingProgress = () => {
  const { totalRemaining } = useTotalRemaining();
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!totalRemaining) return;

    const unsubscribe = setColor(
      SetProgressColor(GetRemainingPercent(15000, totalRemaining))
    );

    return () => unsubscribe;
  }, [totalRemaining]);

  if (totalRemaining === null) {
    return <Progress width={100} color={"#39df65"} />;
  }

  const GetRemainingPercent = (total = 15000, left: number) => {
    return ((total - left) / total) * 100;
  };

  return (
    <Progress
      width={GetRemainingPercent(15000, totalRemaining)}
      color={color}
      message="Sold out"
    />
  );
};

export default RemainingProgress;
