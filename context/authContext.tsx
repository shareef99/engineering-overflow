import { createContext, useContext, ReactNode, Children } from "react";

interface authContextType {
  login: () => void;
  logout: () => void;
}

const authContextDefaultValues: authContextType = {
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const login = () => {
    console.log("Logged in");
  };
  const logout = () => {};

  const value = {
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
