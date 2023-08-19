import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import { Separator } from "../src/components/Icons/Icons";
import FormSearch from "../src/components/FormSearch/FormSearch";
import { useAuth } from "../src/contexts/AuthProvider";
import { useState, useEffect } from "react";
import{ThreeDots}from "react-loader-spinner"

const SearchPage = () => {
  const {userData, userLog} = useAuth();





console.log(userData)



  return (
    <div className="mt-5 d-flex align-center flex-column">
      <FormSearch />
        {userLog ?(userData?.name) : (<ThreeDots/>)}
      <h3 className="text-white text-start mx-5">Películas</h3>
      <Separator />

      <ItemListContainer />
    </div>
    
  );
};

export default SearchPage;
