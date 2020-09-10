function formatBytes(value) {
  const megabytes = 0.000001;

  return (value * megabytes).toFixed(1);
}

export default formatBytes;
