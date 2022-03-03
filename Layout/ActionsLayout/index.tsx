import { SectionCard } from "../../components/Marketplace/Stadiums/Details/styles";
import { IActionsLayoutProps } from "../../types/Layout";

const ActionsLayout = ({ children }: IActionsLayoutProps) => {
  return (
    <SectionCard>
      <h2 className="section__title">Actions</h2>
      {children}
    </SectionCard>
  );
};

export default ActionsLayout;
