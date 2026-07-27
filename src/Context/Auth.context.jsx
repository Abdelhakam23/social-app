import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <AuthContext.Provider value={{ token, setToken,user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
