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
  const { pathname, replace } = useRouter();

  const redirect = (path) => {
    if (pathname !== path) {
      replace(path);
    }
  };

  return (
    <StyledPanelButton
      onClick={() => {
        redirect(path);
      }}
      active={active}
    >
      {label} <img src={src} alt={label} />
    </StyledPanelButton>
  );
};

export default PanelButton;
