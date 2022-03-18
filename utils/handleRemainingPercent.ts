const handleRemainingPercent = (total, left: number) => {
  return ((total - left) / total) * 100;
};

export default handleRemainingPercent;
