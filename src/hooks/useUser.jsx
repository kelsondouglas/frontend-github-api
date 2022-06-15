import { createContext, useContext, useState } from "react";
import api from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUser = async (username) => {
    try {
      setError("");
      setLoading(true);
      setUser(undefined);
      if (username.length === 0) {
        setError("Campo não pode estar vazio.");
        setUser(undefined);
        return;
      }
      const user = await api.get(`users/${username}`);
      const repos = await api.get(`users/${username}/repos`);
      setRepositories(repos.data);
      console.log(repos.data);
      setUser(user.data);
    } catch (err) {
      setUser(undefined);
      setError("Usuário não encontrado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, loading, error, repositories, getUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};
