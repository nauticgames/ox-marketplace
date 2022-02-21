import { Container } from "semantic-ui-react";
import Stadiums from "./Stadiums";
import { StyledInventory } from "./styles";

const Inventory = () => {
  return (
    <Container style={{ padding: "3%", width: "100%" }}>
      <StyledInventory>
        <div className="title">
          <h2>Inventory</h2>
        </div>
        <div className="tabs">
          <div className="tab stadiums active">
            <h3>Stadiums</h3>
            <img src="/assets/img/stadiums.svg" alt="Stadiums Icon" />
          </div>
          <div className="tab chests">
            <h3>Mystery Chests</h3>
            <img
              src="/assets/img/mystery-chests.svg"
              alt="Mystery Chests Icon"
            />
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
    </Container>
  );
};

export default Inventory;
