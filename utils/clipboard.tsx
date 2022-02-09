const copyToClipboard = (ref): any => {
  const el = document.createElement("textarea");
  el.value = ref.current.value;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export default copyToClipboard;
