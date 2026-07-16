// src/data/cars.js

const carModels = [
  // Berlines
  { brand: "Toyota", model: "Corolla", type: "Berline" },
  { brand: "BMW", model: "Série 3", type: "Berline" },
  { brand: "Mercedes", model: "Classe C", type: "Berline" },
  { brand: "Audi", model: "A4", type: "Berline" },
  { brand: "Skoda", model: "Octavia", type: "Berline" },
  { brand: "Peugeot", model: "508", type: "Berline" },
  { brand: "Volkswagen", model: "Passat", type: "Berline" },
  { brand: "Hyundai", model: "Elantra", type: "Berline" },
  { brand: "Kia", model: "Ceed", type: "Berline" },
  { brand: "Ford", model: "Mondeo", type: "Berline" },

  // Citadines
  { brand: "Renault", model: "Clio", type: "Citadine" },
  { brand: "Fiat", model: "500", type: "Citadine" },
  { brand: "Volkswagen", model: "Polo", type: "Citadine" },
  { brand: "Peugeot", model: "208", type: "Citadine" },
  { brand: "Opel", model: "Corsa", type: "Citadine" },
  { brand: "Citroën", model: "C3", type: "Citadine" },
  { brand: "Toyota", model: "Yaris", type: "Citadine" },
  { brand: "Hyundai", model: "i10", type: "Citadine" },
  { brand: "Kia", model: "Picanto", type: "Citadine" },
  { brand: "Mini", model: "Cooper", type: "Citadine" },

  // SUV
  { brand: "Peugeot", model: "3008", type: "SUV" },
  { brand: "Dacia", model: "Duster", type: "SUV" },
  { brand: "Volkswagen", model: "Tiguan", type: "SUV" },
  { brand: "Nissan", model: "Qashqai", type: "SUV" },
  { brand: "Renault", model: "Kadjar", type: "SUV" },
  { brand: "Hyundai", model: "Tucson", type: "SUV" },
  { brand: "Kia", model: "Sportage", type: "SUV" },
  { brand: "Toyota", model: "RAV4", type: "SUV" },
  { brand: "Ford", model: "Kuga", type: "SUV" },
  { brand: "Skoda", model: "Kodiaq", type: "SUV" },
  { brand: "Porsche", model: "Macan 4S", type: "SUV" },
  { brand: "Polestar", model: "4 Rear Motor", type: "SUV" },
  { brand: "CUPRA", model: "Terramar", type: "SUV" },
  { brand: "CUPRA", model: "Formentor", type: "SUV" },

  // Sportives
  { brand: "Porsche", model: "911", type: "Sportive" },
  { brand: "Audi", model: "TT", type: "Sportive" },
  { brand: "BMW", model: "M4", type: "Sportive" },
  { brand: "Chevrolet", model: "Camaro", type: "Sportive" },
  { brand: "Ford", model: "Mustang", type: "Sportive" },

  // Cabriolets
  { brand: "Audi", model: "A5 Cabriolet", type: "Cabriolet" },
  { brand: "BMW", model: "Série 4 Cabriolet", type: "Cabriolet" },
  { brand: "Mercedes", model: "Classe C Cabriolet", type: "Cabriolet" },
  { brand: "Mini", model: "Cooper Cabriolet", type: "Cabriolet" },
  { brand: "Peugeot", model: "208 CC", type: "Cabriolet" },

  // Compactes
  { brand: "Volkswagen", model: "Golf", type: "Compacte" },
  { brand: "Ford", model: "Focus", type: "Compacte" },
  { brand: "Opel", model: "Astra", type: "Compacte" },
  { brand: "Seat", model: "Leon", type: "Compacte" },
  { brand: "Renault", model: "Mégane", type: "Compacte" },

  // Utilitaires
  { brand: "Renault", model: "Trafic", type: "Utilitaire" },
  { brand: "Peugeot", model: "Partner", type: "Utilitaire" },
  { brand: "Fiat", model: "Ducato", type: "Utilitaire" },
  { brand: "Mercedes", model: "Vito", type: "Utilitaire" },
  { brand: "Citroën", model: "Berlingo", type: "Utilitaire" },
];

const imagesByType = {
  "Berline": [
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600",
  ],
  "Citadine": [
    "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
  ],
  "SUV": [
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600",
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
  ],
  "Sportive": [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600",
  ],
  "Cabriolet": [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600",
  ],
  "Compacte": [
    "https://images.unsplash.com/photo-1471479917193-f00955256257?w=600",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
  ],
  "Utilitaire": [
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600",
    "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600",
  ],
};

const priceRangeByType = {
  "Citadine": [25, 40],
  "Compacte": [35, 55],
  "Berline": [45, 90],
  "SUV": [55, 100],
  "Cabriolet": [90, 150],
  "Sportive": [150, 250],
  "Utilitaire": [40, 70],
};

const cars = carModels.map((car, index) => {
  const [minPrice, maxPrice] = priceRangeByType[car.type];
  const pricePerDay = minPrice + ((index * 7) % (maxPrice - minPrice + 1));

  const images = imagesByType[car.type];
  const image = images[index % images.length];

  const seats = car.type === "Sportive" || car.type === "Cabriolet" ? 4
    : car.type === "Utilitaire" ? 3
    : 5;

  const transmission = index % 3 === 0 ? "Manuelle" : "Automatique";
  const fuel = index % 4 === 0 ? "Essence" : index % 4 === 1 ? "Diesel" : index % 4 === 2 ? "Hybride" : "Électrique";
  const available = index % 9 !== 0;

  return {
    id: index + 1,
    brand: car.brand,
    model: car.model,
    type: car.type,
    pricePerDay,
    transmission,
    seats,
    fuel,
    available,
    image,
    description: `${car.brand} ${car.model} : une ${car.type.toLowerCase()} idéale pour vos déplacements, alliant confort et fiabilité.`,
  };
});

export default cars;