// src/pages/Cars.jsx
import { useState, useMemo } from "react";
import { useCars } from "../context/CarsContext";

import CarCard from "../components/CarCard";

function Cars() {
  const { cars } = useCars();
  // Un state = une donnée que React "surveille" pour réafficher la page si elle change
  const [typeFilter, setTypeFilter] = useState("Tous");
  const [transmissionFilter, setTransmissionFilter] = useState("Toutes");
  const [maxPrice, setMaxPrice] = useState(150);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // On récupère la liste des types uniques présents dans les données
  // (ex: "Berline", "Citadine"...) pour construire le menu déroulant automatiquement
  const types = ["Tous", ...new Set(cars.map((car) => car.type))];

  // useMemo recalcule la liste filtrée seulement quand un filtre change
  // (évite de refaire le calcul à chaque petit re-rendu inutile)
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchType = typeFilter === "Tous" || car.type === typeFilter;
      const matchTransmission =
        transmissionFilter === "Toutes" ||
        car.transmission === transmissionFilter;
      const matchPrice = car.pricePerDay <= maxPrice;
      const matchAvailability = !onlyAvailable || car.available;

      // La voiture doit respecter TOUS les filtres en même temps
      return matchType && matchTransmission && matchPrice && matchAvailability;
    });
  }, [typeFilter, transmissionFilter, maxPrice, onlyAvailable]);

  function resetFilters() {
    setTypeFilter("Tous");
    setTransmissionFilter("Toutes");
    setMaxPrice(150);
    setOnlyAvailable(false);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Toutes nos voitures</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Barre de filtres à gauche */}
        <aside className="w-full md:w-64 bg-white p-5 rounded-xl shadow-md h-fit">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Filtres</h2>
            <button
              onClick={resetFilters}
              className="text-xs text-blue-500 hover:underline"
            >
              Réinitialiser
            </button>
          </div>

          {/* Filtre type */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Type de voiture
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Filtre transmission */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Transmission
            </label>
            <select
              value={transmissionFilter}
              onChange={(e) => setTransmissionFilter(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option value="Toutes">Toutes</option>
              <option value="Automatique">Automatique</option>
              <option value="Manuelle">Manuelle</option>
            </select>
          </div>

          {/* Filtre prix */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Prix max : {maxPrice} €/jour
            </label>
            <input
              type="range"
              min="20"
              max="150"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Filtre disponibilité */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="available"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
            />
            <label htmlFor="available" className="text-sm">
              Disponibles uniquement
            </label>
          </div>
        </aside>

        {/* Liste des voitures filtrées à droite */}
        <div className="flex-1">
          <p className="text-sm text-slate-500 mb-4">
            {filteredCars.length} voiture(s) trouvée(s)
          </p>

          {filteredCars.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-10 text-center text-slate-500">
              Aucune voiture ne correspond à ces critères.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cars;