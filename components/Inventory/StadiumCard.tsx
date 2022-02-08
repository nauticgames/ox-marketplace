import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { StyledStadiumCard } from "./styles";
import StadiumsData from "../Stadiums/StadiumsData";

const StadiumCard = ({ stadium, price, usdPrice }) => {
  const { itemId, image, attributes } = stadium;
  const router = useRouter();

  const { titleBackground } = StadiumsData.find(
    (item) => item.name === attributes[0].value
  );

  const showDetails = () => {
    router.push({
      pathname: `/stadiums/${itemId}`,
    });
  };

  return (
    <StyledStadiumCard titleBackground={titleBackground} onClick={showDetails}>
      <div className="name">
        <h2>#{itemId}</h2>
      </div>
      <div className="image">
        <Image
          src={image}
          alt={itemId}
          width={1366}
          height={1207}
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      {price &&
        usdPrice(
          <p>
            <Icon icon="icomoon-free:price-tag" color="#c2c2c2" />
            {price} <span>${(usdPrice * price).toFixed(2)}</span>
          </p>
        )}
    </StyledStadiumCard>
  );
};

export default StadiumCard;
