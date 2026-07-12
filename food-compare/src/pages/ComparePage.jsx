import { Link } from "react-router-dom";
import { useCompare } from "../context/CompareContext.jsx";
import EmptyState from "../components/EmptyState.jsx";


const fields = [
  { key: "category", label: "Categoria" },
  { key: "calories", label: "Calorie", suffix: " kcal" },
  { key: "proteins", label: "Proteine", suffix: " g" },
  { key: "carbohydrates", label: "Carboidrati", suffix: " g" },
  { key: "fats", label: "Grassi", suffix: " g" },
  { key: "servingSize", label: "Porzione", suffix: " g" },
  { key: "origin", label: "Origine" },
  { key: "fiberRich", label: "Ricco di fibre", boolean: true },
  { key: "benefits", label: "Benefici" }
];

// funzione per gestione booleani/valori vuoti/ siffissi e formattazione valore campo selezionato
function formatValue(food, field) {
  const value = food[field.key];
  if (field.boolean) return value ? "Sì" : "No";
  if (value === undefined || value === null || value === "") return "-";
  return `${value}${field.suffix || ""}`;
}



