import Image from "next/image";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import StadiumsPublicSaleData from "../Stadiums/StadiumsPublicSaleData";
import { useEffect, useState } from "react";

const StyledStadiumCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  position: relative;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px 12px 0 rgba(139, 139, 139, 0.2);
    transition: box-shadow 0.2s ease;
  }

  .name {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 90px;
    height: 35px;
    padding-left: 20px;
    border-radius: 0px 0px 5px 0px;
    background: ${(props) => props.nameBackground};

    h2 {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: 600;
      color: #fff;
      font-size: 0.8em;
    }
  }

  .image {
    width: 100%;
    margin: 50px auto 20px auto;
    position: relative;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5e5e5e;
    font-weight: 600;
    font-size: 2em;
    margin-top: 20px;

    span {
      color: #848484;
      font-weight: 500;
      font-size: 0.5em;
      margin-left: 10px;
    }

    svg {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    p {
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const StadiumCard = ({ stadium, price, usdPrice }) => {
  const { metadata } = stadium;

  const router = useRouter();

  const { name, itemId, image } = JSON.parse(metadata);

  const query = name.replace(`Stadium #${itemId}`, "");

  const filterStadium = StadiumsPublicSaleData.find((item) =>
    item.name.includes(query)
  );

  const [formattedPrice, setFormattedPrice] = useState(null);

  useEffect(() => {
    if (price) {
      setFormattedPrice(numberWithCommas((usdPrice * price).toFixed(2)));
    }
  }, []);

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const nameBackground = filterStadium.nameBackground;

  const showDetails = () => {
    router.push({
      pathname: `/stadiums/${itemId}`,
    });
  };

  return (
    <StyledStadiumCard nameBackground={nameBackground} onClick={showDetails}>
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
      {price && (
        <p>
          <Icon icon="icomoon-free:price-tag" color="#c2c2c2" />
          {price} <span>${formattedPrice && formattedPrice}</span>
        </p>
      )}
    </StyledStadiumCard>
  );
};

export default StadiumCard;
