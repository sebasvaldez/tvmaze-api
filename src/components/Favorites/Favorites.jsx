import "./Favorites.css";
import { useState } from "react";


import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthProvider";
import { getAuth } from "firebase/auth";
import { addToFavorites } from "../../../asyncMock";

const Favorites = ({item}) => {
  const {name,id,image} = item;

  //este estado es para cambiar el color del boton
  const [isFavorite, setIsFavorite] = useState(false);

  const { userLog } = useAuth();

  const auth = getAuth();
  const user = auth.currentUser;

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
            : addToFavorites(user.uid, id, name, image).then(
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
