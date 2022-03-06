import styled from "styled-components";
import { IPanelButtonProps } from "../../../types/Components";

const StyledPanelButton = styled.a`
  width: 100%;
  height: 65px;
  display: flex;
  margin-bottom: 20px;
  position: relative;
  background: none;
  align-items: center;
  justify-content: center;
  color: #535353;
  font-weight: ${(props: IPanelButtonProps) => (props.active ? 600 : 500)};
  font-size: 0.9em;
  opacity: ${(props: IPanelButtonProps) => (props.active ? 1 : 0.4)};

  img,
  svg {
    margin-right: 15px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #535353;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 15px;
    border-left: ${(props: IPanelButtonProps) =>
      props.active ? "4px solid #2F57F7" : "4px solid transparent"};
    background: ${(props: IPanelButtonProps) =>
      props.active
        ? "linear-gradient(90.01deg, #ebebeb 0.01%, rgba(255, 255, 255, 0) 99.99%)"
        : "#fff"};

    &:hover {
      cursor: pointer;
      opacity: ${(props: IPanelButtonProps) => !props.active && 1};
      transition: opacity 0.1s ease-in-out;
    }
  }
`;

export default StyledPanelButton;
