// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useCars } from "../context/CarsContext";
import CarCard from "../components/CarCard";

function Home() {
  const { cars } = useCars();
  const featuredCars = cars.slice(0, 3);

  return (
    <div>
      {/* Bannière d'accueil */}
      <section className="bg-slate-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Louez la voiture qu'il vous faut
        </h1>
        <p className="text-slate-300 mb-6">
          Large choix de véhicules, réservation simple et rapide.
        </p>
        <Link
          to="/cars"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Voir toutes les voitures
        </Link>
      </section>

      {/* Voitures mises en avant */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Voitures populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;