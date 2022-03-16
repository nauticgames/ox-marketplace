export interface IAsidePanelType {
  type: "marketplace" | "account";
}

export interface AsidePanelItem {
  name: string;
  path: string;
  label: string;
  src: string;
}

export interface IPanelButtonProps {
  name: string;
  path: string;
  label: string;
  src: string;
  active?: boolean;
}

export interface IAsidePanelProps {
  showNav: boolean;
}

export interface INavigationProps {
  mt?: number;
  path?: string;
}

export interface IStadiumsRemainingHookProps {
  type: "0" | "1" | "2";
}
export interface IStadiumsRemainingProps {
  type: "0" | "1" | "2";
}

export interface ITab {
  name: string;
  label: string;
  img: string;
  component: any;
  color: string;
}

export interface IStadiumMetadata {
  data: {
    itemId: number;
    external_url: string;
    description: string;
    owner: string;
    image: string;
    name: string;
    attributes: [
      {
        trait_type: string;
        value: string;
      }
    ];
  };
  price?: number;
}

export interface IStadiumCardProps {
  stadiumColor: string;
}

export interface IProgressProps {
  width?: number | string;
  color?: string;
  message?: string;
}

export interface IStadiumCardTitleProps {
  stadiumColor: string;
}

export interface IPurchaseActionsProps {
  isAuthenticated: boolean;
  allowance: {
    wbnb: number;
  };
  error: boolean;
  price: number;
  purchase: () => void;
  approve: () => void;
  fetching: {
    purchase: boolean;
    approve: boolean;
    allowance: boolean;
  };
}
