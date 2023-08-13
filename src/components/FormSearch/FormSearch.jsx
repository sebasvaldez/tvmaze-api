import "./FormSearch.css";
import { useState, useContext } from "react";
import { getMovies } from "../../../asyncMock";
import { SearchContext } from "../../contexts/SearchProvider";
import { useNavigate } from "react-router-dom";

const FormSearch = () => {
  const [textValue, setTextValue] = useState("");
  const [search, setSearch] = useContext(SearchContext);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textValue === "") {
      console.log("El usuario no ha ntroducido ningun valor");
      return;
    } else {
      getMovies(textValue).then((data) => {
        setSearch(data);
        
      });
    }
    navigate("/movieslist")
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
          required
        />
      </form>
    </div>
  );
};

export default FormSearch;
