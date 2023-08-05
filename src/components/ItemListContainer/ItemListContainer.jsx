import "./ItemListContainer.css";
import { getMovies } from "../../../asyncMock.js";
import CardMovies from "../CardMovies/CardMovies.jsx";
import { useState, useEffect } from "react";




const ItemListContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies("star wars").then((data) => setMovies(data));
  }, []);

  return (
    <div className="container-movies">
      <CardMovies movies={movies} />
    </div>
  );
};

export default ItemListContainer;
