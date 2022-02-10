import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { StyledStadiumCard } from "./styles/cardStyles";
import StadiumsLeft from "./StadiumsLeft";

const StadiumCard = ({ stadium, usdPrice }) => {
  const { name, path, img, price, nameBackground, type } = stadium;

  const router = useRouter();

  const showDetails = () => {
    router.push({
      pathname: `/stadiums/sale${path}`,
    });
  };

  return (
    <StyledStadiumCard nameBackground={nameBackground} onClick={showDetails}>
      <div className="title">
        <div className="name">
          <h2>{name}</h2>
        </div>
        <StadiumsLeft type={type} />
      </div>
      <div className="image">
        <Image
          src={img}
          alt={name}
          width={1366}
          height={1207}
          layout="responsive"
          objectFit="contain"
          quality={100}
          priority
        />
      </div>
      <p>
        <Icon icon="simple-icons:binance" color="#f3ba2f" />
        {price}
        <span>${usdPrice ? usdPrice : "-"}</span>
      </p>
    </StyledStadiumCard>
  );
};

export default StadiumCard;
