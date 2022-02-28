import { ITab } from "../../../types/Components";
import Chests from "./Chests";
import Passes from "./Passes";
import Skins from "./Skins";
import Stadiums from "./Stadiums";

const Tabs: ITab[] = [
  {
    name: "stadiums",
    label: "Stadiums",
    img: "/assets/img/stadiums.svg",
    component: <Stadiums />,
  },
  {
    name: "skins",
    label: "Skins",
    img: "/assets/img/skins.svg",
    component: <Skins />,
  },
  {
    name: "chests",
    label: "Mystery Chests",
    img: "/assets/img/mystery-chests.svg",
    component: <Chests />,
  },
  {
    name: "passes",
    label: "Passes",
    img: "/assets/img/passes.svg",
    component: <Passes />,
  },
];

export default Tabs;
