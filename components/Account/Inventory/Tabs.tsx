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
    color: "#f34b4b",
  },
  {
    name: "skins",
    label: "Skins",
    img: "/assets/img/skins.svg",
    component: <Skins />,
    color: "#4666d0",
  },
  {
    name: "chests",
    label: "Mystery Chests",
    img: "/assets/img/mystery-chests.svg",
    component: <Chests />,
    color: "#db7028",
  },
  {
    name: "passes",
    label: "Passes",
    img: "/assets/img/passes.svg",
    component: <Passes />,
    color: "#48cc5c",
  },
];

export default Tabs;
