import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@nex:token");

    if (token) {
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      const user = JSON.parse(localStorage.getItem("@nex:user"));
      setUser(user);
    }
  }, []);

  async function signIn(data) {
    try {
      const {
        data: { user, token },
      } = await api.post("users/auth", data);

      localStorage.setItem("@nex:token", token);
      localStorage.setItem("@nex:user", JSON.stringify(user));

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      setUser(user);
      return alert("Successfully authenticated!");
    } catch (error) {
      return alert(error.response.data.error);
    }
  }

  async function signUp(data) {
    try {
      await api.post("users", data);

      alert("Successfully registered!", "success");
      return (window.location.href = "/signin");
    } catch (error) {
      return alert(error.response.data.error);
    }
  }

  async function loggout() {
    localStorage.removeItem("@nex:token");
    localStorage.removeItem("@nex:user");
    setUser(null);

    return (window.location.href = "/");
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, loggout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
