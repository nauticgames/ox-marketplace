import { useRouter } from "next/router";
import PanelButton from "../../PanelButton";
import { Account as Items } from "../../Items";
import { Grid } from "semantic-ui-react";
import { StyledGridContainer } from "../styles";

const Account = () => {
  const { pathname } = useRouter();

  return (
    <StyledGridContainer>
      <Grid centered>
        <Grid.Column computer={14} mobile={16} tablet={14}>
          {Items.map(({ label, src, name, path }) => (
            <PanelButton
              path={path}
              name={name}
              key={label}
              label={label}
              src={src}
              active={pathname.includes(path)}
            />
          ))}
        </Grid.Column>
      </Grid>
    </StyledGridContainer>
  );
};

export default Account;
