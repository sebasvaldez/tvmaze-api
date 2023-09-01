import "./ItemDetail.css";
import Loader from "../Loader/Loader";
import sinPortada from "./assets/sin-portada.png";
import FormSearch from "../FormSearch/FormSearch";
import Favorites from "../Favorites/Favorites";

const ItemDetail = ({ item, isLoading }) => {
  const { name, genres, summary, url, image, webChannel, language, id } = item;

  return (
    <div>
      <FormSearch />
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <Loader />
        </div>
      ) : (
        <div className="item-detail my-4">
          <div className="item-detail__image">
            <img src={image == null ? sinPortada : image.medium} alt={name} />
          </div>

          <div className="item-datail-info-container">
            <div className="item-detail__info text-white">
              <div className="item-detail__title">
                <h1>{name}</h1>

                <Favorites item={item} />
              </div>
              <h4>{genres == null ? <p>cargando</p> : genres.join(" | ")}</h4>
              <p>
                {summary == null
                  ? "La informacion no se encuentra disponible"
                  : summary}
              </p>
            </div>

            <div className="show-info text-white">
              <h6>
                idioma original: {language == null ? "No disponible" : language}
              </h6>
              <h6>
                Disponible en:{" "}
                {webChannel == null ? "No disponible" : webChannel.name}
              </h6>
              <h6>
                Sitio oficial:{" "}
                {webChannel == null ? "No disponible" : webChannel.officialSite}
              </h6>

              <a className="text-white" href={url}>
                Ver mas información aquí
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
