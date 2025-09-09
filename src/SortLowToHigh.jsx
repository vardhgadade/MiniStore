export const SortLowToHigh = (data, sortOrder) => {
  if (!data) return [];

  const sorted = [...data];
  if (sortOrder === "asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sorted.sort((a, b) => b.price - a.price);
  }
  return sorted;
};
