import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { fetchBands, fetchAlbums } from "../../utils/data-fetching";
import { sortBands } from "../../utils/data-treatment";
import Band from "./Band";

const useFilteredOrderedBands = (bands, { selectedGenre, sortDirection }) => {
  const [filteredOrderedBands, setFilteredOrderedBands] = useState(bands);

  useEffect(() => {
    const newFilteredBands = !selectedGenre
      ? bands
      : bands.filter((band) => band.genreCode === selectedGenre);
    const newFilteredOrderedBands = sortBands(newFilteredBands, {
      sortDirection,
    });

    setFilteredOrderedBands(newFilteredOrderedBands);
  }, [bands, selectedGenre, sortDirection]);

  return [filteredOrderedBands, setFilteredOrderedBands];
};

const DEFAULT_USE_BANDS_OPTIONS = { selectedGenre: "", sortDirection: "asc" };
const useBands = (
  initialBands = [],
  { selectedGenre, sortDirection } = DEFAULT_USE_BANDS_OPTIONS
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [bands, setBands] = useState(initialBands);
  const [filteredOrderedBands] = useFilteredOrderedBands(bands, {
    selectedGenre,
    sortDirection,
  });

  useEffect(() => {
    setIsLoading(true);
    const settingBands = async () => {
      const dataBands = await fetchBands();

      setBands(dataBands);
      setIsLoading(false);
    };

    settingBands();
  }, [setBands, setIsLoading]);

  return {
    bands: filteredOrderedBands,
    setBands,
    isLoading,
  };
};

const useAlbums = (initialAlbums = []) => {
  const [albums, setAlbums] = useState(initialAlbums);

  useEffect(() => {
    const settingAlbums = async () => {
      const dataAlbums = await fetchAlbums();
      setAlbums(dataAlbums);
    };

    settingAlbums();
  }, [setAlbums]);

  return [albums, setAlbums];
};

const Bands = ({ selectedGenre, sortDirection }) => {
  const [albums] = useAlbums([]);
  const { bands, isLoading } = useBands([], { selectedGenre, sortDirection });

  if (isLoading)
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );

  return (
    <>
      <Switch>
        <Route
          exact
          path="/home/band/:idBand"
          render={({ match }) => {
            const { idBand } = match.params;
            const band = bands.find((band) => band.id === +idBand);
            const bandAlbums = albums.filter(
              (album) => album.bandId === +idBand
            );

            if (!band) return null;

            return <Band band={band} bandAlbums={bandAlbums} />;
          }}
        />

        <div className="container mt-4 band-style">
          {bands.map((b) => (
            <div key={b.id} className="col-3">
              <Link className="link" to={`/home/band/${b.id}`}>
                {b.name}
              </Link>
            </div>
          ))}
        </div>
      </Switch>
    </>
  );
};
export default Bands;
