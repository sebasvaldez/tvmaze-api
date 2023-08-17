import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import { Separator } from "../src/components/Icons/Icons";
import FormSearch from "../src/components/FormSearch/FormSearch";
import { useAuth } from "../src/contexts/AuthProvider";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const { userLog, getUserById, loadingLog } = useAuth();
const [user, setUser]= useState(null)
const [id, setId]= useState(null)




useEffect(() => {
  if (userLog === null) {
    console.log("Cargando...");
  } else {
  setId(userLog.uid)
  getUserById(id).then((response)=> setUser(response))
  }
  
}, [id]);

console.log(user)
 
  return (
    <div className="mt-5 d-flex align-center flex-column">
      <FormSearch />
      <h3 className="text-white text-start mx-5">Películas</h3>
      <Separator />

      <ItemListContainer />
    </div>
  );
};

export default SearchPage;
