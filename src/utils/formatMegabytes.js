function formatMegabytes(value) {
  const gigabytes = 1000;

  return (value / gigabytes).toFixed(1);
}

export default formatMegabytes;
