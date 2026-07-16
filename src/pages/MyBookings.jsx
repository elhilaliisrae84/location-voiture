// src/pages/MyBookings.jsx
import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

function MyBookings() {
  const { myBookings, cancelBooking } = useBooking();

  if (myBookings.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3">Aucune réservation</h2>
        <p className="text-slate-500 mb-6">
          Vous n'avez pas encore réservé de voiture.
        </p>
        <Link
          to="/cars"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Voir les voitures disponibles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Mes réservations</h1>

      <div className="flex flex-col gap-4">
        {myBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-xl shadow-md p-5 flex items-center gap-5"
          >
            <img
              src={booking.carImage}
              alt={booking.carModel}
              className="w-24 h-24 object-cover rounded-lg"
            />

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">
                  {booking.carBrand} {booking.carModel}
                </h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    booking.status === "confirmée"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <p className="text-sm text-slate-500 mt-1">
                Du {booking.startDate} au {booking.endDate} ·{" "}
                {booking.days} jour(s)
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-blue-600">
                  {booking.total} €
                </span>

                {booking.status === "confirmée" && (
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Annuler
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;