import { useFavorites } from "../context/FavoritesContext.jsx";

//funzione per aggiunta e rimozione alimento dai favoriti
function FavoriteButton({ food }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(food.id);

    return (
    <button
      type="button"
      className={`btn ${active ? "btn-warning" : "btn-outline-warning"}`}
      onClick={() => toggleFavorite(food)}
    >
      <i className={`bi ${active ? "bi-star-fill" : "bi-star"} me-1`}></i>
      {active ? "Preferito" : "Preferito"}
    </button>
  );
}


export default FavoriteButton