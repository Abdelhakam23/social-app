import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUserState] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) return null;
    try {
      return typeof savedUser === "string" ? JSON.parse(savedUser) : savedUser;
    } catch {
      return savedUser;
    }
  });

  const setUser = (userData) => {
    setUserState(userData);
    if (userData) {
      localStorage.setItem(
        "user",
        typeof userData === "string" ? userData : JSON.stringify(userData)
      );
    } else {
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
