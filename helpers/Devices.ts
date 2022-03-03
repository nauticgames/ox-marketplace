const size = {
  xs: "320px",
  sm: "768px",
  lg: "1280px",
};

const device = {
  mobile: `(min-width: ${size.xs})`,
  tablet: `(min-width: ${size.sm})`,
  desktop: `(min-width: ${size.lg})`,
};

export { size, device };
