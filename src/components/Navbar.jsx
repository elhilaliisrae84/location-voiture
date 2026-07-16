// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🚗 SAM Service
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-400">Accueil</Link>
        <Link to="/cars" className="hover:text-blue-400">Voitures</Link>

        {user && (
          <Link to="/my-bookings" className="hover:text-blue-400">
            Mes réservations
          </Link>
        )}

        {user?.role === "admin" && (
          <Link to="/admin" className="hover:text-blue-400">
            Admin
          </Link>
        )}

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-300">
              Bonjour, {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/login" className="hover:text-blue-400">
              Connexion
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
            >
              Inscription
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;