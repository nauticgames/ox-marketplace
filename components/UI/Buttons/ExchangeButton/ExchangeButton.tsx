import { useRouter } from "next/router";
import { StyledExchangeButton } from "./styles";

const ExchangeButton = () => {
  const router = useRouter();

  const goToExchange = () => {
    router.push("/exchange");
  };

  return (
    <StyledExchangeButton onClick={goToExchange}>
      Exchange Luny
      <img src="/assets/img/exchange-luny.svg" alt="Exchange luny" />
    </StyledExchangeButton>
  );
};

export default ExchangeButton;
