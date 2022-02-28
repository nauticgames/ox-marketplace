import { useSelector } from "react-redux";
import Marketplace from "./Menus/Marketplace/Marketplace";
import Account from "./Menus/Account/Account";
import AsidePanelLayout from "../../Layout/AsidePanelLayout";
import { IAsidePanelType } from "../../types/Components";

const AsidePanel = ({ type }: IAsidePanelType) => {
  const { showNav } = useSelector((state: any) => state.NAV);

  switch (type) {
    case "marketplace":
      return (
        <AsidePanelLayout showNav={showNav}>
          <Marketplace />
        </AsidePanelLayout>
      );
    case "account":
      return (
        <AsidePanelLayout showNav={showNav}>
          <Account />
        </AsidePanelLayout>
      );
    default:
      break;
  }
};

export default AsidePanel;
