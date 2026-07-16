// src/data/cars.js
const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    type: "Berline",
    pricePerDay: 45,
    transmission: "Automatique",
    seats: 5,
    fuel: "Essence",
    available: true,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600",
    description: "Une berline fiable, économique et confortable, idéale pour la ville comme pour la route."
  },
  {
    id: 2,
    brand: "BMW",
    model: "Série 3",
    type: "Berline sportive",
    pricePerDay: 90,
    transmission: "Automatique",
    seats: 5,
    fuel: "Diesel",
    available: true,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600",
    description: "Puissance et élégance réunies pour un trajet confortable et dynamique."
  },
  {
    id: 3,
    brand: "Renault",
    model: "Clio",
    type: "Citadine",
    pricePerDay: 30,
    transmission: "Manuelle",
    seats: 5,
    fuel: "Essence",
    available: true,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
    description: "Compacte et économique, parfaite pour se déplacer en ville."
  },
  {
    id: 4,
    brand: "Mercedes",
    model: "Classe C",
    type: "Berline luxe",
    pricePerDay: 110,
    transmission: "Automatique",
    seats: 5,
    fuel: "Diesel",
    available: false,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600",
    description: "Le confort premium pour vos déplacements professionnels ou personnels."
  },
  {
    id: 5,
    brand: "Peugeot",
    model: "3008",
    type: "SUV",
    pricePerDay: 65,
    transmission: "Automatique",
    seats: 5,
    fuel: "Diesel",
    available: true,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600",
    description: "Un SUV spacieux et polyvalent, parfait pour les familles et les longs trajets."
  },
  {
    id: 6,
    brand: "Volkswagen",
    model: "Golf",
    type: "Compacte",
    pricePerDay: 40,
    transmission: "Manuelle",
    seats: 5,
    fuel: "Essence",
    available: true,
    image: "https://images.unsplash.com/photo-1471479917193-f00955256257?w=600",
    description: "La référence des compactes : fiable, agréable à conduire et économique."
  },
  {
    id: 7,
    brand: "Audi",
    model: "A5 Cabriolet",
    type: "Cabriolet",
    pricePerDay: 130,
    transmission: "Automatique",
    seats: 4,
    fuel: "Essence",
    available: true,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600",
    description: "Élégance et sensations de conduite décapotable pour les beaux jours."
  },
  {
    id: 8,
    brand: "Fiat",
    model: "500",
    type: "Citadine",
    pricePerDay: 28,
    transmission: "Manuelle",
    seats: 4,
    fuel: "Essence",
    available: true,
    image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=600",
    description: "Style italien et petit budget, idéale pour circuler facilement en ville."
  }
];

export default cars;