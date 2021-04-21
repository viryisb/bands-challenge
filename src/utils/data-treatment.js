export function sortBands({ bands, filteredBands }, { direction }) {
    const isAscending = direction == "asc";
  
    const sortedBands = [...bands].sort((a, b) => {
      if (a.name > b.name) {
        return isAscending ? 1 : -1;
      }
      if (a.name < b.name) {
        return isAscending ? -1 : 1;
      }
      return 0;
    });
  
    const sortedFilteredBands = [...filteredBands].sort((a, b) => {
      if (a.name > b.name) {
        return isAscending ? 1 : -1;
      }
      if (a.name < b.name) {
        return isAscending ? -1 : 1;
      }
      return 0;
    });
  
    return { sortedBands, sortedFilteredBands };
  }
  