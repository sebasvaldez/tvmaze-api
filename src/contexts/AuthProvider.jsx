import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createUser, loginUser, logOut, getUserById } from "../../asyncMock";
import { db } from "../firebase/firebase.config";


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userLog, setUserLog] = useState(null);
  const [loadingLog,setLoadingLog] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUserLog(currentUser);
      setLoadingLog(false)
    });
  }, [2000]);

  return (
    <AuthContext.Provider
      value={{ userLog, createUser, db, loginUser, logOut, getUserById,loadingLog }}
    >
      {children}
    </AuthContext.Provider>
  );
};
