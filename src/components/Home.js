import * as React from "react";
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
        genres={useFilters.genres}
        setGenres={useFilters.setGenres}
        setSortDirection={useFilters.setSortDirection}
        selectedGenre={useFilters.selectedGenre}
        setSelectedGenre={useFilters.setSelectedGenre}
      />
      <Bands selectedGenre={useFilters.selectedGenre} sortDirection={useFilters.sortDirection} />
    </>
  );
};
export default Home;
