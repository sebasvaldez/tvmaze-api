import "./CardMovies.css";
import { Link } from "react-router-dom";
import sinPortada from "../../assets/sin-portada.png";

const CardMovies = ({ movies }) => {
  return movies.map(({ show }) => {
    return (
      <div className="card-styles" key={show.id}>
        <Link to={`/item/${show.id}`} className="link">
          <img
            src={show.image == null ? sinPortada : show.image.medium}
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
