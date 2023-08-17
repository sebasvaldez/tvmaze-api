import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { addDoc, collection, doc } from "firebase/firestore";

import { db, auth } from "./src/firebase/firebase.config";

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

export const createUser = async (email, password, name) => {
  await createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;

      addDoc(collection(db, "users"), {
        name: name,
        email: email,
        uid: user.uid,
      });
    }
  );
};

// login de usuario con firebase

export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredential.user.uid);
};

//logout de usuario con firebase

export const logOut = async () => {
  await signOut(auth);
};