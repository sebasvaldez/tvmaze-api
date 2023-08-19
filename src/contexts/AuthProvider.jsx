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
  const [userLog, setUserLog] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loged = onAuthStateChanged(auth, (currentUser) => {
      setUserLog(currentUser);
    });
    return loged;
  }, []);

  useEffect(() => {
    if (userLog !== null) {
      const getUser = async () => {
        try {
          const res = await getUsers(userLog.uid);
          setUserData(res);
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
  }, [2000]);

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
        setUserData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
