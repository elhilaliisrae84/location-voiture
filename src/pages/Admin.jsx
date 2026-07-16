// src/pages/Admin.jsx
import { useState } from "react";
import { useCars } from "../context/CarsContext";

const emptyForm = {
  brand: "",
  model: "",
  type: "",
  pricePerDay: "",
  transmission: "Automatique",
  seats: 5,
  fuel: "Essence",
  available: true,
  image: "",
  description: "",
};

function Admin() {
  const { cars, addCar, updateCar, deleteCar } = useCars();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const carData = {
      ...form,
      pricePerDay: Number(form.pricePerDay),
      seats: Number(form.seats),
    };

    if (editingId) {
      updateCar(editingId, carData);
      setEditingId(null);
    } else {
      addCar(carData);
    }

    setForm(emptyForm);
  }

  function handleEdit(car) {
    setForm(car);
    setEditingId(car.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancelEdit() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function handleDelete(id) {
    if (confirm("Supprimer cette voiture définitivement ?")) {
      deleteCar(id);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Espace Admin — Gestion des voitures</h1>

      {/* Formulaire d'ajout / modification */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="font-semibold mb-4">
          {editingId ? "Modifier la voiture" : "Ajouter une nouvelle voiture"}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Marque (ex: Toyota)"
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            name="model"
            value={form.model}
            onChange={handleChange}
            placeholder="Modèle (ex: Corolla)"
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Type (ex: Berline)"
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            name="pricePerDay"
            value={form.pricePerDay}
            onChange={handleChange}
            type="number"
            placeholder="Prix par jour (€)"
            className="border rounded-lg px-3 py-2"
            required
          />
          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          >
            <option value="Automatique">Automatique</option>
            <option value="Manuelle">Manuelle</option>
          </select>
          <input
            name="seats"
            value={form.seats}
            onChange={handleChange}
            type="number"
            placeholder="Nombre de places"
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            name="fuel"
            value={form.fuel}
            onChange={handleChange}
            placeholder="Carburant (ex: Essence)"
            className="border rounded-lg px-3 py-2"
            required
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="URL de l'image"
            className="border rounded-lg px-3 py-2"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border rounded-lg px-3 py-2 md:col-span-2"
            rows={3}
            required
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={handleChange}
              id="available-admin"
            />
            <label htmlFor="available-admin" className="text-sm">
              Disponible à la location
            </label>
          </div>

          <div className="md:col-span-2 flex gap-3 mt-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              {editingId ? "Enregistrer les modifications" : "Ajouter la voiture"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-slate-100 hover:bg-slate-200 px-5 py-2 rounded-lg"
              >
                Annuler
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Liste des voitures existantes */}
      <h2 className="font-semibold mb-4">
        Voitures existantes ({cars.length})
      </h2>

      <div className="flex flex-col gap-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4"
          >
            <img
              src={car.image}
              alt={car.model}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="font-semibold">
                {car.brand} {car.model}
              </p>
              <p className="text-sm text-slate-500">
                {car.pricePerDay} €/jour ·{" "}
                {car.available ? "Disponible" : "Indisponible"}
              </p>
            </div>
            <button
              onClick={() => handleEdit(car)}
              className="text-blue-500 text-sm hover:underline"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(car.id)}
              className="text-red-500 text-sm hover:underline"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;