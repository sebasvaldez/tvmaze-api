import "./CardMovies.css";
import { Link } from "react-router-dom";

const CardMovies = ({ movies }) => {
 

  return movies.map(({ score, show }) => {
    return (
      <div className="card-styles" key={show.id}>
        <Link to={`/item/${show.id}`} className="link">
          <img
            src={show.image.original}
            alt="imagen de portada de cada pelicula"
          />

          <div className="card-title">
            <h6>{show.name}</h6>
          </div>
        </Link>
      </div>
    );
  });
};

export default CardMovies;
