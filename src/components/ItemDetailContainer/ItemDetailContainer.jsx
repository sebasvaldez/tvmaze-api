import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieId } from "../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        getMovieId(id).then((data) => setItem(data));
    }, [id]);

  
  return (
    <div ><ItemDetail {...item}  /></div>
  )
}

export default ItemDetailContainer