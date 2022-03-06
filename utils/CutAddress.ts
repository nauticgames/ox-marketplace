const cutAddress = (address) => {
  return address.substr(0, 6) + "..." + address.substr(address.length - 10);
};

export default cutAddress;
