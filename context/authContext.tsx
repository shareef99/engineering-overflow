import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

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
  email: string;
  name: string;
}

export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>();

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(credential, token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setCurrentUser(undefined);
        return;
      }
      const { email } = user;
      // const userRef = doc(db, "uploaders", email);
      // const res = await getDoc(userRef);
      // setCurrentUser({
      //   email: res.data().email,
      //   name: res.data().name,
      // });
      setCurrentUser({ email, name: "Nadeem Shareef" });
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
