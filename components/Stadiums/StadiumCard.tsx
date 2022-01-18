import Image from "next/image";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const StyledStadiumCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  position: relative;
  border: 1px solid #e1e1e1;
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
    justify-content: center;
    min-width: 150px;
    height: 35px;
    border-radius: 0px 0px 5px 0px;
    background: ${(props) => props.nameBackground};

    h2 {
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
    font-size: 2.5em;
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
      font-size: 2em;
    }
  }
`;

const StadiumCard = ({ stadium }) => {
  const { img, name, price, nameBackground, path } = stadium;
  const { replace } = useRouter();

  const showDetails = () => {
    replace({
      pathname: `stadiums${path}`,
    });
  };

  return (
    <StyledStadiumCard nameBackground={nameBackground} onClick={showDetails}>
      <div className="name">
        <h2>{name}</h2>
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
        {price} <span>$245.06</span>
      </p>
    </StyledStadiumCard>
  );
};

export default StadiumCard;
