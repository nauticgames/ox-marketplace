import Image from "next/image";
import { useRouter } from "next/router";
import { StyledStadiumCard } from "../../styles";
import Data from "../../../../Marketplace/Stadiums/Data";

const Card = ({ stadium }) => {
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
    </StyledStadiumCard>
  );
};

export default Card;
