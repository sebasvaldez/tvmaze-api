import axios from "axios";

export const getMovies = async (search) => {
  const apiUrl = `http://api.tvmaze.com/search/shows?q=${search}`;
  try {

    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error(`Error al realizar la solicitud ${error}`);
  }
};
