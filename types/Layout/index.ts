import { ReactChild, ReactChildren } from "react";

export interface IAsidePanelLayoutProps {
  showNav: boolean;
  children?: ReactChildren | ReactChild;
}

export interface IActionsLayoutProps {
  children?: ReactChildren | ReactChild;
}

export interface IMainLayoutProps {
  children?: any | ReactChildren[] | ReactChild[];
}

export interface IPaginationLayoutProps {
  children?: ReactChild | ReactChildren;
  totalPages: number;
  onChange: (activePage: number) => void;
  page?: any;
}
