import './FormSearch.css'
import { useState } from "react";
import { getMovies } from '../../../asyncMock';


const FormSearch = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }


  return (
    <div >
      <form className="text-white" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Buscar"
          value={search}
          className="form-search-input "
        />
      </form>
      {`texto: ${search}`}
    </div>
  );
};

export default FormSearch;
