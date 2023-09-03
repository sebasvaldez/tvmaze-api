import "./Favorites.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthProvider";
import { addToFavorites, removeToFavorites } from "../../../asyncMock";

const Favorites = ({ item }) => {
  const { name, id, image } = item;

  const localStorage = window.localStorage;
  const idToCheck = id;

  //este estado es para cambiar el color del boton
  const [isFavorite, setIsFavorite] = useState(false);

  const { userLog, favorites } = useAuth();

 
  useEffect(() => {
    if(userLog){

      setIsFavorite(favorites.some((favorite) => favorite.id === idToCheck));
      
    }
  }, [favorites, idToCheck, userLog]);

  
  return (
    <button
      className={`favorite-button ${isFavorite ? "active" : ""}`}
      onClick={() => {
        userLog
          ? isFavorite //si el id de la pelicula esta en el array de favoritos
            ? (
              removeToFavorites(idToCheck).then(setIsFavorite(false))
              )
            : addToFavorites(userLog.uid, id, name, image).then(
                setIsFavorite(true)
              )
          : Swal.fire("Debes estar logueado para agregar a favoritos");
      }}
    >
      ★
    </button>
  );
};

export default Favorites;
