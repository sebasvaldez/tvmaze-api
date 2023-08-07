import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieId } from "../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      
        getMovieId(id).then((data) => setItem(data));
        setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  
  return (

    <ItemDetail item={item} isLoading={isLoading} />

  );
};

export default ItemDetailContainer;