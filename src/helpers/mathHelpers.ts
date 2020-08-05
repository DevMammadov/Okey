export const round = (number: number) => {
  let result = Math.round((number + Number.EPSILON) * 100) / 100;
  if (isNaN(result)) {
    return 0;
  }
  return result;
};
