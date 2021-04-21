export function sortBands(bands, { sortDirection }) {
  const isAscending = sortDirection === "asc";
  const sort = (a, b) => {
    if (a.name > b.name) {
      return isAscending ? 1 : -1;
    }
    if (a.name < b.name) {
      return isAscending ? -1 : 1;
    }
    return 0;
  };

  const sortedBands = [...bands].sort(sort);

  return sortedBands;
}
