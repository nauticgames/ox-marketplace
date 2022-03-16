import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledInventory } from "./styles";
import Tabs from "./Tabs";

const Inventory = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(null);

  const changeTab = (path: string) => {
    if (router.pathname.includes(path)) return;

    router.push(`/account/inventory/${path}`);
  };

  useEffect(() => {
    setCurrentTab(Tabs.find((tab) => router.pathname.includes(tab.name)));
  }, []);

  return (
    <StyledInventory>
      <div className="title">
        <h2>Inventory</h2>
      </div>
      <div className="tabs">
        {Tabs?.map((tab, index) => (
          <div
            key={index}
            onClick={() => changeTab(tab.name)}
            className={`tab ${tab.name} ${
              router.pathname.includes(tab.name) ? "active" : ""
            }`}
            color={tab.color}
          >
            <h3>{tab.label}</h3>
            <img src={tab.img} alt={`${tab.label} Icon`} />
          </div>
        ))}
      </div>
      {currentTab?.component}
    </StyledInventory>
  );
};

export default Inventory;
