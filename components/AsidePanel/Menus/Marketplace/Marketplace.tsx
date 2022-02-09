import { useRouter } from "next/router";
import React from "react";
import PanelButton from "../../PanelButton";
import { MarketplaceItems } from "../../Items";
import { Container, Grid } from "semantic-ui-react";

const Marketplace = () => {
  const { pathname } = useRouter();

  return (
    <Grid centered>
      <Grid.Column width={14}>
        {MarketplaceItems.map(({ label, src, name, path }) => (
          <PanelButton
            path={path}
            name={name}
            key={label}
            label={label}
            src={src}
            active={pathname === path}
          />
        ))}
      </Grid.Column>
    </Grid>
  );
};

export default Marketplace;
