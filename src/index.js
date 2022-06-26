module.exports = function reverse (n) {
  let result = '';
  n = Math.abs(n) + '';
  for (i = 0; i < n.length; i++) {
    result = n[i] + result;
  }
  return +result;
}

