import { IProgressProps } from "../../../types/Components";
import StyledProgress from "./styles";

const Progress = ({ width, color, message }: IProgressProps) => {
  return (
    <StyledProgress width={width} color={color}>
      {width > 0 && <span></span>}
      {width === 0 && <p className="message">{message}</p>}
    </StyledProgress>
  );
};

export default Progress;
