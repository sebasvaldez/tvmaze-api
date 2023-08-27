import "./Favorites.css";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthProvider";
import { getAuth } from "firebase/auth";
import { addToFavorites } from "../../../asyncMock";

const Favorites = () => {
  const { id } = useParams();

  //este estado es para cambiar el color del boton
  const [isFavorite, setIsFavorite] = useState(false);

  const { userLog } = useAuth();

  const auth = getAuth();
  const user = auth.currentUser;

  // const addToFavorites = async () => {
  //   console.log("Agregado a favoritos");
  //   setIsFavorite(true);

  //   console.log(user.uid);
  //   console.log(id);
  // };

  const removeFromFavorites = async () => {
    console.log("Removido de favoritos");
    setIsFavorite(false);
  };

  return (
    <button
      className={`favorite-button ${isFavorite ? "active" : ""}`}
      onClick={() => {
        userLog
          ? isFavorite
            ? removeFromFavorites()
            : addToFavorites(user.uid, id).then(setIsFavorite(true))
          : Swal.fire("Debes estar logueado para agregar a favoritos");
      }}
    >
      ★
    </button>
  );
};

export default Favorites;
