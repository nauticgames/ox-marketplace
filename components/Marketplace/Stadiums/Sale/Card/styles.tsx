import styled from "styled-components";
import { IStadiumCardTitleProps } from "../../../../../types/Components";

const StyledTitle = styled.div`
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .label {
    padding: 0 20px;
    border-bottom-right-radius: 3px;
    height: 100%;
    font-weight: 600;
    color: #fff;
    background: ${(props: IStadiumCardTitleProps) => props.stadiumColor};
    font-size: 0.8em;
    display: flex;
    align-items: center;
  }

  .stadiums__left {
    height: 100%;
    padding: 0 20px;
    border-bottom-right-radius: 3px;
    background-color: #2b2b2b;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: 600;
      color: #fff;
      font-size: 0.8em;
    }
  }

  .soldOut {
    background-color: #a00707;
  }

  @media (min-width: 510px) {
    .stadiums__left {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 3px;
    }
  }
`;

const StyledPrice = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  .price__token-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .price__wbnb {
    font-size: 2.2em;
    font-weight: 600;
    margin: 0 10px 0 0 !important;
    color: #2b2b2b;
  }

  .price__usd {
    font-size: 1.1em;
    font-weight: 500;
    color: #5e5e5e;
  }
`;

export { StyledTitle, StyledPrice };
