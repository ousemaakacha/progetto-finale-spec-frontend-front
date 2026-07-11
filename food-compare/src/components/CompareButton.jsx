import { useCompare } from "../context/CompareContext.jsx";

function CompareButton({ food }) {
  const { isInCompare, addToCompare, removeFromCompare } = useCompare();
  const selected = isInCompare(food.id);

  function handleClick() {
    if (selected) {
      removeFromCompare(food.id);
    } else {
      addToCompare(food);
    }
  }

  return (
    <button
      type="button"
      className={`btn ${selected ? "btn-success" : "btn-outline-success"}`}
      onClick={handleClick}
    >
      {selected ? "Nel confronto" : "Confronta"}
    </button>
  );
}

export default CompareButton