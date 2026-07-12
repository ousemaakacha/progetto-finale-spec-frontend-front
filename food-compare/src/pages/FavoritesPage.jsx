import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <>
      <div className="mb-4">
        <h1 className="h2 mb-1">Preferiti</h1>
        <p className="text-muted mb-0">Gli alimenti salvati restano disponibili anche dopo il refresh.</p>
      </div>

      {favorites.length === 0 ? (
        <EmptyState
          title="Lista preferiti vuota"
          text="Aggiungi gli alimenti che vuoi ritrovare velocemente."
        >
          <Link className="btn btn-success" to="/">Scopri gli alimenti</Link>
        </EmptyState>
      ) : (
        <div className="row g-4">
          {favorites.map((food) => (
            <div className="col-md-6 col-xl-4" key={food.id}>
              <FoodCard food={food} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FavoritesPage;
