const FormatPrice = (price: string | number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default FormatPrice;
