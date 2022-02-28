import styled from "styled-components";
import { INavigationProps } from "../../types/Components";

const StyledNavigation = styled.div`
  margin-top: ${(props: INavigationProps) =>
    props.mt ? `${props.mt}px` : "initial"};
  padding: 0 6%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    padding: 0 3%;
    margin-bottom: 0;
  }
`;

export default StyledNavigation;
