// src/context/CarsContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import initialCars from "../data/cars";

const CarsContext = createContext();

export function CarsProvider({ children }) {
  const [cars, setCars] = useState([]);

  // Au premier chargement : si localStorage est vide, on "sème" avec les données fictives
  useEffect(() => {
    const saved = localStorage.getItem("cars");
    if (saved) {
      setCars(JSON.parse(saved));
    } else {
      setCars(initialCars);
      localStorage.setItem("cars", JSON.stringify(initialCars));
    }
  }, []);

  function saveCars(updatedCars) {
    setCars(updatedCars);
    localStorage.setItem("cars", JSON.stringify(updatedCars));
  }

  function addCar(car) {
    const newCar = { ...car, id: Date.now() };
    saveCars([...cars, newCar]);
  }

  function updateCar(id, updatedFields) {
    const updated = cars.map((c) =>
      c.id === id ? { ...c, ...updatedFields } : c
    );
    saveCars(updated);
  }

  function deleteCar(id) {
    const updated = cars.filter((c) => c.id !== id);
    saveCars(updated);
  }

  return (
    <CarsContext.Provider value={{ cars, addCar, updateCar, deleteCar }}>
      {children}
    </CarsContext.Provider>
  );
}

export function useCars() {
  return useContext(CarsContext);
}