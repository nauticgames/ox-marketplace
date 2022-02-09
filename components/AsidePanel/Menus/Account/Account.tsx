import { useRouter } from "next/router";
import React from "react";
import PanelButton from "../../PanelButton";
import { AccountItems } from "../../Items";
import { Grid } from "semantic-ui-react";

const Account = () => {
  const { pathname } = useRouter();

  return (
    <Grid centered>
      <Grid.Column width={14}>
        {AccountItems.map(({ label, src, name, path }) => (
          <PanelButton
            path={path}
            name={name}
            key={label}
            label={label}
            src={src}
            active={pathname === path || pathname.includes(path)}
          />
        ))}
      </Grid.Column>
    </Grid>
  );
};

export default Account;
