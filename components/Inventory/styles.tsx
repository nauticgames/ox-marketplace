import styled from "styled-components";

const StyledInventory = styled.div`
  width: 100%;
  padding: 3%;
  background-color: #fff;

  .title {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 40px;

    h2 {
      font-weight: 600;
      font-size: 1.8em;
      color: #535353;
    }
  }

  .tabs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .tab {
      padding: 20px 30px;
      margin-right: 20px;
      border-radius: 5px 5px 0 0;
      opacity: 0.3;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 22px;
        height: 22px;
        object-fit: contain;
        margin-left: 15px;
      }

      &:last-of-type {
        margin-right: 0;
      }

      h3 {
        font-weight: 700;
        font-size: 1.4em;
        font-family: "Baloo 2", sans-serif;
      }
    }

    .stadiums {
      h3 {
        color: #f34b4b;
      }
    }

    .skins {
      h3 {
        color: #4666d0;
      }
    }

    .passes {
      h3 {
        color: rgb(72, 204, 92);
      }
    }

    .active {
      background: linear-gradient(
        180deg,
        #f3f3f3 0%,
        rgba(255, 255, 255, 0) 100%
      );

      opacity: 1;
      border-bottom: 5px solid #f34b4b;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 100%;
`;

const EmptyAssetsTitle = styled.h2`
  font-size: 1.8em;
  text-align: center;
  font-weight: 600;
  color: rgb(170, 170, 170);
`;

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
    background: ${(props) => props.titleBackground};

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

export {
  StyledContainer,
  StyledInventory,
  EmptyAssetsTitle,
  StyledStadiumCard,
};
