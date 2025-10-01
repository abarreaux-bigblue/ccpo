import { Solution } from '../types';

export const solutions: Solution[] = [
  {
    title: "Fermer volets et rideaux le jour, aérer la nuit",
    type: "grise",
    description: "Limiter la transmission de la chaleur de la journée",
    temperature: "moyenne",
    tempValue: "-2,3°C",
    tempType: "intérieure",
    duration: "de 3 à 6 mois",
    cost: "de 150 à 500 € HT / m²",
    theme: "température"
  },
  {
    title: "Installer des stores extérieurs",
    type: "grise",
    description: "",
    temperature: "faible",
    tempValue: "Baisse de l'ICU",
    tempType: "",
    duration: "de 6 à 24 mois",
    cost: "de 150 à 200 € HT / MWh",
    theme: "température"
  },
  {
    title: "Créer de l'ombre avec des arbres et des végétaux",
    type: "bleue",
    description: "",
    temperature: "moyenne",
    tempValue: "-2,5°C",
    tempType: "de l'air",
    duration: "de 6 à 12 mois",
    cost: "de 60 à 150 € HT / m²",
    theme: "eau"
  },
];
