import styled from "styled-components";
import { useRouter } from "next/router";

interface ButtonProps {
  name: string;
  path: string;
  label: string;
  src: string;
  active?: boolean;
}

const StyledPanelButton = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 15px;
  border-left: ${(props) =>
    props.active ? "4px solid #2F57F7" : "4px solid transparent"};
  background: ${(props) =>
    props.active
      ? "linear-gradient(90.01deg, #ebebeb 0.01%, rgba(255, 255, 255, 0) 99.99%)"
      : "#fff"};

  color: #535353;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  font-size: 0.8em;
  opacity: ${(props) => (props.active ? 1 : 0.4)};

  img {
    margin-left: 10px;
    width: 28px;
    height: 28px;
  }
`;

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
