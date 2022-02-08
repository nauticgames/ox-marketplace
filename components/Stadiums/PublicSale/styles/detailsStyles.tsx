import styled from "styled-components";

const BuyButton = styled.button`
  min-width: 230px;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 100%;
  height: 45px;
  background-color: #62d250;
  box-shadow: 4px 4px 12px rgba(83, 83, 83, 0.15);
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 10px;
    width: 28px;
    height: 28px;
  }

  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
      background: #7eeb6d;
      transition: background-color 0.2s ease;
    }
  }
`;

const DisabledButton = styled.div`
  width: 100%;
  height: 45px;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: #ebebeb;
  color: #868686;
  border: 1px solid #cacaca;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export { BuyButton, DisabledButton };
