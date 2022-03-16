import { AsidePanelItem } from "../../types/Components";

export const Marketplace: AsidePanelItem[] = [
  {
    name: "stadiums",
    path: "/stadiums",
    label: "Stadiums",
    src: "/assets/img/stadiums.svg",
  },
  {
    name: "skins",
    path: "/skins",
    label: "Skins",
    src: "/assets/img/skins.svg",
  },
  {
    name: "chests",
    path: "/chests",
    label: "Mystery Chests",
    src: "/assets/img/mystery-chests.svg",
  },
  {
    name: "passes",
    path: "/passes",
    label: "Passes",
    src: "/assets/img/passes.svg",
  },
];

export const Account: AsidePanelItem[] = [
  {
    name: "overview",
    path: "/account/overview",
    label: "Overview",
    src: "/assets/img/overview.svg",
  },
  {
    name: "inventory",
    path: "/account/inventory/stadiums",
    label: "Inventory",
    src: "/assets/img/inventory.svg",
  },
  {
    name: "claim",
    path: "/account/claim",
    label: "Claim Rewards",
    src: "/assets/img/claim.svg",
  },
];
