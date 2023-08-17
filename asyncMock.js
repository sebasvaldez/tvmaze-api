import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { addDoc, collection,doc } from "firebase/firestore";

import{db, auth} from "./src/firebase/firebase.config"


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

    return response.data;
  } catch (error) {
    console.error(`Error al realizar la solicitud ${error}`);
  }
};

//creando usuario con firebase

export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

//Cargando datos de usuario

export const userDate = async (name, email, user ) => {
 
  await addDoc(collection(db, "users"), {
    name: name,
    email: email,
    uid: user.uid,
  });
}
