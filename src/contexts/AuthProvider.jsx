import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createUser, loginUser, logOut, getUsers } from "../../asyncMock";
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

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserLog(currentUser.uid);
      } else {
        console.log("No hay usuario logueado");
      }

      const getUser = async () => {
        try {
          const res = await getUsers(userLog);
          localStorage.setItem("user", JSON.stringify(res.name));

          setUserData(JSON.parse(localStorage.getItem("user")));
        } catch (error) {
          console.log(error);
        }
      };

      getUser();
    });
  }, []);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
