import styled from "styled-components";
import { IAsidePanelProps } from "../../types/Components";

const StyledAsidePanel = styled.aside`
  top: 0;
  position: fixed;
  z-index: 8000;
  min-width: 240px;
  width: 240px;
  background-color: #fff;
  height: 100vh;
  padding: 30px 0 20px 0;
  transition: min-width 0.2s ease, width 0.2s ease;
  right: 0;
  overflow-x: hidden;
  transition: transform 0.4s ease;
  transform: ${(props: IAsidePanelProps) =>
    props.showNav ? "translateX(0)" : "translateX(100%)"};

  @media screen and (min-width: 768px) {
    top: 80px;
    left: 0;
    overflow-y: auto;
    opacity: 1;
    transform: translateX(0);
  }
`;

export default StyledAsidePanel;
