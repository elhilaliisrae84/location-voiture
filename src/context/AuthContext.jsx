// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Au chargement de l'app, on vérifie si un utilisateur est déjà connecté
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function login(email, password) {
    // Simulation : dans un vrai projet, ceci appellerait une API
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem("user", JSON.stringify(found));
      return { success: true };
    }
    return { success: false, message: "Email ou mot de passe incorrect." };
  }

  function register(name, email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = users.some((u) => u.email === email);

    if (alreadyExists) {
      return { success: false, message: "Cet email est déjà utilisé." };
    }

    const newUser = { name, email, password, role: "client" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return { success: true };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser facilement le contexte
export function useAuth() {
  return useContext(AuthContext);
}