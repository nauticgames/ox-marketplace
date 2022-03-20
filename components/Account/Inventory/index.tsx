import { useRouter } from "next/router";
import useInventoryTab from "../../../hooks/useInventoryTab";
import { StyledInventory, StyledInventoryTab } from "./styles";
import Tabs from "./Tabs";

const Inventory = () => {
  const router = useRouter();
  const TabComponent = useInventoryTab();

  const handleChangeTab = (path: string) => {
    if (router.pathname.includes(path)) return;
    router.push(`/account/inventory/${path}`);
  };

  return (
    <StyledInventory>
      <div className="title">
        <h2>Inventory</h2>
      </div>
      <div className="tabs">
        {Tabs?.map((tab, index) => (
          <StyledInventoryTab
            key={index}
            onClick={() => handleChangeTab(tab.name)}
            className={`tab ${
              router.pathname.includes(tab.name) ? "active" : ""
            }`}
            color={tab.color}
          >
            <h3>{tab.label}</h3>
            <img src={tab.img} alt={`${tab.label} Icon`} />
          </StyledInventoryTab>
        ))}
      </div>
      {TabComponent || null}
    </StyledInventory>
  );
};

export default Inventory;
