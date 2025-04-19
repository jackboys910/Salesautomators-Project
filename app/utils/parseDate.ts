export const parseDate = (dateStr: string) => {
  const [day, month, year, hour, minute] = dateStr.split(/[\s:.]/).map((num) => parseInt(num, 10));
  return new Date(year, month - 1, day, hour, minute).getTime();
};
