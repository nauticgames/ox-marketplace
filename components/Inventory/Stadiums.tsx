import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import StadiumCard from "../Stadiums/StadiumCard";

const Stadiums = () => {
  return (
    <Grid style={{ justifyContent: "space-between", marginTop: 40 }}>
      {StadiumsArr.map((stadium) => (
        <Grid.Column computer={5} mobile={16} tablet={8} key={stadium.id}>
          <StadiumCard stadium={{ ...stadium, path: `/${stadium.id}` }} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Stadiums;

export const Backgrounds = {
  moon: "#0A1C4A",
  mars: "#A52020",
  chaos: "#C96825",
};

export const StadiumsArr = [
  {
    id: 12,
    nameBackground: Backgrounds.moon,
    type: "moon",
  },
  {
    id: 28,
    nameBackground: Backgrounds.mars,
    type: "mars",
    price: 13.4,
  },
  {
    id: 45,
    nameBackground: Backgrounds.chaos,
    type: "chaos",
  },
  {
    id: 37,
    nameBackground: Backgrounds.chaos,
    type: "chaos",
  },
  {
    id: 90,
    nameBackground: Backgrounds.moon,
    type: "moon",
  },
  {
    id: 95,
    nameBackground: Backgrounds.mars,
    type: "mars",
  },
  {
    id: 16,
    nameBackground: Backgrounds.moon,
    type: "moon",
  },
  {
    id: 17,
    nameBackground: Backgrounds.moon,
    type: "moon",
    price: 98,
  },
  {
    id: 8,
    nameBackground: Backgrounds.moon,
    type: "moon",
  },
  {
    id: 49,
    nameBackground: Backgrounds.mars,
    type: "mars",
  },
];
