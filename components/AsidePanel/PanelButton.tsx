import { useRouter } from "next/router";
import { StyledPanelButton } from "./styles";

interface ButtonProps {
  name: string;
  path: string;
  label: string;
  src: string;
  active?: boolean;
}

const PanelButton = ({ path, label, src, active }: ButtonProps) => {
  const router = useRouter();

  const changePage = (path) => {
    if (router.pathname !== path) {
      router.push(path);
    }
  };

  return (
    <StyledPanelButton
      onClick={() => {
        changePage(path);
      }}
      active={active}
    >
      <img src={src} alt={label} /> {label}
    </StyledPanelButton>
  );
};

export default PanelButton;
