// src/pages/CarDetail.jsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCars } from "../context/CarsContext";
import { useAuth } from "../context/AuthContext";

function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cars } = useCars();

  const car = cars.find((c) => c.id === Number(id));


  // Cas où l'id dans l'URL ne correspond à aucune voiture
  if (!car) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Voiture introuvable</h2>
        <Link to="/cars" className="text-blue-500 hover:underline">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  function handleReserve() {
    if (!user) {
      // Pas connecté → on l'envoie se connecter d'abord
      navigate("/login");
      return;
    }
    // Connecté → on l'envoie vers la page de réservation (à créer ensuite)
    navigate(`/booking/${car.id}`);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link to="/cars" className="text-sm text-blue-500 hover:underline">
        ← Retour au catalogue
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        {/* Image */}
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-80 object-cover rounded-xl shadow-md"
        />

        {/* Infos */}
        <div>
          <div className="flex justify-between items-start mb-3">
            <h1 className="text-3xl font-bold">
              {car.brand} {car.model}
            </h1>
            {car.available ? (
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                Disponible
              </span>
            ) : (
              <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">
                Indisponible
              </span>
            )}
          </div>

          <p className="text-slate-600 mb-6">{car.description}</p>

          {/* Caractéristiques */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xs text-slate-400">Type</p>
              <p className="font-semibold">{car.type}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xs text-slate-400">Transmission</p>
              <p className="font-semibold">{car.transmission}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xs text-slate-400">Places</p>
              <p className="font-semibold">{car.seats}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xs text-slate-400">Carburant</p>
              <p className="font-semibold">{car.fuel}</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md">
            <div>
              <p className="text-3xl font-bold text-blue-600">
                {car.pricePerDay} €
                <span className="text-sm font-normal text-slate-500">
                  /jour
                </span>
              </p>
            </div>

            <button
              onClick={handleReserve}
              disabled={!car.available}
              className={`px-6 py-3 rounded-lg font-semibold ${
                car.available
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {car.available ? "Réserver maintenant" : "Indisponible"}
            </button>
          </div>

          {!user && car.available && (
            <p className="text-xs text-slate-400 mt-2 text-center">
              Vous devrez vous connecter pour finaliser la réservation
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarDetail;