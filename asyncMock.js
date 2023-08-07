import axios from "axios";

//busqueda por defecto Star Wars
export const getMovies = async (search = "Star Wars") => {
  const apiUrl = `http://api.tvmaze.com/search/shows?q=${search}`;
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error(`Error al realizar la solicitud ${error}`);
  }
};



//busqueda por id

export const getMovieId = async (id) => {
  const apiUrl = ` https://api.tvmaze.com/shows/${id}`;
  try {
    const response = await axios.get(apiUrl);

    return  response.data;
  } catch (error) {
    console.error(`Error al realizar la solicitud ${error}`);
  }
};
