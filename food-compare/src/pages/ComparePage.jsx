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



function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
        <div>
          <h1 className="h2 mb-1">Comparatore</h1>
          <p className="text-muted mb-0">Seleziona almeno 2 alimenti per confrontarli affiancati.</p>
        </div>

        
        {compareItems.length > 0 && (
          <button className="btn btn-outline-danger" onClick={clearCompare}>
            Svuota comparatore
          </button>
        )}
      </div>

      {compareItems.length === 0 && (
        <EmptyState
          title="Nessun alimento selezionato"
          text="Vai alla lista e aggiungi gli alimenti che vuoi confrontare."
        >
          <Link className="btn btn-success" to="/">Vai agli alimenti</Link>
        </EmptyState>
      )}

      {compareItems.length === 1 && (
        <div className="alert alert-warning">
          Hai selezionato solo <strong>{compareItems[0].title}</strong>. Aggiungi almeno un altro alimento per completare il confronto.
        </div>
      )}

      {compareItems.length > 0 && (
        <div className="table-responsive bg-white rounded-4 shadow-sm">
          <table className="table table-hover align-middle mb-0 table-compare">
            <thead className="table-success">
              <tr>
                <th>Caratteristica</th>
                {compareItems.map((food) => (
                  <th key={food.id}>
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <span>{food.title}</span>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCompare(food.id)}
                        aria-label={`Rimuovi ${food.title}`}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fields.map((field) => (
                <tr key={field.key}>
                  <th>{field.label}</th>
                  {compareItems.map((food) => (
                    <td key={`${food.id}-${field.key}`}>{formatValue(food, field)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}


export default ComparePage;
