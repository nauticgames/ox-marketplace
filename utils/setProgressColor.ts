const setProgressColor = (width: number) => {
  let color: string = "#39df65";

  if (width <= 75) {
    color = "#c6df39";
  }

  if (width <= 50) {
    color = "#df7639";
  }

  if (width <= 25) {
    color = "#df3939";
  }

  return color;
};

export default setProgressColor;
