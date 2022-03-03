import { IMainLayoutProps } from "../../types/Layout";
import StyledMain from "./styles";

const Main = ({ children }: IMainLayoutProps) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
