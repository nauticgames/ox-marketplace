import { useRouter } from "next/router";
import { IButtonProps } from "../../../types/Components";
import StyledPanelButton from "./styles";

const PanelButton = ({ path, label, src, active }: IButtonProps) => {
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
