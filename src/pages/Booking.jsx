// src/pages/Booking.jsx
import { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCars } from "../context/CarsContext";
import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addBooking } = useBooking();
  const { cars } = useCars();

  const car = cars.find((c) => c.id === Number(id));

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(null);

  // Calcule automatiquement le nombre de jours et le prix total
  const { days, total } = useMemo(() => {
    if (!startDate || !endDate || !car) return { days: 0, total: 0 };

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) return { days: 0, total: 0 };

    return { days: diffDays, total: diffDays * car.pricePerDay };
  }, [startDate, endDate, car]);

  if (!car) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Voiture introuvable</h2>
        <Link to="/cars" className="text-blue-500 hover:underline">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!startDate || !endDate) {
      setError("Merci de sélectionner les deux dates.");
      return;
    }
    if (days <= 0) {
      setError("La date de fin doit être après la date de début.");
      return;
    }

    const booking = addBooking({
      carId: car.id,
      carBrand: car.brand,
      carModel: car.model,
      carImage: car.image,
      startDate,
      endDate,
      days,
      total,
    });

    setConfirmed(booking);
  }

  // Écran de confirmation affiché après une réservation réussie
  if (confirmed) {
    return (
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          ✓
        </div>
        <h2 className="text-2xl font-bold mb-2">Réservation confirmée !</h2>
        <p className="text-slate-500 mb-6">
          Votre {car.brand} {car.model} est réservée du {confirmed.startDate}{" "}
          au {confirmed.endDate} pour {confirmed.total} €.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/my-bookings"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Voir mes réservations
          </Link>
          <Link
            to="/cars"
            className="bg-slate-100 hover:bg-slate-200 px-5 py-2 rounded-lg"
          >
            Continuer à explorer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link to={`/cars/${car.id}`} className="text-sm text-blue-500 hover:underline">
        ← Retour à la voiture
      </Link>

      <h1 className="text-2xl font-bold mt-4 mb-6">
        Réserver : {car.brand} {car.model}
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b">
          <img
            src={car.image}
            alt={car.model}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <p className="font-semibold">{car.brand} {car.model}</p>
            <p className="text-sm text-slate-500">{car.pricePerDay} €/jour</p>
          </div>
        </div>

        {error && (
          <p className="bg-red-100 text-red-700 text-sm p-2 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Date de début
              </label>
              <input
                type="date"
                value={startDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Date de fin
              </label>
              <input
                type="date"
                value={endDate}
                min={startDate || new Date().toISOString().split("T")[0]}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
          </div>

          {days > 0 && (
            <div className="bg-slate-50 rounded-lg p-4 flex justify-between items-center">
              <span className="text-sm text-slate-600">
                {days} jour(s) × {car.pricePerDay} €
              </span>
              <span className="text-xl font-bold text-blue-600">
                {total} €
              </span>
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold mt-2"
          >
            Confirmer la réservation
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;