import Link from "next/link";
import { IPanelButtonProps } from "../../../types/Components";
import StyledPanelButton from "./styles";

const PanelButton = ({ path, label, src, active }: IPanelButtonProps) => {
  return (
    <Link href={path} passHref>
      <StyledPanelButton active={active}>
        <img src={src} alt={label} /> {label}
      </StyledPanelButton>
    </Link>
  );
};

export default PanelButton;
