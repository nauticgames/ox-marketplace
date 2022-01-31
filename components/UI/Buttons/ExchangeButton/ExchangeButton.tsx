import { useRouter } from "next/router";
import styled from "styled-components";

const StyledExchangeButton = styled.button`
  color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  font-size: 1em;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-left: 40px;

    &:hover {
      cursor: pointer;
      color: #696969;
      transition: color 0.2s ease;
    }
  }

  img {
    margin-left: 5px;
  }
`;

const ExchangeButton = () => {
  const router = useRouter();

  const goToExchange = () => {
    router.push("/exchange");
  };

  return (
    <StyledExchangeButton onClick={goToExchange}>
      Exchange Luny{" "}
      <img src="/assets/img/exchange-luny.svg" alt="Exchange luny" />
    </StyledExchangeButton>
  );
};

export default ExchangeButton;
