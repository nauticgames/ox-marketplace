import { useRouter } from "next/router";
import React from "react";
import PanelButton from "../../PanelButton";
import { MarketplaceItems } from "../../Items";
import { Grid } from "semantic-ui-react";
import useWindowSize from "../../../../hooks/useWindowsSize";

const Marketplace = () => {
  const { pathname } = useRouter();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <Grid centered>
      <Grid.Column width={isMobile ? 16 : 14}>
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
