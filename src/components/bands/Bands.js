import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { fetchBands, fetchAlbums } from "../../utils/data-fetching";
import { sortBands } from "../../utils/data-treatment";

import Albums from "../albums/Albums";
import Band from "./Band";

const Bands = ({ selectedGenre, sortDirection }) => {
  const [bands, setBands] = React.useState([]);
  const [filteredBands, setBandFiltered] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const settingBands = async () => {
      const dataBands = await fetchBands(selectedGenre);

      setBands(dataBands);
      setIsLoading(false);
    };

    settingBands();
  }, [setBands]);

  React.useEffect(() => {
    const settingAlbums = async () => {
      const dataAlbums = await fetchAlbums(selectedGenre);
      setAlbums(dataAlbums);
    };

    settingAlbums();
  }, [setAlbums]);

  React.useEffect(() => {
    const filteredBands = bands.filter(
      (band) => band.genreCode === selectedGenre
    );
    setBandFiltered(filteredBands);
  }, [selectedGenre]);

  React.useEffect(() => {
    const { sortedBands, sortedFilteredBands } = sortBands(
      { bands, filteredBands },
      { direction: sortDirection }
    );

    setBands(sortedBands);
    setBandFiltered(sortedFilteredBands);
  }, [sortDirection]);

  if (isLoading)
    return (
      <div className="mt-5">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <div className="container mt-4 band-style">
        {!selectedGenre
          ? bands.map((b) => (
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
            ))
          : filteredBands.map((f) => (
              <div key={f.id} className="band-style col-4">
                <Band
                  key={f.id}
                  idBand={f.id}
                  bandName={f.name}
                  genre={f.genreCode}
                  year={f.year}
                  country={f.country}
                  members={f.members}
                  albums={albums}
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
export default Bands;
