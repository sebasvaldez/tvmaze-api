import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  addDoc,
  collection,
  where,
  query,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

import { db, auth } from "./src/firebase/firebase.config";

const localStorage = window.localStorage;

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
  await signInWithEmailAndPassword(auth, email, password);
};

//logout de usuario con firebase

export const logOut = async () => {
  await signOut(auth);
  localStorage.removeItem("user");
};

//traer user por id

export const getUsers = async (id) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", id));
    const querySnapshot = await getDocs(q);
    const response = [];

    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });

    return response[0];
  } catch (error) {
    console.error(`Error al realizar la solicitud ${error}`);
  }
};

//cargar favoritos

export const addToFavorites = async (uid, id) => {
  await addDoc(collection(db, "favorites"), {
    id: id,
    uid: uid,
  });
};

//eliminar favoritos
export const removeToFavorites = async () => {
  await deleteDoc(doc(db, "favorites", "favoriteId"));
};

export const getFavorites = async (uid) => {
  try {
    const q = query(collection(db, "favorites"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const response = [];

    querySnapshot.forEach((doc) => {
      response.push(doc.data());
    });

    return response;
  } catch (error) {
    console.error(`Error al realizar la solicitud ${error}`);
  }
};