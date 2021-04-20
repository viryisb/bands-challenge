import { BASE_URL } from "../constants";

const fetchAlbums = async () => {
  const getAlbums = await fetch(`${BASE_URL}/albums`);
  const data = await getAlbums.json();
  return data;
};

const fetchBands = async () => {
  const getBands = await fetch(`${BASE_URL}/bands`);
  const data = await getBands.json();
  const dataSorted = [...data].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return dataSorted;
};

const fetchGenres = async () => {
  const getGenres = await fetch(`${BASE_URL}/genre`);
  const data = await getGenres.json();
  return data;
};

export { fetchAlbums, fetchBands, fetchGenres };