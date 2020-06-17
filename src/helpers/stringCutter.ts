export const stringCutter = (text: string, count: number) => {
  if (text?.length > count) {
    return `${text?.slice(0, count)}...`;
  } else {
    return text;
  }
};
