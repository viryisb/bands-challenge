import * as React from "react";
// import "./home.css";

import Filters from "./Filters";
import Bands from "./bands/Bands";

const useFilters = () => {
  const [genres, setGenres] = React.useState([]);
  const [sortDirection, setSortDirection] = React.useState("asc");
  const [selectedGenre, setSelectedGenre] = React.useState("");

  return {
    genres,
    setGenres,
    sortDirection,
    setSortDirection,
    selectedGenre,
    setSelectedGenre,
  };
};

const Home = ({ logout, isAuth }) => {
  return (
    <>
      <Filters
        genres={genres}
        setGenres={setGenres}
        setSortDirection={setSortDirection}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <Bands selectedGenre={selectedGenre} sortDirection={sortDirection} />
    </>
  );
};
export default Home;
