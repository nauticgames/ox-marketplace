import { SectionCard } from "../../components/Marketplace/Stadiums/Details/styles";

const ActionsLayout = ({ children }) => {
  return (
    <SectionCard>
      <h2 className="section__title">Actions</h2>
      {children}
    </SectionCard>
  );
};

export default ActionsLayout;
