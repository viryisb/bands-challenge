import * as React from "react";
import Filters from "./Filters";
import Bands from "./bands/Bands";

const useFilters = () => {
  const [sortDirection, setSortDirection] = React.useState("asc");
  const [selectedGenre, setSelectedGenre] = React.useState("");

  return {
    sortDirection,
    setSortDirection,
    selectedGenre,
    setSelectedGenre,
  };
};

const Home = () => {
  const filters = useFilters();
  const { selectedGenre, sortDirection } = filters;

  return (
    <>
      <Filters {...filters} />
      <Bands selectedGenre={selectedGenre} sortDirection={sortDirection} />
    </>
  );
};
export default Home;
