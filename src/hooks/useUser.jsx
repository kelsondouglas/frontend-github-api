import { createContext, useContext, useState } from "react";
import api from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUser = async (username) => {
    try {
      setError("");
      setLoading(true);
      const { data } = await api.get(`users/${username}`);
      setUser(data);
    } catch (err) {
      setUser(undefined);
      setError("Usuário não encontrado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, error, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};
