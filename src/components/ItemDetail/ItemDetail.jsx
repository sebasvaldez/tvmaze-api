import "./ItemDetail.css";
import Loader from "../Loader/Loader";
import sinPortada from "./assets/sin-portada.png";

const ItemDetail = ({ item, isLoading }) => {
  const { name, genres, summary, url, image } = item;

  console.log(image)
  console.log(genres)


  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">

          <Loader />
        </div>
      ) : (
        <div className="item-detail mt-4">
          <div className="item-detail__image">
            <img src={image == null ? sinPortada : image.medium} alt={name} />
          </div>
          <div className="item-detail__info text-white">
            <h1>{name}</h1>
            <h4>{genres==null? <p>cargando</p> : genres.join(" | ")}</h4>
            <p>{summary== null? "La informacion no se encuentra disponible": summary}</p>
            <a href={url}>Ver mas información aquí</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
