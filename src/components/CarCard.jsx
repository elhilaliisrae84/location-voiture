// src/components/CarCard.jsx
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">
            {car.brand} {car.model}
          </h3>
          {car.available ? (
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Disponible
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
              Indisponible
            </span>
          )}
        </div>

        <p className="text-sm text-slate-500 mb-3">
          {car.type} · {car.transmission} · {car.seats} places
        </p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">
            {car.pricePerDay} €<span className="text-sm font-normal">/jour</span>
          </span>

          <Link
            to={`/cars/${car.id}`}
            className="bg-slate-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-slate-700"
          >
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;