function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}

console.log(maxNumber([22, 33, 11, 66]));
