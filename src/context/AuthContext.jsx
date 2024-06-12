import { createContext, useState } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(!!token);

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthed(true);
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
