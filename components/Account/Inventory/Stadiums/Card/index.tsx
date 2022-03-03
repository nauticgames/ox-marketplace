import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { StyledStadiumCard } from "../../styles";
import Data from "../../../../Marketplace/Stadiums/Data";

const Card = ({ stadium, price, usdPrice }) => {
  const { itemId, image, attributes } = stadium;
  const router = useRouter();

  const { stadiumColor } = Data.find(
    (item) => item.name === attributes[0].value
  );

  return (
    <StyledStadiumCard
      stadiumColor={stadiumColor}
      onClick={() => router.push(`/stadiums/${itemId}`)}
    >
      <div className="name">
        <h2>#{itemId}</h2>
      </div>
      <div className="image">
        <Image
          src={image}
          alt={`${attributes[0].value} Stadium #${itemId}`}
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

export default Card;
