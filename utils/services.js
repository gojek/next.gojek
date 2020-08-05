export const listChopper = (list, number) => {
  return number?list.slice(0, number):list;
};
