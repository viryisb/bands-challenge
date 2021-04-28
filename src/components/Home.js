import React, { useState } from "react";
import Filters from "./Filters";
import Bands from "./bands/Bands";
import Navbar from "./Navbar";

const useFilters = () => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedGenre, setSelectedGenre] = useState("");

  return {
    sortDirection,
    setSortDirection,
    selectedGenre,
    setSelectedGenre,
  };
};

const Home = ({ logout }) => {
  const filters = useFilters();
  const { selectedGenre, sortDirection } = filters;

  return (
    <>
      <Filters {...filters} />
      <Bands selectedGenre={selectedGenre} sortDirection={sortDirection} />
      <Navbar logout={logout} />
    </>
  );
};
export default Home;
