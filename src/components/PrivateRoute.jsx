// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Ce composant "enveloppe" une page : si l'utilisateur n'est pas connecté,
// on le redirige vers /login au lieu d'afficher la page demandée
function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;