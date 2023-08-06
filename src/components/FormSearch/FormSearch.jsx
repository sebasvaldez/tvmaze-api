import "./FormSearch.css";
import { useState, useContext } from "react";
import { getMovies } from "../../../asyncMock";
import { SearchContext } from "../../contexts/SearchProvider";

const FormSearch = () => {
  const [textValue, setTextValue] = useState("");
  const [search, setSearch] = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(textValue).then((data) => {
      setSearch(data);
     
    });
  };

  return (
    <div>
      <form className="mb-4 " onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
          type="text"
          placeholder="Buscar"
          value={textValue}
          className="form-search-input "
        />
      </form>
      
    </div>
  );
};

export default FormSearch;
