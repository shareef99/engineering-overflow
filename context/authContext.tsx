import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

interface authContextType {
  login: () => void;
  logout: () => void;
  user: User | null;
}

const authContextDefaultValues: authContextType = {
  login: () => {},
  logout: () => {},
  user: null,
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

interface Props {
  children: ReactNode;
}

interface User {
  name: string;
  email: string;
  photoURL: string;
  uid: string;
  creationTime: string;
  lastSignInTime: string;
}

export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        const { displayName, email, photoURL, uid, metadata } = user;
        const { creationTime, lastSignInTime } = metadata;
        const userRef = doc(db, "users", email);
        const currentUser = {
          name: displayName,
          email,
          photoURL,
          uid,
          creationTime,
          lastSignInTime,
        };
        setDoc(userRef, currentUser).then(() => {
          setCurrentUser(currentUser);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        alert("failed to login\nTry again later");
      });
  };

  const logout = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setCurrentUser(undefined);
        return;
      }
      const { email, displayName, photoURL, uid, metadata } = user;
      const { creationTime, lastSignInTime } = metadata;
      setCurrentUser({
        name: displayName,
        email,
        photoURL,
        uid,
        creationTime,
        lastSignInTime,
      });
    });

    return unsubscribe;
  }, []);

  const value = {
    login,
    logout,
    user: currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
