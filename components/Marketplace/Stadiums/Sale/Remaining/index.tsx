import useStadiumsRemaining from "../../../../../hooks/useStadiumsRemaining";
import { IStadiumsRemainingProps } from "../../../../../types/Components";

const Remaining = ({ type }: IStadiumsRemainingProps) => {
  const { remaining } = useStadiumsRemaining({ type });

  if (remaining === null) {
    return (
      <div className="stadiums__left">
        <h2>-</h2>
      </div>
    );
  }

  if (remaining === 0) {
    return (
      <div className="stadiums__left soldOut">
        <h2>Sold out</h2>
      </div>
    );
  }

  return (
    <div className="stadiums__left">
      <h2>{remaining} Left</h2>
    </div>
  );
};

export default Remaining;
