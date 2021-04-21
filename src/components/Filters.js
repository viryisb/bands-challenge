import * as React from "react";
import { fetchGenres } from "../utils/data-fetching";

export default Filters = ({
  genres,
  selectedGenre,
  setSelectedGenre,
  setGenres,
  setSortDirection,
}) => {
  React.useEffect(() => {
    const settingGenres = async () => {
      const dataGenres = await fetchGenres(selectedGenre);
      setGenres(dataGenres);
    };

    settingGenres();
  }, [setGenres]);

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const sortGroup = (e) => {
    setSortDirection(e.target.value);
  };

  return (
    <div className="col-4 mt-5">
      <select
        className="form-select"
        value={selectedGenre}
        onChange={handleChange}
      >
        <option value="" defaultChecked>
          Genres
        </option>
        {genres.map((genre) => (
          <option key={genre.code} value={genre.code}>
            {genre.name}
          </option>
        ))}
      </select>

      <div className="col-8 text-white mt-3" onChange={sortGroup}>
        <div className="form-check form-check-inline">
          <label className="form-check-label">Sort</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="asc"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            A-Z
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="desc"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Z-A
          </label>
        </div>
      </div>
    </div>
  );
};