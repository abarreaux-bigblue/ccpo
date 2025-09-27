import { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: 1,
    title: "Adaptation des bâtiments - école",
    type: "grise",
    description: "Améliore le confort thermique grâce à l'isolation, l'ombrage et la ventilation",
    temperature: "moyenne",
    tempValue: "-2,3°C",
    tempType: "intérieure",
    duration: "de 3 à 6 mois",
    cost: "de 150 à 500 € HT / m²",
    theme: "habitat"
  },
  {
    id: 2,
    title: "Réseaux de froid",
    type: "grise",
    description: "Mutualise la production de froid et valorise les ressources énergétiques locales",
    temperature: "faible",
    tempValue: "Baisse de l'ICU",
    tempType: "",
    duration: "de 6 à 24 mois",
    cost: "de 150 à 200 € HT / MWh",
    theme: "habitat"
  },
  {
    id: 3,
    title: "Désimperméabilisation",
    type: "bleue",
    description: "Favorise le cycle de l'eau et contribue à réduire le phénomène d'ICU",
    temperature: "moyenne",
    tempValue: "-2,5°C",
    tempType: "de l'air",
    duration: "de 6 à 12 mois",
    cost: "de 60 à 150 € HT / m²",
    theme: "eau"
  },
  {
    id: 4,
    title: "Géocooling",
    type: "grise",
    description: "Utilise la fraîcheur du sol pour la diffuser dans les bâtiments",
    temperature: "forte",
    tempValue: "-4°C",
    tempType: "intérieure",
    duration: "de 6 à 12 mois",
    cost: "de 100 à 125 € HT / MWh",
    theme: "habitat"
  },
  {
    id: 5,
    title: "Arbres et végétaux dans la cour d'école",
    type: "verte",
    description: "Fait de l'ombre et rafraîchit l'air par évapotranspiration",
    temperature: "forte",
    tempValue: "-4°C",
    tempType: "de l'air",
    duration: "de 0 à 1 mois",
    cost: "de 30 à 60 € HT / m²",
    theme: "alimentation"
  },
  {
    id: 6,
    title: "Structure d'ombrage en façade",
    type: "grise",
    description: "Limite l'exposition à la chaleur et améliore le confort thermique à l'intérieur",
    temperature: "forte",
    tempValue: "-3,5°C",
    tempType: "intérieure",
    duration: "de 0 à 1 mois",
    cost: "de 250 à 900 € HT / m²",
    theme: "habitat"
  },
  {
    id: 7,
    title: "Façade végétalisée",
    type: "verte",
    description: "Contribue à isoler les bâtiments et permet de lutter contre le phénomène d'ICU",
    temperature: "forte",
    tempValue: "-4°C",
    tempType: "de l'air",
    duration: "de 3 à 6 mois",
    cost: "de 10 à 700 € HT / m²",
    theme: "alimentation"
  },
  {
    id: 8,
    title: "Fontaines et réseaux de fontainerie",
    type: "bleue",
    description: "Offre un accès visuel et auditif à l'eau et une sensation indirecte de fraîcheur",
    temperature: "faible",
    tempValue: "-1°C",
    tempType: "de l'air",
    duration: "de 3 à 6 mois",
    cost: "de 500 à 2 500 € HT / m²",
    theme: "eau"
  },
  {
    id: 9,
    title: "Jardin suspendu sur dalle",
    type: "verte",
    description: "Rafraîchit l'air et végétalise un espace déconnecté du sol",
    temperature: "faible",
    tempValue: "-1°C",
    tempType: "de l'air",
    duration: "de 6 à 12 mois",
    cost: "de 100 à 1 600 € HT / m²",
    theme: "alimentation"
  },
  {
    id: 10,
    title: "Isolation thermique",
    type: "grise",
    description: "Conserve une bonne température à l'intérieur des bâtiments",
    temperature: "moyenne",
    tempValue: "-2,3°C",
    tempType: "intérieure",
    duration: "de 0 à 3 mois",
    cost: "de 120 à 270 € HT / m²",
    theme: "habitat"
  },
  {
    id: 11,
    title: "Jardins potagers, vergers dans la cour d'école",
    type: "verte",
    description: "Rafraîchit l'air par l'évapotranspiration et la création d'ombrage",
    temperature: "faible",
    tempValue: "-0,3°C",
    tempType: "de l'air",
    duration: "de 0 à 1 mois",
    cost: "de 100 à 150 € HT / m²",
    theme: "alimentation"
  },
  {
    id: 12,
    title: "Jeux d'eau",
    type: "bleue",
    description: "Offre une sensation directe de fraîcheur et crée du lien social",
    temperature: "moyenne",
    tempValue: "-1,5°C",
    tempType: "de l'air",
    duration: "de 1 à 3 mois",
    cost: "de 400 à 2 000 € HT / m²",
    theme: "eau"
  }
];
