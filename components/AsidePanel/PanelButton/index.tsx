//@ts-ignore
//@ts-nocheck
import { useRouter } from "next/router";
import { IPanelButtonProps } from "../../../types/Components";
import StyledPanelButton from "./styles";

const PanelButton = ({ path, label, src, active }: IPanelButtonProps) => {
  const router = useRouter();

  const SwitchPage = (path: string) => {
    if (router.pathname === path) return;

    router.push(path);
  };

  return (
    <StyledPanelButton
      onClick={() => {
        SwitchPage(path);
      }}
      active={active}
    >
      <img src={src} alt={label} /> {label}
    </StyledPanelButton>
  );
};

export default PanelButton;
