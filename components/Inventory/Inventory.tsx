import styled from "styled-components";
import Stadiums from "./Stadiums";

const StyledContainer = styled.div`
  width: 100%;
  padding: 3%;
`;

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

const Inventory = () => {
  return (
    <StyledContainer>
      <StyledInventory>
        <div className="title">
          <h2>Inventory</h2>
        </div>
        <div className="tabs">
          <div className="tab stadiums active">
            <h3>Stadiums</h3>
            <img src="/assets/img/stadiums.svg" alt="Stadiums Icon" />
          </div>
          <div className="tab skins">
            <h3>Skins</h3>
            <img src="/assets/img/skins.svg" alt="Skins Icon" />
          </div>
          <div className="tab passes">
            <h3>Passes</h3>
            <img src="/assets/img/passes.svg" alt="Passes Icon" />
          </div>
        </div>
        <Stadiums />
      </StyledInventory>
    </StyledContainer>
  );
};

export default Inventory;
