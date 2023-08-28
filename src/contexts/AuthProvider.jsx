import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import {
  createUser,
  loginUser,
  logOut,
  getUsers,
  getFavorites,
} from "../../asyncMock";
import { db } from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};



export const AuthProvider = ({ children }) => {
  const localStorage = window.localStorage;

  const [userLog, setUserLog] = useState(null);
  const [userData, setUserData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [favorites, setFavorites] = useState([]);



  const getUser = async () => {
    try {
      const res = await getUsers(userLog.uid);
  
      setUserData(res.name);
      setDataLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };







  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserLog(currentUser);
    });

    if (userLog) {
      getUser();
      getFavorites(userLog.uid).then((res)=>{setFavorites(res)})
    }
  }, [userLog]);

  useEffect(() => {
    if (dataLoaded && userData) {
      localStorage.setItem("user", userData);
    }
  }, [dataLoaded, userData]);



  return (
    <AuthContext.Provider
      value={{
        userLog,
        createUser,
        db,
        loginUser,
        logOut,
        getUsers,
        userData,
        favorites
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
