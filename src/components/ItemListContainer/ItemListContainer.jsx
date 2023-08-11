import "./ItemListContainer.css";
import { getMovies } from "../../../asyncMock.js";
import CardMovies from "../CardMovies/CardMovies.jsx";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../contexts/SearchProvider";

const ItemListContainer = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useContext(SearchContext);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div className="container-movies">
      {search.length > 0 ? (
        <CardMovies movies={search} />
      ) : (
        <CardMovies movies={movies} />
      )}
    </div>
  );
};

export default ItemListContainer;
