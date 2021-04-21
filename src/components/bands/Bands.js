import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { fetchBands, fetchAlbums } from "../../utils/data-fetching";
import { sortBands } from "../../utils/data-treatment";

import Albums from "../albums/Albums";
import Band from "./Band";

const useFilteredOrderedBands = (bands, { selectedGenre, sortDirection }) => {
  const [filteredOrderedBands, setFilteredOrderedBands] = React.useState(bands);

  React.useEffect(() => {
    const newFilteredBands = !selectedGenre
      ? bands
      : bands.filter((band) => band.genreCode === selectedGenre);
    const newFilteredOrderedBands = sortBands(newFilteredBands, {
      sortDirection
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [bands, setBands] = React.useState(initialBands);
  const [filteredOrderedBands] = useFilteredOrderedBands(bands, {
    selectedGenre,
    sortDirection
  });

  React.useEffect(() => {
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
    isLoading
  };
};

const useAlbums = (initialAlbums = []) => {
  const [albums, setAlbums] = React.useState(initialAlbums);

  React.useEffect(() => {
    const settingAlbums = async () => {
      const dataAlbums = await fetchAlbums();
      setAlbums(dataAlbums);
    };

    settingAlbums();
  }, [setAlbums]);

  return [albums, setAlbums];
};

const Bands = ({ selectedGenre, sortDirection }) => {
  const [albums, setAlbums] = useAlbums([]);
  const { bands, isLoading } = useBands([], { selectedGenre, sortDirection });

  if (isLoading)
    return (
      <div className="mt-5">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <div className="container mt-4 band-style">
        {bands.map((b) => (
          <div key={b.id} className="col-3">
            <Band
              key={b.id}
              idBand={b.id}
              bandName={b.name}
              genre={b.genreCode}
              year={b.year}
              country={b.country}
              members={b.members}
            />
          </div>
        ))}
      </div>
      <Router>
        <Switch>
          <Route exact path="/home/:idBand">
            <Albums albums={albums} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default Bands