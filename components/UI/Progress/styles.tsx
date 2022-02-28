import styled from "styled-components";
import { IProgressProps } from "../../../types/Components";

const StyledProgress = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  margin: 20px auto;
  position: relative;
  border-radius: 5px;
  background: ${(props: IProgressProps) =>
    props.width === 0 ? "#df3939" : "rgb(58, 58, 58)"};
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  transition: width 0.4s ease;

  span {
    width: ${(props: IProgressProps) => `${props.width}%`};
    transition: width 0.4s ease;
    display: block;
    height: 100%;
    border-radius: 5px;
    background-color: ${(props: IProgressProps) => props.color};
    position: relative;
    overflow: hidden;
    animation: light 2s linear infinite;
  }

  .message {
    width: 100%;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }

  @keyframes light {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default StyledProgress;
