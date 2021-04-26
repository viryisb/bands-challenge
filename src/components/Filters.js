import  React, { useEffect, useState } from "react";
import { fetchGenres } from "../utils/data-fetching";

const Filters = ({
  sortDirection,
  setSortDirection,
  selectedGenre,
  setSelectedGenre,
}) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const settingGenres = async () => {
      const dataGenres = await fetchGenres();
      setGenres(dataGenres);
    };

    settingGenres();
  }, [setGenres]);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortDirection(e.target.value);
  };

  return (
    <div className="col-4 mt-5">
      <select
        className="form-select"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="" defaultChecked>
          Genres
        </option>
        {genres &&
          genres.map((genre) => {
            return (
              <option key={genre.code} value={genre.code}>
                {genre.name}
              </option>
            );
          })}
        ))
      </select>

      <div className="col-8 text-white mt-3">
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
            checked={sortDirection === "asc"}
            onChange={handleSortChange}
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
            checked={sortDirection === "desc"}
            onChange={handleSortChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Z-A
          </label>
        </div>
      </div>
    </div>
  );
};
export default Filters;
